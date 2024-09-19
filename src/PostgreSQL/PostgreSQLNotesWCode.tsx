import { ListItem } from '../Components/Types';

const postgreSQLItemsWithCode: ListItem[] = [
    {
        content: [
          { text: 'To login to', emphasis: false },
          { text: 'PostgreSQL', emphasis: true },
          { text: 'you would enter the following line of code into the', emphasis: false },
          { text: 'terminal', emphasis: true },
          { text: 'psql -U postgres', code: true },
          { text: 'This will prompt you for your.', emphasis: false },
          { text: 'password', emphasis: true },
          { text: 'Then you will run the following command to', emphasis: false },
          { text: 'create', emphasis: true },
          { text: 'a', emphasis: false },
          { text: 'database', emphasis: true },
          { text: 'CREATE DATABASE', code: true },
          { text: 'your_database_name;', emphasis: false },
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
