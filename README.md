
@This steps are for to build a NODE.js DOCKER image (Before Deploy to Production):
    # First step (Create the image) we have to run this command:
    -> docker build -t imgfoodchain .

    # Second step (Run the image as a Container) we have to run this command:
    -> docker run -d -p 3000:3000 --name appfoodchain imgfoodchain

    # Third step (Open the terminal inside the container) we have to run this command:
    -> docker exec -it [CONTAINER ID] /bin/bash



@To run the watcher for convert sass files from sass/main.scss to the public/sass-style.css type this command:
    -> npm run sass:watch

@To run the watcher for create classes tailwind into the public/tailwind-style.css type this command:
    -> npm run tailwind:watch

@To run the server nodemon
    -> nodemon

