# Express Server

##  Setting up the application

- An express server was created with express generator using 
  - `express bewgleServer ` (this step can be skipped for the setup as the app is already generated)
  -  Install the dependencies 
  `npm install`
  - Start the server `npm start`
- Setting up the MongoDB
	- create a new folder named `mongodb` at a convenient location
	- move to this folder and create a new file name `data`
	- start the server by running `sudo mongod --dbpath=data --bind_ip 127.0.0.1`
	- In another terminal, open the mongo shell and create a new database
		- `mongo`(opens the mongo shell, which connects to the running mongo server)
		- `use bewgle` (creates and uses the database bewgle)
- In the project directory, under services, `mongoService.js`  connects the mongdb server with the express server

##  Response Model

- Under `models/responseModel.js`, the model for the response schema is defined.



## Routes

### /process 
- `routes/process.js` returns a json response and also saves it in the database
- Open Postman and test for the `/process` with any HTTP method.
-  Example response (returned after random duration)
	```
	{
	    "date": "2021-02-02T15:25:27.182Z",
	    "method": "GET",
	    "headers": {
	        "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
	        "user-agent": "PostmanRuntime/7.26.8",
	        "accept": "*/*",
	        "postman-token": "38ae9dd1-52c4-436e-bcf4-b44b8a9963ab",
	        "host": "localhost:3000",
	        "accept-encoding": "gzip, deflate, br",
	        "connection": "keep-alive"
	    },
	    "path": "/process",
	    "query": {},
	    "body": {},
	    "duration": 16
	}
	```

### /stats
- `routes/stats.js` returns the json response of the total requests grouped by HTTP methods, alongwith average duration and total count of the methods
- Example response
	```
	[
	    {
	        "_id": "POST",
	        "average_response": 23,
	        "total": 1
	    },
	    {
	        "_id": "GET",
	        "average_response": 17.75,
	        "total": 4
	    }
	]
	```

### /stats/:fromDate&:toDate

- `routes/stats.js` returns the json response of the total requests grouped by HTTP methods, alongwith average duration and total count of the methods between a range of date
- example for a request between 2021-01-03 and 2021-02-03 (YYYY-MM-DD)
	`localhost:3000/stats/2021-01-03&2021-02-03`
	```
	[
	    {
	        "_id": "POST",
	        "average_response": 23,
	        "total": 1
	    },
	    {
	        "_id": "GET",
	        "average_response": 17.75,
	        "total": 4
	    }
	]

	
	```

