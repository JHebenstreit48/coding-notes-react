import { ListItem } from '../OtherComponents/Types';

// Define the types for each text part and for the list item

// Define the functional component with TypeScript and use the default export function syntax

const items: ListItem[] = [
  {
    content: [
      { text: 'The following element contains', emphasis: false },
      { text: 'information', emphasis: true },
      { text: 'or', emphasis: false },
      { text: 'metadata', emphasis: true },
      { text: 'that helps the', emphasis: false },
      { text: 'browser', emphasis: true },
      { text: ' to', emphasis: false },
      { text: 'display/render', emphasis: true },
      { text: 'the webpage correctly', emphasis: false },
      { text: '<head>', code: true },
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
      { text: '', emphasis: false },
      { text: '', emphasis: true },
      { text: '', emphasis: false },
    ],
  },
];

export default items;
