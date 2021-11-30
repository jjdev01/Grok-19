# COVID 19 Grok

A COVID 19 dashboard written in React JS to display information regarding infections, deaths and other meaningful information regarding the matter.

# Resources 

- API documentation found [here](https://documenter.getpostman.com/view/1678623/SzfDx54T?version=latest)
    * This data is provided by Jon Hopkins University
- Interactive map for the continental United States found [here](https://www.npmjs.com/package/react-usa-map)
- Interactive map for the entire world found [here](https://www.react-simple-maps.io/docs/getting-started/)

## Installation using Docker

This project is simple to setup:

1. Clone this repository using the command : `git clone https://github.com/JaredDyreson/Expresso.git`
2. `cd` into it
3. Ensure `docker` is installed on your machine, the documentation for your specific machine can be found [here](https://docs.docker.com/get-docker/)
4. To run the current container, you can run `docker-compose up --build -d`. The instance will then be running on [localhost](http://localhost:3000) on port 3000


## Installation not using Docker

**It is recommended at this point to containerize your dependencies so they are easily tracked**

1. Clone this repository using the command : `git clone https://github.com/JaredDyreson/Expresso.git`
2. `cd` into it
3. Ensure `node` is installed, [here](https://nodejs.org/en/) is the landing page for node
4. After `node` is installed, you should then install `yarn` to manage your packages. That can be found [here](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
5. Next, run `yarn install` to install all the dependencies needed for this project to work
6. Then, in a separate terminal window, run the command `npm start` in the root directory of the project
7. This will spawn a new window where the application will be running
