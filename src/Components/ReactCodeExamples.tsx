import { ListItem } from './Types';

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
      { text: '', emphasis: false },
      { text: '', emphasis: true },
      { text: '', emphasis: false },
    ],
  },
];

export default items;
