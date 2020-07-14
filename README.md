# Subscription API

This is a NodeJS project using Mongoose and Express to build a REST API that connects to a MongoDB database. Unit tested using Jest, Mockingoose and Postman.

In order to get a more detailed understanding of what is required by each API endpoint, refer to the swagger docs provided within the documentation file. 

## To run the database container

Download .tar file provided on request. Please speak with your line manager to access this. This is a docker image of the MongoDB that has been created for ChihuahuaBox. The database can then be run with the command 

`docker start b7da***************d8a5ac743a26****************f4c0ed6953b******` (please confirm ID with line manager)

Alternatively, run the container named _chihuahauBox_db_ from Kitematic. If you have run the command above, you will be returned an ID in your terminal, this indicates a successful start to the container and you can now connect to the database via `localhost: 32770`

## To run API's

Both API's are running from the same port `localhost:5000`. In order to set up this port, 

Run `npm start`

If this has been successful you will recieve two messages in the command line 'Successfully connected to database' followed by 
'Port set up at 5000'. You are now set up to make calls to the database. 

## To stop the database container

NOTE: This will cause errors when trying to call API's when database container has been stopped

`docker stop b7da***************d8a5ac743a26****************f4c0ed6953b******` (please confirm ID with line manager)

Alternatively, run the container named _chihuahauBox_db_ from Kitematic.

## To stop API's

NOTE: This will cause errors when trying to call API's when connection has been stopped.

In order to stop the API's from running, close the terminal that you first used to start it. You will see it has ended as you will no longer recieve outputs from nodemon.

## To run tests

Run `npm test`

This command will kick off Jest testing, the output from the tests will be displayed in the same terminal as the inital command was run. 