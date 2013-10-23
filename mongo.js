/*

    Crud example. RingoJS + MongoDB.
    
    @author: PauloLuan

*/

addToClasspath(module.resolve('./mongo-driver.jar'));

/****************************************
*										*
****************************************/
var connect = function()
{
	var mongo = new Packages.com.mongodb.MongoClient( "localhost" , 27017 );
	return mongo;
};

/****************************************
*										*
****************************************/
var save = function(object)
{
	/*

	var obj = {
		name: "Paulo Luan",
		age: 23,
		createdDate: new Packages.java.util.Date()
	}
	
	for(key in obj){
		print(" Key: ", key, " Value: ", obj[key])
	}	

	*/

	try
	{

		var doc = new Packages.com.mongodb.BasicDBObject();

		for(key in object)
		{
			doc.put(key, object[key]);
		}

		table.insert(doc);
	
	}
	catch(error)
	{
		print("Erro na frente da galera D: ", error);
	}
};

var update = function()
{ 
	var query = new Packages.com.mongodb.BasicDBObject();
	query.put("name", "Paulo Luan");
 
	var newdoc = new Packages.com.mongodb.BasicDBObject();
	newdoc.put("name", "Paulo Luan updated!");
 
	var updateObj = new Packages.com.mongodb.BasicDBObject();
	updateObj.put("$set", newdoc);
 
	table.update(query, updateObj);
};

/****************************************
*										*
****************************************/
var find = function(key, value)
{ 
	var searchQuery = new Packages.com.mongodb.BasicDBObject();
	searchQuery.put(key, value);
	//searchQuery.put("name", "Paulo Luan");
 
	var cursor = table.find(searchQuery);
 
	while (cursor.hasNext()) 
	{
		print(cursor.next());
	}
};

/****************************************
*										*
****************************************/
var deleteObj = function()
{ 
	var searchQuery = new Packages.com.mongodb.BasicDBObject();
	searchQuery.put("name", "mkyong");
 
	table.remove(searchQuery);
};


/****************************************
*										*
****************************************/
var displayDatabases = function()
{
	var dbNames = mongo.getDatabaseNames();

	for (var i = 0; i < dbNames.size(); i++) {
	 	print(dbNames.get(i));
	};
};

var getDatabases = function()
{
	var dbNames = mongo.getDatabaseNames();
	var databases = [];

	for (var i = 0; i < dbNames.size(); i++) 
	{
		try
		{
			var dbName = dbNames.get(i);
			var database = mongo.getDB(dbName);
			databases.push(database);
		}
		catch(error){}
	};	
	
	return databases;
};


/****************************************
*										*
****************************************/
var displayCollections = function()
{
	var databases = this.getDatabases();

	for (var i = 0; i < databases.length; i++)
	{
		var database = databases[i];
		var tables = database.getCollectionNames();

		print("\n\n************* ", database.name, " *************");
		print(tables.toString());
	};
};


var mongo = this.connect();
var db = mongo.getDB("mongojug");
var table = db.getCollection("user");


exports.connect = connect;
exports.save = save;
exports.find = find;
exports.deleteObj = deleteObj;
exports.displayDatabases = displayDatabases;
exports.getDatabases = getDatabases;
exports.displayCollections = displayCollections;



