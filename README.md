ringo-mongodb
=============

Mongodb crud example, using RingoJS and the official mongodb Java driver.


How to use: 
=============

install [ringoJS](https://github.com/ringo/ringojs/), then run:
	
Clone the repository: 

	git clone https://github.com/PauloLuan/ringo-mongodb.git
	cd ringo-mongodb

run [mongodb](www.mongodb.org/‎):

	mongod
	mongo

run ringo into the folder: 
	
	ringo

Now, just start using the functions! for example:
	
	>> var mongo = require("./mongo.js");
	>> mongo.displayCollections();
