Make sure you have both PostgreSQL and Sequelize installed in your package.json file.

Models are class-based representations of sequelized tables.

After naming the Model class, you define the columns needed in a table and what their types are going to be.

After you define the name, columns, and types in the init method, you then add your sequelize data types.

In the init method, you take in two objects.

The first object is where you scaffold out the column names and what types you want to support.

The second object is where you pass in the database connection and any other additional table options you want to turn on / support.

Object-Relational Mapping (ORM) is a programming technique that allows developers to interact with a database using the same programming language they are using to program the application.

Sequelize is a modern TypeScript and Node.js ORM that supports PostgreSQL, MySQL, MariaDB, SQLite, and SQL Server databases.

Sequelize features solid transaction support, relations, and lazy loading, read replication, and more.

Solid transaction support in Sequelize is split into two ways of handling transactions.

The first way transactions are handled is by committing and rolling back transactions by the user through calling the appropriate Sequelize methods in what are known as unmanaged transactions.

The second way transactions are handled is by having Sequelize automatically rollback the transaction if any error is thrown or commit the transaction otherwise. This is known as a managed transaction.

A Sequelize model is a JavaScript class that provides Sequelize with information about the table it represents.

- For example, a model tells Sequelize what the table's name is and what columns it has and their datatypes.

A model's name does not have to be the same as the table it represents.

