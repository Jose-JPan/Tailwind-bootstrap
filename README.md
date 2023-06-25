@This steps are for to build an NODE.js docker image:
    # First step (Create the image):
    We have to run this command $ docker build -t imgfoodchain .

    # Second step (Run the image as a Container):
    We have to run this command $ docker run -d -p 3000:3000 --name appfoodchain imgfoodchain

    # Third step (Open the terminal inside the container):
    We have to run this command $ docker exec -it [CONTAINER ID] /bin/bash

