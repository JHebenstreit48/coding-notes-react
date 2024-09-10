import { ListItem } from '../Components/Types';

// Define the types for each text part and for the list item

// Define the functional component with TypeScript and use the default export function syntax

const items: ListItem[] = [
  {
    content: [
      { text: 'CSS', emphasis: true },
      { text: 'stands for', emphasis: false },
      { text: 'Cascading Style Sheets', code: true },
      { text: 'and funtions as the ', emphasis: false },
      { text: 'styling', emphasis: true },
      { text: 'or', emphasis: false },
      { text: 'skin', emphasis: true },
      { text: 'of a web page', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'CSS', emphasis: true },
      { text: 'is how you determine the ', emphasis: false },
      { text: 'appearance', emphasis: true },
      { text: 'of', emphasis: false },
      { text: 'HTML elements', emphasis: true },
      { text: 'on a webpage', emphasis: false },

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
