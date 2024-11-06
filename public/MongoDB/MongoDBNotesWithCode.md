The following commands are used to start the MongoDB shell:  

```shell
mongo
mongosh
```

The following command is for Mongo Driver:  

```shell
mongod
```  

You can also type the following command in the shell to get a list of other commands:  

```shell
help
```  

The following command is used to either create the database or switch to the database if the database already exists:  

```shell
use
```  

The following command will show a list of all the aviailable databases:  

```shell
show databases    
show dbs
```  

The following code is an example of how to create a collection and insert data into a document in one fell swoop:

```javascript
db.collectionName.insertOne ({ key1: value1, key2: value2,})
```

Calling the following function a model is compiled for you by Mongoose:  

```mongodb
mongoose.model()
```

The following MongoDB method returns a 12-byte object ID:

```mongodb
ObjectID
```

The following Mongoose method is used to query the database for documents that match a specified set of criteria.

- It allows you to retrieve data from a collection and filter it based on the criteria you specify.
- It is the Mongoose version of a GET request in RESTful routing such as Express JS.

```mongodb
find()
```

The following Mongoose method(s) is used to save a new document to the database.

- This is equivalent to a POST request in RESTful routing such as Express JS.
- There are some differences between the following two methods.
- The first method mentioned below is used for incremental creation and modification of documents before saving them to the database.
- The second method mentioned below is used to create and save a document in one step or fell swoop.

```mongodb
save()
create()
```

The following Mongoose method is used to update a document in the database.

- This is equivalent to a PUT request in RESTful routing such as Express JS.

```mongodb
update()
```

The following Mongoose method is used to delete a single document that matches the filter criteria.

- This is equivalent to a DELETE request in RESTful routing such as Express JS.

```mongodb
delete()
```

The following Mongoose operator adds a value to an array unless the value is already present, in which it does nothing to the array.

```mongodb
{ $addToSet: { <field1>: <value1>, ... } }
```

The following Mongoose operator adds a specified value to an array:

- If the field is absent in the document to update it adds the array field with the value as is.
- If the field is not an array, the operation will fail
- If the value is an array it appends the whole array as a single element

```mongodb
{ $push: { <field1>: <value1>, ... } }

```
