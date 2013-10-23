ringo-mongodb
=============

Mongodb crud example, using RingoJS and the official mongodb Java driver.


How to use: 
=============

install [ringoJS](https://github.com/ringo/ringojs/), then run:
	
Clone the repository: 

	you@prompt:~$ git clone https://github.com/PauloLuan/ringo-mongodb.git
	you@prompt:~$ cd ringo-mongodb

run [mongodb](http://www.mongodb.org/‎):

	you@prompt:~$ mongod
	you@prompt:~$ mongo

run ringo into the folder: 
	
	you@prompt:~$ ringo

Now, just start using the functions! for example:
	
	>> var mongo = require("./mongo.js");
	>> mongo.displayCollections();
