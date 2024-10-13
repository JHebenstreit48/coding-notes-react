import { ListItem } from '../Components/Types';

const serversNotesWCode: ListItem[] = [
  {
    content: [
      { text: 'The following code', emphasis: false },
      { text: 'submits', emphasis: true },
      { text: 'data to the', emphasis: false },
      { text: 'specified resource', emphasis: true },
      { text: 'often causing a', emphasis: false },
      { text: 'change', emphasis: true },
      { text: 'on the', emphasis: false },
      { text: 'server', emphasis: true },
      { text: 'POST', code: true },
      { text: 'This is the', emphasis: false },
      { text: 'CREATE', emphasis: true },
      { text: 'method', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'The following code', emphasis: false },
      { text: 'retrieves', emphasis: true },
      { text: 'a', emphasis: false },
      { text: 'resource', emphasis: true },
      { text: 'from the', emphasis: false },
      { text: 'server', emphasis: true },
      { text: 'GET', code: true },
      { text: 'This is the', emphasis: false },
      { text: 'READ', emphasis: true },
      { text: 'method', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'The following code', emphasis: false },
      { text: 'replaces', emphasis: true },
      { text: 'a', emphasis: false },
      { text: 'specified resource', emphasis: true },
      { text: 'with a', emphasis: false },
      { text: 'payload', emphasis: true },
      { text: 'PUT', code: true },
      { text: 'This is the', emphasis: false },
      { text: 'UPDATE', emphasis: true },
      { text: 'method', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'The following code', emphasis: false },
      { text: 'deletes', emphasis: true },
      { text: 'a', emphasis: false },
      { text: 'specified resource', emphasis: true },
      { text: 'DELETE', code: true },
      { text: 'This is the', emphasis: false },
      { text: 'DELETE', emphasis: true },
      { text: 'method', emphasis: false },
    ],
  },
  {
    content: [
      { text: 'The previous', emphasis: false },
      { text: '4', emphasis: true },
      { text: 'bullet points are part of what is known as the', emphasis: false },
      { text: 'CRUD (CREATE, READ, UPDATE,', emphasis: true },
      { text: 'and', emphasis: false },
      { text: 'DELETE)', emphasis: true },
      { text: 'method', emphasis: false },
    ],
  },
];

export default serversNotesWCode;
