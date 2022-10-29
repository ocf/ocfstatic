pipeline {
    agent {
        label 'slave'
    }

    options {
        ansiColor('xterm')
        timeout(time: 1, unit: 'HOURS')
        timestamps()
    }

    stages {
        stage('check-gh-trust') {
            steps {
                checkGitHubAccess()
            }
        }

        stage('set-version') {
            steps {
                script {
                    sha = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                    version = "${new Date().format("yyyy-MM-dd-'T'HH-mm-ss")}-git${sha}"
                    repo_name_tokens = env.JOB_NAME.split('/')
                    repo_name = repo_name_tokens.length < 2 ? env.JOB_NAME : repo_name_tokens[repo_name_tokens.length - 2]
                }
            }
        }

        stage('parallel-test-cook') {
            environment {
                DOCKER_REPO = 'docker-push.ocf.berkeley.edu/'
                DOCKER_REVISION = "${version}"
            }
            parallel {
                stage('test') {
                    steps {
                        script {
                            sh 'make -q test || if [ "$?" -ne "2" ]; then make test; fi'
                        }
                    }
                }

                stage('cook-image') {
                    steps {
                        sh 'make -q cook-image || if [ "$?" -ne "2" ]; then make cook-image; fi'
                    }
                }
            }
        }

        stage('push-to-registry') {
            environment {
                DOCKER_REPO = 'docker-push.ocf.berkeley.edu/'
                DOCKER_REVISION = "${version}"
            }
            when {
                branch 'master'
            }
            agent {
                label 'deploy'
            }
            steps {
                sh 'make -q push-image || if [ "$?" -ne "2" ]; then make push-image; fi'
            }
        }

        stage('deploy-to-prod') {
            when {
                branch 'master'
            }
            agent {
                label 'deploy'
            }
            steps {
                script {
                    if (fileExists('kubernetes')) {
                        kubernetesDeployApp(repo_name, version)
                    }
                }
            }
        }

        stage('deploy-to-preview') {
            when {
                expression {
                    return env.CHANGE_ID
                }
            }
            environment {
                DOCKER_REPO = 'docker-push.ocf.berkeley.edu/'
                DOCKER_REVISION = "${version}"
            }
            agent {
                label 'deploy'
            }
            steps {
                script {
                    // Only run on pull requests
                    if (env.CHANGE_ID) {
                        withKubeConfig([credentialsId: 'kubernetes-deploy-token',
                                        serverUrl: 'https://kubernetes.ocf.berkeley.edu:6443'
                        ]) {
                            def status = sh returnStatus: true, script: "make preview-deploy PREVIEW_DEPLOY_ID=${env.BRANCH_NAME}"
                            if (status != 0) {
                                pullRequest.comment("Preview deployment failed! See Jenkins output for more details: ${env.BUILD_URL}")
                            } else {
                                pullRequest.comment("View the preview deployment of this pull request here: https://${env.BRANCH_NAME}.new.ocf.berkeley.edu")
                            }
                        }
                    }
                }
            }
        }
    }

    post {
        failure {
            emailNotification()
        }
        always {
            ircNotification()
        }
    }
}