<span class="emphasis">NoSQL</span> databases like <span class="emphasis">MongoDB</span> are a <span class="emphasis">non-relational</span> database or <span class="secondEmphasis">non-relational database management system (DBMS)</span>.

<span class="emphasis">MongoDB</span> is an <span class=emphasis>open-source</span> database and uses <span class="emphasis">documents</span>, <span class="emphasis">objects</span>, or <span class="emphasis">arrays</span> instead of <span class="emphasis">tables</span> and <span class="emphasis">rows</span> to <span class="emphasis">store </span><span class="secondEmphasis">data</span>. 

<span class="emphasis">Documents</span> in <span class="emphasis">MongoDB</span> are equivalent to the <span class="emphasis">rows</span> of <span class="emphasis">data</span> in <span class="emphasis">SQL</span>

MongoDB uses <span class="emphasis">documents</span> and <span class="emphasis">objects</span> or <span class="emphasis">arrays</span>, and <span class="emphasis">rows</span> to <span class="emphasis">store</span> <span class="secondEmphasis">data</span>.

- Which is the opposite of how <span class="emphasis">tables</span> are instead used to store <span class="emphasis">data</span> in <span class="emphasis">PostgreSQL</span>.

Objects in MongoDB are stored in a format called BSON which is also known as Binary JSON

- BSON looks and acts like JSON but is optimized for faster parsing.

- BSON is structured into key-value pairs.

Groups of documents are stored in collections.

In a One to One Model relationship in MongoDB is where you typically have an ObjectID data type in one collection that references or points to an ObjectID with the same value in another collection.

- The names of each ObjectID do not have to match but the values of each ObjectID do have to match.

Collections do NOT have an enforced schema like SQL tables to limit the type of data that can be stored.  

- Each document in a collection can have different fields (keys) and can contain different types of data.  

- Related data is NOT split between tables.  

- Instead, it is nested within objects in an embedded documents.

You can have documents in separate collections and have something in common between them that you could use to match them together.

- Related data will be nested in an embedded document as an object or an array of objects.

MongoDB can be used for heterogeneous data and is easily scalable.

MongoDB is used to store and process data in a flexible, scalable, and distributed manner.

Mongoose provides a light schema or lightweight wrapper on top of MongoDB and the tools that MongoDB provides.

- The relationship between Mongo and Mongoose is similar to the relationship between SQL and Sequelize.

- Mongoose enforces a more rigid structure to MongoDB, similar to how TypeScript enforces types onto JavaScript.

MongoDB Compass is the Graphic User Interface (GUI) for MongoDB, which allows you to interact with your database/data in a visual manner.

The default port for MongoDB is 27017.

If you go into the Mongo shell there is a small "i" icon in the top right corner, which will pull up a list of helpful commands/keyboard shortcuts.

The ObjectID() method is a total of 12 bytes long and consists of the following:
  - A 4-byte timestamp representing the ObjectId's creation
    - Which is measured in seconds
  - A 5-byte random value generated once per process
  - A 3-byte incrementing counter  


