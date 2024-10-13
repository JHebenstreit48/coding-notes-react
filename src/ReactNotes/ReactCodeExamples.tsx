import { ListItem } from '../Components/Types';

// Define the types for each text part and for the list item

// Define the functional component with TypeScript and use the default export function syntax

const ReactItemsWithCode: ListItem[] = [
  {
    content: [
      { text: 'The', emphasis: false },
      { text: 'best practice to have the most', emphasis: true },
      { text: 'up-to-date', emphasis: false },
      { text: 'version of', emphasis: true },
      { text: 'Vite', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'Enter the following commind in the', emphasis: false },
      { text: 'terminal:', code: true },
      { text: 'npx create vite@latest', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'The following code is an HTML', emphasis: false },
      { text: '<a>', emphasis: true },
      { text: 'tag under the hood. It comes from React Router DOM.', emphasis: false },
      { text: 'Link', code: true },
    ],
  },
  {
    content: [
      { text: 'The parent HTML tag always has to have the following', emphasis: false },
      { text: 'attribute', emphasis: true },
      { text: 'to identify an', emphasis: false },
      { text: 'element', emphasis: true },
      { text: 'of the', emphasis: false },
      { text: 'same type', emphasis: true },
      { text: 'among its', emphasis: false },
      { text: 'siblings', emphasis: true },
      { text: 'during page', emphasis: false },
      { text: 'rendering and re-rendering.', emphasis: true },
      { text: 'key=()', code: true },
    ],
  },
  {
    content: [
      { text: 'Classes', emphasis: true },
      { text: 'in React are not indicated by the same attribute as they are in HTML', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'In React', emphasis: false },
      { text: 'classes', emphasis: true },
      { text: 'are indicated by the following line of code', emphasis: false },
      { text: `className=""`, code: true },
      { text: 'instead of', emphasis: false },
      { text: 'class=""', code: true },
    ],
  },
  {
    content: [
      { text: 'The following code is an example of a way to add', emphasis: false },
      { text: 'props', emphasis: true },
      { text: 'to a', emphasis: false },
      { text: 'component', emphasis: true },
      { text: 'function Pet(props) {', code: true },
      { text: 'return (', code: true },
      { text: '<li>', code: true },
      { text: '{props.name} is a {props.species} and is {props.age} years old.', code: true },
      { text: '</li>', code: true },
      { text: ')', code: true },
      { text: '}', code: true },
    ],
  },
  {
    content: [
      { text: 'The following React', emphasis: false },
      { text: 'function', emphasis: true },
      { text: 'allows us to', emphasis: false },
      { text: 'add', emphasis: true },
      { text: 'a', emphasis: false },
      { text: 'state', emphasis: true },
      { text: 'to your', emphasis: false },
      { text: 'component', emphasis: true },
      { text: 'useState()', code: true },
      { text: 'The following code is an example of useState()', emphasis: false },
      { text: `const [name, setName] = useState('Edward');`, code: true },

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

export default ReactItemsWithCode;
