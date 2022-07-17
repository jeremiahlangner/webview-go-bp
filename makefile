.PHONY: all build clean

build:
	go build -o bin/app app.go 

run:
	./bin/app-linux-amd64

compile: 
	GOOS=linux GOARCH=amd64 go build -o bin/game-linux-amd64 main.go
	GOOS=darwin GOARCH=amd64 go build -o bin/game-macOs-intel main.go
