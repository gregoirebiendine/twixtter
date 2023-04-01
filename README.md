
# Twixtter

A personal clone of Twitter, used to improve my skills in Web development

<img src="./gitassets/twixtter_logo.png" width="100" />


## Run Locally

Clone the project

```bash
  git clone https://github.com/gregoirebiendine/twixtter
```

Go to the project directory

```bash
  cd twixtter
```

Copy or rename .env.example file to .env and fill it with your personal tokens (MySQL, secrets, ...)


### For production (Docker)

Build and run docker image

```bash
  docker-compose up
```


### For development (NPM)

Install client's dependencies and run it with npm

```bash
  cd client
  npm i
  npm run dev
```


Install server's dependencies and run it with npm

```bash
  cd server
  npm i
  npm run dev
```


## Tech Stack

**Client:** Svelte, TailwindCSS

**Server:** Node, ExpressJS, PassportJS, MySQL

**Containerization:** Docker


## Authors

- [@gregoirebiendine](https://github.com/gregoirebiendine)

