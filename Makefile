build_docker:
	docker build -t laniakea/frontend:latest -f docker/Dockerfile ./

start_docker:
	docker run --restart unless-stopped -p 8010:80 laniakea/frontend:latest
