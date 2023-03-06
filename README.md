
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

Create your confidential .env file for MySQL in the root
```
MYSQL_ROOT_PASSWORD=YOUR_MYSQL_ROOT_PASSWORD
MYSQL_DATABASE=twixtter_db
MYSQL_USER=YOUR_MYSQL_USERNAME
MYSQL_PASSWORD=YOUR_MYSQL_PASSWORD
```

Build and run docker image

```bash
  docker-compose up
```


## Tech Stack

**Client:** Svelte, TailwindCSS

**Server:** Node, ExpressJS, PassportJS, MySQL

**Containerization:** Docker


## Authors

- [@gregoirebiendine](https://github.com/gregoirebiendine)

