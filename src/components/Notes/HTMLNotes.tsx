import { ListItem } from '../OtherComponents/Types';

// Define the types for each text part and for the list item

// Define the functional component with TypeScript and use the default export function syntax

const items: ListItem[] = [
  {
    content: [
      { text: 'Hypertext Markup Language (HTML)', emphasis: true },
      { text: 'is one of the three cornerstone languages.', emphasis: false },
      { text: 'It is the standard markup language for documents designed to be displayed in a web browser.', code: true },
    ],
  },
  {
    content: [
      { text: 'HTML', emphasis: true },
      { text: 'is used to create the', emphasis: false },
      { text: 'structure', emphasis: true },
      { text: 'of a webpage.', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'It is made up of', emphasis: false },
      { text: 'elements', emphasis: true },
      { text: 'which work together to provide content and the basic framework for all pages on the web.', emphasis: false },
    ],
  },
];

export default items;
