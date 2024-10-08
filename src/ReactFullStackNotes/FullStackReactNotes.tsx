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
            { text: 'method, you then add your sequelize', emphasis: false },
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
            { text: 'Object-Relational Mapping (ORM)', emphasis: true },
            { text: 'is a programming', emphasis: false },
            { text: 'technique', emphasis: true },
            { text: 'that allows developers to', emphasis: false },
            { text: 'interact', emphasis: true },
            { text: 'with a', emphasis: false },
            { text: 'database', emphasis: true },
            { text: 'using the', emphasis: false },
            { text: 'same', emphasis: true },
            { text: 'programming', emphasis: false },
            { text: 'language', emphasis: true },
            { text: 'they are using to program the', emphasis: false },
            { text: 'application', emphasis: true },
        ],
    },
    {
        content: [
            { text: 'Sequelize', emphasis: true },
            { text: 'is a', emphasis: false },
            { text: 'modern', emphasis: true },
            { text: 'TypeScript and Node.js', emphasis: false },
            { text: 'ORM', emphasis: true },
            { text: 'that supports', emphasis: false },
            { text: 'PostgreSQL, MySQL, MariaDB, SQLite, ', emphasis: true },
            { text: 'and', emphasis: false },
            { text: 'SQL Server', emphasis: true },
            { text: 'databases.', emphasis: false },
        ],
    },
    {
        content: [
            { text: 'Sequelize', emphasis: true },
            { text: 'features', emphasis: false },
            { text: 'solid transaction support, relations,', emphasis: true },
            { text: 'and', emphasis: false },
            { text: 'lazy loading, read replication, ', emphasis: true },
            { text: 'and more.', emphasis: false },
        ],
    },
    {
        content: [
            { text: 'Solid transaction support', emphasis: true },
            { text: 'in', emphasis: false },
            { text: 'Sequelize', emphasis: true },
            { text: 'is split into', emphasis: false },
            { text: 'two', emphasis: true },
            { text: 'ways of', emphasis: false },
            { text: 'handling', emphasis: true },
            { text: 'transactions', emphasis: false },
        ],
    },
    {
        content: [
            { text: 'The', emphasis: false },
            { text: 'first', emphasis: true },
            { text: 'way', emphasis: false },
            { text: 'transactions', emphasis: true },
            { text: 'are handled is by', emphasis: false },
            { text: 'committing', emphasis: true },
            { text: 'and', emphasis: false },
            { text: 'rolling back', emphasis: true },
            { text: 'transactions by the', emphasis: false },
            { text: 'user', emphasis: true },
            { text: 'through', emphasis: false },
            { text: 'calling', emphasis: true },
            { text: 'the appropriate', emphasis: false },
            { text: 'Sequelize methods', emphasis: true },
            { text: 'in what are known as ', emphasis: false },
            { text: 'unmanaged transactions', emphasis: true },
        ],
    },
    {
        content: [
            { text: 'The', emphasis: false },
            { text: 'second', emphasis: true },
            { text: 'way', emphasis: false },
            { text: 'transactions', emphasis: true },
            { text: 'are handled is by having Sequelize', emphasis: false },
            { text: 'automatically rollback', emphasis: true },
            { text: 'the', emphasis: false },
            { text: 'transaction', emphasis: true },
            { text: 'if', emphasis: false },
            { text: 'any error', emphasis: true },
            { text: 'is', emphasis: false },
            { text: 'thrown', emphasis: true },
            { text: 'or', emphasis: false },
            { text: 'commit', emphasis: true },
            { text: 'the transaction otherwise. This is known as a', emphasis: false },
            { text: 'managed transaction.', emphasis: true },
        ],
    },
    {
        content: [
            { text: 'A Sequelize', emphasis: false },
            { text: 'model', emphasis: true },
            { text: 'is a JavaScript', emphasis: false },
            { text: 'class', emphasis: true },
            { text: 'that provides', emphasis: false },
            { text: 'Sequelize', emphasis: true },
            { text: 'with information about the', emphasis: false },
            { text: 'table', emphasis: true },
            { text: 'it represents.', emphasis: false },
        ],
    },
    {
        content: [
            { text: 'For example, a', emphasis: false },
            { text: 'model', emphasis: true },
            { text: 'tells', emphasis: false },
            { text: 'Sequelize', emphasis: true },
            { text: `what the table's`, emphasis: false },
            { text: 'name', emphasis: true },
            { text: 'is and what', emphasis: false },
            { text: 'columns', emphasis: true },
            { text: 'it has and their', emphasis: false },
            { text: 'datatypes', emphasis: true },
        ],
    },
    {
        content: [
            { text: 'A', emphasis: false },
            { text: `model's name`, emphasis: true },
            { text: 'does not have to be the', emphasis: false },
            { text: 'same', emphasis: true },
            { text: 'as the', emphasis: false },
            { text: 'table', emphasis: true },
            { text: 'it represents', emphasis: false },
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
