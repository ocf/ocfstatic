DOCKER_REVISION ?= testing-$(USER)
DOCKER_TAG = docker-push.ocf.berkeley.edu/ocfstatic:$(DOCKER_REVISION)
KUBE_PREVIEW_DEPLOY_NAMESPACE ?= dev-kian
KUBE_PREVIEW_DEPLOY_APP ?= ocfstatic-cd

.PHONY: cook-image
cook-image:
	docker build --pull -t $(DOCKER_TAG) .

.PHONY: push-image
push-image:
	docker push $(DOCKER_TAG)

.PHONY: preview-deploy
preview-deploy:
	$(eval CONTAINER_ID=$(shell sh -c "docker create $(DOCKER_TAG)"))
	$(eval DEPLOY_ID=$(shell echo $(PREVIEW_DEPLOY_ID) | tr '[:upper:]' '[:lower:]'))
	docker cp $(CONTAINER_ID):/usr/share/nginx/html/ ./$(DEPLOY_ID)
	docker rm $(CONTAINER_ID)
	$(eval POD_NAME=$(shell sh -c "kubectl get pods --no-headers -o custom-columns=":metadata.name" -l=app=$(KUBE_PREVIEW_DEPLOY_APP) -n $(KUBE_PREVIEW_DEPLOY_NAMESPACE) | head -n 1"))
	kubectl exec $(POD_NAME) -n $(KUBE_PREVIEW_DEPLOY_NAMESPACE) -- sh -c "rm -rf /var/www/ocfstatic/$(DEPLOY_ID)"
	kubectl cp ./$(DEPLOY_ID) $(KUBE_PREVIEW_DEPLOY_NAMESPACE)/$(POD_NAME):/var/www/ocfstatic/ --no-preserve=true
	rm -rf ./$(DEPLOY_ID)

.PHONY: test
test:
	@echo "test complete"
