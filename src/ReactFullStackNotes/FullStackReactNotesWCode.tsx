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
          { text: 'To properly import', emphasis: false },
          { text: 'Sequelize', emphasis: true },
          { text: 'into a project, you will need to use the following command to import it into your', emphasis: false },
          { text: 'Connection.ts', emphasis: true },
          { text: 'file:', emphasis: false },
          { text: `import { Sequelize } from 'sequelize';`, code: true },
        ],
      },
      {
        content: [
          { text: 'You also need to', emphasis: false },
          { text: 'import', emphasis: true},
          { text: 'your', emphasis: false },
          { text: 'dotenv', emphasis: true },
          { text: 'file using the following', emphasis: false },
          { text: 'import', emphasis: true },
          { text: 'statement into your', emphasis: false },
          { text: 'Connection.ts', emphasis: true },
          { text: 'file:', emphasis: false },
          { text: `import dotenv from 'dotenv';`, code: true },
        ],
      },
      {
        content: [
            { text: 'The following commands are an example of how you would', emphasis: false },
            { text: 'create', emphasis: true },
            { text: 'a', emphasis: false },
            { text: 'connection object', emphasis: true },
            { text: 'to connect to a', emphasis: false },
            { text: 'PostgreSQL', emphasis: true },
            { text: 'database:', emphasis: false },
            { text: 'const sequelize = process.env.DB_URL', code: true },
            { text: '? new Sequelize(process.env.DB_URL)', code: true },
            { text: `: new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {`, code: true },
            { text: `host: 'localhost',`, code: true },
            { text: `dialect: 'postgres',`, code: true },
            { text: 'dialectOptions: {', code: true },
            { text: 'decimalNumbers: true', code: true },
            { text: `}`, code: true },
            { text: `});`, code: true },
        ],
    },
];

export default fullStackReactItemsWithCode;
