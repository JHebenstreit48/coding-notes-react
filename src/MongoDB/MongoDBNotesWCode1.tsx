import { ListItem } from '../Components/Types';

const mongoDBItemsWithCode: ListItem[] = [
  {
    content: [
      { text: 'The following commands are used to', emphasis: false },
      { text: 'start', emphasis: true },
      { text: 'the', emphasis: false },
      { text: 'MongoDB shell', emphasis: true },
      { text: 'mongo', code: true },
      { text: 'mongosh', code: true },
    ],
  },
  {
    content: [
      { text: 'The following command is for ', emphasis: false },
      { text: 'Mongo Driver', emphasis: true },
      { text: 'mongod', code: true },
    ],
  },
  {
    content: [
      { text: 'You can also type the following command in the', emphasis: false },
      { text: 'shell', emphasis: true },
      { text: 'to get a', emphasis: false },
      { text: 'list', emphasis: true },
      { text: 'of', emphasis: false },
      { text: 'other', emphasis: true },
      { text: 'commands', emphasis: false },
      { text: 'help', code: true },
    ],
  },
  {
    content: [
      { text: 'The following command is used to either', emphasis: false },
      { text: 'create', emphasis: true },
      { text: 'the', emphasis: false },
      { text: 'database', emphasis: true },
      { text: 'or', emphasis: false },
      { text: 'switch', emphasis: true },
      { text: 'to the', emphasis: false },
      { text: 'database', emphasis: true },
      { text: 'if the', emphasis: false },
      { text: 'database', emphasis: true },
      { text: 'already exists', emphasis: false },
      { text: 'use', code: true },
    ],
  },
  {
    content: [
      { text: 'The following command will', emphasis: false },
      { text: 'show', emphasis: true },
      { text: 'a', emphasis: false },
      { text: 'list', emphasis: true },
      { text: 'of', emphasis: false },
      { text: 'all', emphasis: true },
      { text: 'the', emphasis: false },
      { text: 'aviailable', emphasis: true },
      { text: 'databases', emphasis: false },
      { text: 'show databases', code: true },
      { text: 'show dbs', code: true },
    ],
  },
  {
    content: [
      { text: 'The following code is an example of how to', emphasis: false },
      { text: 'create', emphasis: true },
      { text: 'a', emphasis: false },
      { text: 'collection', emphasis: true },
      { text: 'and ', emphasis: false },
      { text: 'insert data', emphasis: true },
      { text: 'into a', emphasis: false },
      { text: 'document', emphasis: true },
      { text: 'in one fell swoop', emphasis: false },
      { text: 'db.collectionName.insertOne(', code: true },
      { text: '{', code: true },
      { text: 'key1: value1,', code: true },
      { text: 'key2: value2,', code: true },
      { text: '}', code: true },
      { text: ')', code: true },
    ],
  },
  {
    content: [
      { text: 'Calling the following', emphasis: false },
      { text: 'function', emphasis: true },
      { text: 'a', emphasis: false },
      { text: 'model', emphasis: true },
      { text: 'is', emphasis: false },
      { text: 'compiled', emphasis: true },
      { text: 'for you by', emphasis: false },
      { text: 'Mongoose', emphasis: true },
      { text: 'mongoose.model()', code: true },
    ],
  }, 
  {
    content: [
      { text: 'The following MongoDB', emphasis: false },
      { text: 'method', emphasis: true },
      { text: 'returns a', emphasis: false },
      { text: '12-byte', emphasis: true },
      { text: 'object ID', emphasis: false },
      { text: 'ObjectId()', code: true },
    ],
  },
  {
    content: [
      { text: '', emphasis: false }
    ]
  },
  {
    content: [
      { text: '', emphasis: true },
      { text: '', emphasis: false },
      { text: '', emphasis: true },
      { text: '', emphasis: false },
    ],
  },
  {
    content: [
      { text: '', emphasis: true },
      { text: '', emphasis: false },
      { text: '', emphasis: true },
      { text: '', emphasis: false },
    ],
  },
  {
    content: [
      { text: '', emphasis: true },
      { text: '', emphasis: false },
      { text: '', emphasis: true },
      { text: '', emphasis: false },
    ],
  },
];

export default mongoDBItemsWithCode;
