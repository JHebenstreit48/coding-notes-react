import { ListItem } from '../Components/Types';

// Define the types for each text part and for the list item

// Define the functional component with TypeScript and use the default export function syntax

const items: ListItem[] = [
    {
        content: [
            { text: 'Make sure you have both', emphasis: false },
            { text: 'PostgreSQL', emphasis: true },
            { text: 'and', emphasis: false },
            { text: 'Sequelize', emphasis: true },
            { text: 'installed in your', emphasis: false },
            { text: 'package.json', emphasis: true },
            { text: 'file.', emphasis: false },
        ],
    },
    {
        content: [
            { text: 'Models', emphasis: true },
            { text: 'are', emphasis: false },
            { text: 'class-based', emphasis: true },
            { text: 'representations of', emphasis: false },
            { text: 'sequelized', emphasis: true },
            { text: 'tables', emphasis: false },
        ],
    },
    {
        content: [
            { text: 'After naming the', emphasis: false },
            { text: 'Model', emphasis: true },
            { text: 'class, you define the', emphasis: false },
            { text: 'columns', emphasis: true },
            { text: 'needed in a table and what their', emphasis: false },
            { text: 'types', emphasis: true },
            { text: 'are going to be', emphasis: false },


        ],
    },
    {
        content: [
            { text: 'After you define the', emphasis: false },
            { text: 'name, columns,', emphasis: true },
            { text: 'and', emphasis: false },
            { text: 'types', emphasis: true },
            { text: 'in the', emphasis: false },
            { text: 'init', emphasis: true },
            { text: 'method, you then add your sequelize' , emphasis: false },
            { text: 'data types', emphasis: true },
        ],
    },
    {
        content: [
            { text: 'In the', emphasis: false },
            { text: 'init', emphasis: true },
            { text: 'method, you take in', emphasis: false },
            { text: 'two objects', emphasis: true },
        ],
    },
    {
        content: [
            { text: 'The', emphasis: false },
            { text: 'first object', emphasis: true },
            { text: 'is where you scaffold out the', emphasis: false },
            { text: 'column names', emphasis: true },
            { text: 'and what', emphasis: false },
            { text: 'types', emphasis: true },
            { text: 'you want to support', emphasis: false },
        ],
    },
    {
        content: [
            { text: 'The', emphasis: false },
            { text: 'second object', emphasis: true },
            { text: 'is where you pass in the', emphasis: false },
            { text: 'database connection', emphasis: true },
            { text: 'and any other', emphasis: false },
            { text: 'additional', emphasis: true },
            { text: 'table', emphasis: false },
            { text: 'options', emphasis: true },
            { text: 'you want to', emphasis: false },
            { text: 'turn on / support', emphasis: true },
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

export default items;
