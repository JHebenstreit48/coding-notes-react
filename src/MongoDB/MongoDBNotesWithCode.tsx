const mongoDBNoteswithCodeMkdn = `

- The following commands are used to start the MongoDB shell:  

\`\`\`bash
mongo
mongosh
\`\`\`

- The following command is for Mongo Driver:  

\`\`\`bash
mongod
\`\`\`  

- You can also type the following command in the shell to get a list of other commands:  

\`\`\`bash
help
\`\`\`  

- The following command is used to either create the database or switch to the database if the database already exists:  

\`\`\`bash
use
\`\`\`  

- The following command will show a list of all the aviailable databases:  

\`\`\`bash
show databases    
show dbs
\`\`\`  

- The following code is an example of how to create a collection and insert data into a document in one fell swoop:

\`\`\`bash
db.collectionName.insertOne ({ key1: value1, key2: value2,})
\`\`\`

- Calling the following function a model iscompiled for you by Mongoose:  

\`\`\`bash
mongoose.model()
\`\`\`

- The following MongoDB method returns a 12-byte object ID:

\`\`\`bash
ObjectID
\`\`\`

- 
`;

export default mongoDBNoteswithCodeMkdn;
