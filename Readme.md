
# The Water Jug Problem

## Description

  

This is a REST API with an implementation to solve the water jug problem.

  

The Water Jug dilemma involves three parameters: X, Y, and Z. X represents the maximum capacity of the first water jug, Y signifies the maximum capacity of the second water jug, and Z denotes the desired target amount of water to be achieved in either of the jugs.

  

Each Water Jug allows you to take three actions: empty, refill, and move water.
  

The objective of this test is to create a program that efficiently addresses the given input problem with the fewest possible steps, if feasible.

  

## Solution

The algorithm selects a primary jug, continuously filling it and transferring its contents to a secondary jug until either jug reaches the desired value. This process is repeated for both Jug X and Jug Y, and the solution with the minimal number of steps is returned.

  

## How to run

This program can be executed using either Docker or by directly running it with NodeJS; there are two available methods.

  

### With Docker

#### Requirements

- [Docker](https://docs.docker.com/desktop/install/windows-install/)


#### Steps

- Begin by installing Docker and ensuring it is operational.

- Once Docker is successfully installed and running, proceed to open a command prompt.

- Navigate to the designated project folder by using the "cd" command in the command prompt.

- Execute the necessary commands within the command prompt to initialize the project.

  

```cmd

docker image build -t waterjug .

docker container run --name waterjug -p 8080:8080 -d waterjug

```

The initial directive involves creating a Docker image for the application, assigning it the identifier "waterjug."

  

Execute the following instruction to launch a Docker container using the "waterjug" Docker image, with the container accessible on port 8080.

  

### With NodeJS

#### Requirements

- [NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


#### Steps

- NodeJS Installation: Begin by installing NodeJS.

- Navigate to Project Directory: Open a command prompt and change the directory to your project folder.

- Execute Commands: In the command prompt, enter the following commands:

  

```

npm i

npm run build

npm run prod

```

  


The initial command installs the necessary dependencies.

Following that, the second command converts the TypeScript code into JavaScript through transpilation.

Lastly, the third command initiates the API, making it accessible on port 8080.

  

## How to use


The API comprises two endpoints:

1. **POST /waterjug:** To solve the Water Jug problem, send a JSON input with the specified values. If a solution is found, it will return the steps taken; otherwise, an error message will be returned. The JSON input format is as follows: `{"x": 3, "y": 5, "z": 4}`.

2. **GET /waterjug/status:** Retrieve the steps taken for the last solved Water Jug problem using this endpoint.

To interact with the API, you can use tools like [Insomnia](https://insomnia.rest/) or command prompt with Curl. Once the program is running, initiate communication through these methods.

```

curl -X POST -H "Content-Type: application/json" -d "{\"x\":2,\"y\":5,\"z\":4}" localhost:8080/waterjug

```
