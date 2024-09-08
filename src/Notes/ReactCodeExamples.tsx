import { ListItem } from '../Components/Types';

// Define the types for each text part and for the list item

// Define the functional component with TypeScript and use the default export function syntax

const items: ListItem[] = [
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
    ],
  },
  {
    content: [
      { text: 'The following code is an example of a way to add', emphasis: false },
      { text: 'props', emphasis: true },
      { text: 'to a', emphasis: false },
      { text: 'component', emphasis: true },
      { text: `function Pet(props) { return ( <li> {props.name} is a {props.species} and is {props.age} years old. </li> )}`, code: true },
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
