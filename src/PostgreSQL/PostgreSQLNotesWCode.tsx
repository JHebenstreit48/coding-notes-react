import { ListItem } from '../Components/Types';

const postgreSQLItemsWithCode: ListItem[] = [
  {
    content: [
      { text: 'To login to', emphasis: false },
      { text: 'PostgreSQL', emphasis: true },
      { text: 'you would enter the following line of code into the', emphasis: false },
      { text: 'terminal:', emphasis: true },
      { text: 'psql -U <username>', code: true },
    ],
  },
  {
    content: [
      
      { text: 'The', emphasis: false },
      { text: 'default', emphasis: true },
      { text: 'username is the following when initially', emphasis: false },
      { text: 'installing / setting up', emphasis: true },
      { text: 'PostgreSQL is:', emphasis: false },
      { text: 'postgres', code: true },
    ],
  },
  {
    content: [
      { text: 'This will prompt you for your.', emphasis: false },
      { text: 'password', emphasis: true },
      { text: 'Then you will run the following command to', emphasis: false },
      { text: 'create', emphasis: true },
      { text: 'a', emphasis: false },
      { text: 'database:', emphasis: true },
      { text: 'CREATE DATABASE <your_database_name>;', code: true },
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
  {
    content: [
      { text: '', emphasis: true },
      { text: '', emphasis: false },
      { text: '', emphasis: true },
      { text: '', emphasis: false },
    ],
  },
];

export default postgreSQLItemsWithCode;
