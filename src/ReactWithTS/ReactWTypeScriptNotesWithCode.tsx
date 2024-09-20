import { ListItem } from '../Components/Types';

const reactAndTypescriptItemsWithCode: ListItem[] = [
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
          { text: '', emphasis: true },
          { text: '', emphasis: false },
          { text: '', emphasis: true },
          { text: '', emphasis: false },
        ],
      },
];

export default reactAndTypescriptItemsWithCode;
