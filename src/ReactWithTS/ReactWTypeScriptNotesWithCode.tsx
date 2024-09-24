import { ListItem } from '../Components/Types';

const reactAndTypescriptItemsWithCode: ListItem[] = [
  {
    content: [
      { text: 'When using', emphasis: false },
      { text: 'interfaces', emphasis: true },
      { text: 'the following', emphasis: false },
      { text: 'keyword', emphasis: true },
      { text: 'makes', emphasis: false },
      { text: `TypeScript's type checker`, emphasis: true },
      { text: 'run', emphasis: false },
      { text: 'faster.', emphasis: true },
      { text: 'than when using a different symbol for', emphasis: false },
      { text: 'types', emphasis: true },
      { text: 'extends', code: true },
    ],
  },
  {
    content: [
      { text: 'The following symbol is used with', emphasis: false },
      { text: 'types', emphasis: true },
      { text: 'to create an', emphasis: false },
      { text: 'intersection', emphasis: true },
      { text: '&', code: true },
    ],
  },
  {
    content: [
      { text: 'the following', emphasis: false },
      { text: 'hook', emphasis: true },
      { text: 'is used to', emphasis: false },
      { text: 'access', emphasis: true },
      { text: 'and', emphasis: false },
      { text: 'manage', emphasis: true },
      { text: 'the', emphasis: false },
      { text: 'state', emphasis: true },
      { text: 'in between', emphasis: false },
      { text: 'components', emphasis: true },
      { text: 'without needing to pass', emphasis: false },
      { text: 'props', emphasis: true },
      { text: 'down to the', emphasis: false },
      { text: 'component', emphasis: true },
      { text: 'tree.', emphasis: false },
      { text: 'manually', emphasis: true },
      { text: 'useContext', code: true },
    ],
  },
  {
    content: [
      { text: 'The following file is used to set the', emphasis: false },
      { text: 'configuration rules', emphasis: true },
      { text: 'for the', emphasis: false },
      { text: 'React application', emphasis: true },
      { text: 'portion of the project.', emphasis: false },
      { text: 'tsconfig.app.json', code: true },
    ],
  },
  {
    content: [
      { text: 'The following file is used to set the', emphasis: false },
      { text: 'configuration rules', emphasis: true },
      { text: 'for the', emphasis: false },
      { text: 'Node.js environments', emphasis: true },
      { text: 'portions of the project.', emphasis: false },
      { text: 'tsconfig.node.json', code: true },
    ],
  },
  {
    content: [
      { text: 'The following code is an example of', emphasis: false },
      { text: 'combining two interfaces', emphasis: true },
      { text: 'into', emphasis: false },
      { text: 'one', emphasis: true },
      { text: 'by giving them the', emphasis: false },
      { text: 'same name', emphasis: true},
      { text: 'interface Person {', code: true },
      { text: 'firstName: string;', code: true },
      { text: '}', code: true },
      { text: 'interface Person {', code: true },
      { text: 'lastName: string;', code: true },
      { text: '}', code: true },
    ],
  },
  {
    content: [
      { text: 'The following', emphasis: false },
      { text: 'rule', emphasis: true },
      { text: 'does not allow you to use the same', emphasis: false },
      { text: 'interface', emphasis: true },
      { text: 'name more than once inside your', emphasis: false },
      { text: 'linter', emphasis: true },
      { text: 'no-redeclare', code: true },
    ],
  },
  {
    content: [
      { text: 'When using a', emphasis: false },
      { text: '.env', emphasis: true },
      { text: 'package in the', emphasis: false },
      { text: 'front-end', emphasis: true },
      { text: 'you have to prefix the', emphasis: false },
      { text: 'key value pairs', emphasis: true },
      { text: 'with the following at the start of any', emphasis: false },
      { text: 'environment variables:', emphasis: true },
      { text: 'VITE_', code: true },
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

export default reactAndTypescriptItemsWithCode;
