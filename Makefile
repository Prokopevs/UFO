build_docker:
	docker build -t laniakea/frontend:latest -f docker/Dockerfile ./

start_docker:
	docker run --rm -p 8010:80 laniakea/frontend:latest
