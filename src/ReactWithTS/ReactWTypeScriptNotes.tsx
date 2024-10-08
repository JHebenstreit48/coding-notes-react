import { ListItem } from '../Components/Types';

const items: ListItem[] = [
  {
    content: [
      { text: 'TypeScript', emphasis: false },
      { text: 'generics', emphasis: true },
      { text: 'in React, enable you to create', emphasis: false },
      { text: 'reusable components', emphasis: true },
    ],
  },
  {
    content: [
      { text: 'Generics', emphasis: true },
      { text: 'allow you to define', emphasis: false },
      { text: 'components', emphasis: true },
      { text: 'that are', emphasis: false },
      { text: 'flexible', emphasis: true },
      { text: 'enough to work with various', emphasis: false },
      { text: 'data types,', emphasis: true },
      { text: 'while still maintaining', emphasis: false },
      { text: 'type safety.', emphasis: true },
    ],
  },
  {
    content: [
      { text: 'The', emphasis: false },
      { text: 'useContext', emphasis: true },
      { text: 'hook, allows you to make data', emphasis: false },
      { text: 'accessible directly', emphasis: true },
      { text: 'where it is needed in your application', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'A', emphasis: false },
      { text: 'tsconfig.node.json', emphasis: true },
      { text: 'file, is used to set the', emphasis: false },
      { text: 'configuration rules', emphasis: true },
      { text: 'for the', emphasis: false },
      { text: 'Node.js', emphasis: true },
      { text: 'environment', emphasis: false },
      { text: 'portions', emphasis: true },
      { text: 'of your project', emphasis: false },

    ],
  },
  {
    content: [
      { text: 'An', emphasis: false },
      { text: 'intersection', emphasis: true },
      { text: 'is used with', emphasis: false },
      { text: 'types', emphasis: true },
      { text: 'to', emphasis: false },
      { text: 'combine multiple types', emphasis: true },
      { text: 'into', emphasis: false },
      { text: 'one', emphasis: true },
    ],
  },
  {
    content: [
      { text: 'This in turn allows you to', emphasis: false },
      { text: 'add together', emphasis: true },
      { text: 'existing', emphasis: false },
      { text: 'types', emphasis: true },
      { text: 'into a', emphasis: false },
      { text: 'single type', emphasis: true },
      { text: 'that has', emphasis: false},
      { text: 'all', emphasis: true },
      { text: 'of the', emphasis: false },
      { text: 'features', emphasis: true },
      { text: 'you need', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'If you create two', emphasis: false },
      { text: 'interfaces', emphasis: true },
      { text: 'in', emphasis: false },
      { text: 'React with TypeScript', emphasis: true },
      { text: 'that have the', emphasis: false },
      { text: 'same name, ', emphasis: true },
      { text: 'and are declared in the same', emphasis: false },
      { text: 'scope', emphasis: true },
      { text: 'they will', emphasis: false },
      { text: 'merge', emphasis: true },
      { text: 'their', emphasis: false },
      { text: 'declarations', emphasis: true },
      { text: 'together into', emphasis: false },
      { text: 'one interface', emphasis: true },
    ],
  },
  {
    content: [
      { text: 'Index signatures', emphasis: true },
      { text: 'are used when you know the', emphasis: false },
      { text: 'key', emphasis: true },
      { text: 'and', emphasis: false },
      { text: 'value types', emphasis: true },
      { text: 'of an', emphasis: false },
      { text: 'object', emphasis: true },
    ],
  },
  {
    content: [
      { text: 'When you use React ', emphasis: false },
      { text: 'with TypeScript', emphasis: true },
      { text: ' it is best practice to declare our types in a ', emphasis: false },
      { text: '.d.ts', emphasis: true },
      { text: 'file', emphasis: false },

    ],
  },
  {
    content: [
      { text: 'If you add the following keyword into a', emphasis: false },
      { text: '.d.ts', emphasis: true },
      { text: 'file before the', emphasis: false },
      { text: 'type', emphasis: true },
      { text: 'it loses the capability of', emphasis: false },
      { text: 'declaring', emphasis: true },
      { text: 'types', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'When using', emphasis: false },
      { text: 'React', emphasis: true },
      { text: 'with', emphasis: false },
      { text: 'TypeScript', emphasis: true },
      { text: 'you should use', emphasis: false },
      { text: 'types', emphasis: true },
      { text: 'by default versus', emphasis: false },
      { text: 'interfaces', emphasis: true },
    ],
  },
  {
    content: [
      { text: 'You should only use', emphasis: false },
      { text: 'interfaces', emphasis: true },
      { text: 'when you need a', emphasis: false },
      { text: 'specific feature', emphasis: true },
      { text: 'of', emphasis: false },
      { text: 'interfaces', emphasis: true },
      { text: 'that is not available with', emphasis: false },
      { text: 'types', emphasis: true },
    ],
  },
  {
    content: [
      { text: 'Interfaces CANNOT', emphasis: true },
      { text: 'express', emphasis: false },
      { text: 'unions, mapped types,', emphasis: true },
      { text: 'or', emphasis: false },
      { text: 'conditional types', emphasis: true },
    ],
  },
  {
    content: [
      { text: 'When you are using', emphasis: false },
      { text: 'objects', emphasis: true },
      { text: 'that', emphasis: false },
      { text: 'inherit', emphasis: true },
      { text: 'from', emphasis: false },
      { text: 'each other', emphasis: true },
      { text: 'you should use', emphasis: false },
      { text: 'interfaces', emphasis: true },
    ],
  },
  {
    content: [
      { text: 'A', emphasis: false },
      { text: 'linter', emphasis: true },
      { text: 'helps catch potential', emphasis: false },
      { text: 'bugs, bad practices, enforce code style conventions, improve overall code quality, streamline the development process', emphasis: true },
      { text: 'and', emphasis: false },
      { text: 'boost efficiency', emphasis: true },
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

export default items;
