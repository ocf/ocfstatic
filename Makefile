DOCKER_REVISION ?= testing-$(USER)
DOCKER_TAG = docker-push.ocf.berkeley.edu/ocfstatic:$(DOCKER_REVISION)

.PHONY: cook-image
cook-image:
	docker build --pull -t $(DOCKER_TAG) . 

.PHONY: push-image
push-image:
	docker push $(DOCKER_TAG)
