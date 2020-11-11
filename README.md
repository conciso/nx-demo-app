# NxDemoApp

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

## get started

`npm install`.

## sync/open xcode project

`nx run demo-app:sync:ios` -> copy data to iOS project
`nx run demo-app:open:ios` -> open iOS project in XCode

## generate android project

`nx run demo-app:sync:android` -> copy data to Android project
`nx run demo-app:open:android`-> open Android project in Android Studio

## run backend in Docker

`nx build --project=api`
`docker build -f docker/Dockerfile -t api .`

`docker run -p 4444:4444 api`

### run backend with docker compose

`docker-compose -f docker/docker-compose.yml up`

## run backend

`nx serve --project=api`

## run frontend

`nx serve --project=demo-app`
