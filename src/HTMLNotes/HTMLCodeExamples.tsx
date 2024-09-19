import { ListItem } from '../Components/Types';
// Define the types for each text part and for the list item

// Define the functional component with TypeScript and use the default export function syntax

const htmlItemsWithCode: ListItem[] = [
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
      { text: 'There are multiple types of elements including, but not limited to, the following:', emphasis: false },
      { text: '<p>, <textarea>, <imput>, <label>, <li>, <header>, <img>', code: true },
    ]
  },
  {
    content: [
      { text: 'Common types of', emphasis: false },
      { text: 'elements', emphasis: true },
      { text: 'that are used to', emphasis: false },
      { text: 'divide', emphasis: true },
      { text: 'content into sections are:', emphasis: false },
      { text: '<div>', code: true },
      { text: '<section>', code: true },
    ],
  },
  {
    content: [
      { text: 'The following element represents the', emphasis: false },
      { text: 'visible', emphasis: true },
      { text: 'content shown to the', emphasis: false },
      { text: 'user', emphasis: true },
      { text: '<body>', code: true },
    ],
  },
  {
    content: [
      { text: 'The following tag is used to tell the', emphasis: false },
      { text: 'browser', emphasis: true },
      { text: 'what', emphasis: false },
      { text: 'document type', emphasis: true },
      { text: 'to expect. It is also considered a', emphasis: false },
      { text: 'declaration', emphasis: true },
      { text: 'and is', emphasis: false },
      { text: 'NOT', emphasis: true },
      { text: 'case-sensitive.', emphasis: false },
      { text: '<!DOCTYPE html>', code: true },
    ],
  },
  {
    content: [
      { text: 'The following tag contains the', emphasis: false },
      { text: 'metadata', emphasis: true },
      { text: 'for the webpage', emphasis: false },
      { text: '<meta>', code: true },
      { text: 'and it may contains the following', emphasis: false },
      { text: 'attributes:', emphasis: true },
      { text: 'charset, content, http-equiv, name', code: true },
    ],
  },
  {
    content: [
      { text: 'The following attribute of the', emphasis: false },
      { text: 'metadata', emphasis: true },
      { text: 'HTML tag sets the', emphasis: false },
      { text: 'character encoding', emphasis: true },
      { text: 'for the document', emphasis: false },
      { text: 'charset="<insert character encoding here>"', code: true },
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
      { text: 'The following tag is used to', emphasis: false },
      { text: 'embed executable', emphasis: false },
      { text: 'code', emphasis: true },
      { text: 'or', emphasis: false },
      { text: 'data', emphasis: true },
      { text: 'into the document', emphasis: false },
      { text: '<script>', code: true },
      { text: 'This code is typically', emphasis: false },
      { text: 'JavaScript', emphasis: true },
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

export default htmlItemsWithCode;
