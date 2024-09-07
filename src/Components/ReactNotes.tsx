import { ListItem } from './Types';

const items: ListItem[] = [
    {
        content: [
            { text: 'React', emphasis: true },
            { text: 'is a JavaScript', emphasis: false },
            { text: 'library', emphasis: true },
            { text: 'for building user', emphasis: false },
            { text: 'interfaces', emphasis: true },
            { text: 'or', emphasis: false },
            { text: 'UI pieces', emphasis: true },
            { text: 'that are also known as', emphasis: false },
            { text: 'components ', emphasis: true },
        ],
    },
    {
        content: [
            { text: 'In React a', emphasis: false },
            { text: 'component', emphasis: true },
            { text: 'is', emphasis: false },
            { text: 'flexible', emphasis: true },
            { text: 'or', emphasis: false },
            { text: 'reusable', emphasis: true },
        ],
    },
    {
        content: [
            { text: 'Which means that you', emphasis: false },
            { text: 'define', emphasis: true },
            { text: 'what a component should be', emphasis: false },
            { text: 'once', emphasis: true },
            { text: 'and then', emphasis: false },
            { text: 'use it/render it', emphasis: true },
            { text: 'as', emphasis: false },
            { text: 'many times', emphasis: true },
            { text: 'as you want', emphasis: false },
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
          { text: '', emphasis: true },
          { text: '', emphasis: false },
          { text: '', emphasis: true },
          { text: '', emphasis: false },
        ],
      },
];

export default items;
