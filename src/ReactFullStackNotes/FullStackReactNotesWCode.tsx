import { ListItem } from '../Components/Types';

const fullStackReactItemsWithCode: ListItem[] = [
    {
        content: [
          { text: 'In order to install', emphasis: false },
          { text: 'Sequelize', emphasis: true },
          { text: 'into your project with', emphasis: false },
          { text: 'Node.js', emphasis: true },
          { text: 'you would use the following command', emphasis: false },
          { text: 'npm i sequelize', code: true },
          { text: 'or', emphasis: false },
          { text: 'npm install sequelize', code: true },
        ],
      },
      {
        content: [
          { text: 'To fully set up full-stack React, you also having to install the following', emphasis: false },
          { text: 'npm', emphasis: true},
          { text: 'packages using either', emphasis: false },
          { text: 'npm i', emphasis: true },
          { text: 'or', emphasis: false },
          { text: 'npm install', emphasis: true },
          { text: ':', emphasis: false },
          { text: 'npm i postgres', code: true },
          { text: 'npm i express', code: true },
          { text: 'npm i dotenv', code: true },
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

export default fullStackReactItemsWithCode;
