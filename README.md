# Event-list

## Run docker

In order to build docker and run docker image run :

```
$ docker build -t event-list-docker .
$ docker run --name nginx-event-list -d -p 8080:80 event-list-docker
```

Then, the website will be available at http://localhost:8080
