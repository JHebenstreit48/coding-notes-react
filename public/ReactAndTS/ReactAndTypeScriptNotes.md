TypeScript generics in React enable you to create reusable components.

Generics allow you to define components that are flexible enough to work with various data types while still maintaining type safety.

A tsconfig.node.json file is used to set the configuration rules for the Node.js environment portions of your project.

An intersection is used with types to combine multiple types into one.

- This in turn allows you to add together existing types into a single type that has all of the features you need.

If you create two interfaces in React with TypeScript that have the same name, and are declared in the same scope, they will merge their declarations together into one interface.

Index signatures are used when you know the key and value types of an object.

When you use React with TypeScript, it is best practice to declare our types in a .d.ts file.

If you add the following keyword into a .d.ts file before the type, it loses the capability of declaring types.

When using React with TypeScript, you should use types by default versus interfaces.

You should only use interfaces when you need a specific feature of interfaces that is not available with types.

Interfaces CANNOT express unions, mapped types, or conditional types.

When you are using objects that inherit from each other, you should use interfaces.

A linter helps catch potential bugs, bad practices, enforce code style conventions, improve overall code quality, streamline the development process, and boost efficiency.
  
