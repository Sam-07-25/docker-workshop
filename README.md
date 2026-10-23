# GWC x FOSS Docker Workshop

Welcome to the **GWC x FOSS Docker Workshop** at UTEP!

This repository contains a small Flask web application designed for a hands-on introduction to Docker.

The application itself is already built so that the focus of the workshop stays on Docker rather than web development.

By the end of the activity, you will use a `Dockerfile` to describe what the application needs, build a Docker image, and run that image as a Docker container.

---

## What You Will Learn

During this workshop, you will practice:

- Understanding the difference between a Dockerfile, image, and container
- Using a pre-built Docker image as a starting point
- Writing a Dockerfile
- Installing application dependencies inside an image
- Building a Docker image
- Running a container
- Mapping container ports to your computer
- Viewing and stopping running containers

The main workflow is:

```text id="ayegi3"
Dockerfile
    ↓
Docker Image
    ↓
Docker Container
    ↓
Running Application
```

---

## About the Application

This repository contains a small Flask web application featuring Ada, GWC's arctic ferret mascot.

Once the application is successfully running through Docker, you will be able to open it in your browser and interact with Ada.

The application code is intentionally simple and includes comments throughout the source files so that you can explore how it works after the workshop if you are interested.

You do not need to understand Flask, HTML, CSS, or JavaScript in detail to complete the Docker activity.

---

## Repository Structure

```text id="hhx35k"
docker-workshop/
│
├── app.py
├── requirements.txt
├── Dockerfile
├── .dockerignore
├── .gitignore
├── README.md
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    ├── script.js
    └── ada.png
```

### `app.py`

Contains the small Flask web server that runs the application and displays the webpage.

### `requirements.txt`

Lists the Python packages required by the application.

### `Dockerfile`

Contains the instructions Docker will use to build the application image.

During the workshop, we will complete this file together.

### `.dockerignore`

Tells Docker which files and folders should not be included when building the Docker image.

### `templates/index.html`

Contains the structure and content of the webpage.

### `static/style.css`

Contains the visual styling for the webpage.

### `static/script.js`

Contains the JavaScript used for the interactive parts of the application.

### `static/ada.png`

Contains the image of Ada used by the application.

---

## Prerequisites

Before the workshop, make sure you have:

- Git
- Docker Desktop
- A code editor such as Visual Studio Code

You can verify that Docker is available by running:

```bash id="lqxb85"
docker --version
```

You can also verify Git with:

```bash id="7ijhon"
git --version
```

---

## Getting the Project

Clone this repository:

```bash id="lupyqb"
git clone <repository-url>
```

Then enter the project folder:

```bash id="0ygwyx"
cd docker-workshop
```

---

## Workshop Activity

During the workshop, we will complete the Dockerfile step by step.

The Dockerfile will describe:

1. Which base image the application should use
2. Where the application should live inside the container
3. How the application dependencies should be installed
4. Which application files should be copied into the image
5. Which port the application uses
6. Which command should run when the container starts

Once the Dockerfile is complete, we will build the image.

```bash id="oikmyd"
docker build -t docker-workshop .
```

You can verify that the image was created with:

```bash id="q3dgs9"
docker images
```

Then run the application as a container:

```bash id="quls16"
docker run -p 8080:5000 docker-workshop
```

The port mapping means:

```text id="ldblbr"
Your Computer              Docker Container

localhost:8080  ─────────►  port 5000
```

Once the container is running, open:

```text id="1chide"
http://localhost:8080
```

in your browser.

If everything worked correctly, you should see Ada!

---

## Useful Docker Commands

View running containers:

```bash id="od5tgz"
docker ps
```

View all containers, including stopped containers:

```bash id="0f048v"
docker ps -a
```

View Docker images:

```bash id="3av0bh"
docker images
```

Stop a running container:

```bash id="x7jp8h"
docker stop <container-id>
```

Remove a stopped container:

```bash id="pvwj6f"
docker rm <container-id>
```

---

## Key Concepts

### Dockerfile

A Dockerfile is a set of instructions that describes how Docker should prepare an application environment.

### Docker Image

A Docker image is the packaged result created from the Dockerfile.

It contains the application, its dependencies, and the environment needed to run it.

### Docker Container

A container is a running instance of a Docker image.

A simple way to remember the relationship is:

```text id="e6r411"
Dockerfile = instructions

Image = packaged application

Container = running application
```

---

## Workshop Goal

The goal of this **GWC x FOSS workshop** is not to become an expert in Flask or web development.

The goal is to understand the basic process of taking an existing application and running it inside a Docker container.

If you leave understanding this workflow:

```text id="r2tfx3"
Dockerfile → Image → Container
```

then you have learned the core concept behind this activity.