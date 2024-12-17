# Getting Started with Vite
---

## Installing Vite
---
To ensure you have the most up-to-date version of Vite, use the following command in the terminal:

```shell
npm create vite@latest
```
---
## Naming Your Project
---

When prompted for a project name during Vite project creation, follow this example to ensure the project is not created within a nested folder:

```shell
? Project name: > .
```

---
## React Basics
---

### JSX Basics  

The following code demonstrates a basic JSX structure:

```javascript
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
```
### Class Names in React

In React, className is used instead of class to define CSS classes:

```javascript
<div className="example-class"></div>

```

### Props  

Props allow components to accept and use data passed from a parent component:

```javascript
function Pet(props) {
  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old.
    </li>
  );
}
```
---
## Adding A Website Icon (Favicon)
---

### Overview
The favicon is the small icon that appears on the browser tab and represents your website. In React JS, setting up a favicon involves a few simple steps.
---

### Steps To Add a Favicon  

1. Place Your Favicon in the Public Folder
Place your favicon file (e.g., favicon.ico, .png, or .svg) in the public folder of your React project.

2. Update the index.html File
Edit the public/index.html file and add a <link> tag in the <head> section to reference your favicon:

```html
<link rel="icon" href="/favicon.ico" />
```

- If you are using a .png or .svg file, ensure the correct file extension is reflected in the href attribute.  

3. Verify the Favicon
Run your React app with npm start or yarn start.
Open your browser and check the tab to confirm the favicon is displayed.  

### Notes  

The public folder is used because its files are accessible directly from the root of the website.
If you replace the favicon later, clear the browser cache to see the updated icon.


---
## State Management
---

### Adding State with useState

The useState hook lets you add state to a functional component:

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
---
## Routing with React Router
---

### Using <span><</span>Link<span>></span>  

React Router DOM provides the `<Link>` component to handle navigation between pages in your app:

```javascript
<Link to="/about">About</Link>
```
The <Link> component is an abstraction of the HTML <a> tag. Under the hood, the following code is equivalent to an HTML <a> tag:

```html
<a href="/about">About</a>
```

- This functionality is part of React Router DOM and allows for seamless client-side navigation without reloading the page.

### Using a key Attribute  

When rendering multiple <Link> components (or other elements) within a list, React requires that the parent HTML tag of each child element include a key attribute. This is necessary to uniquely identify elements of the same type among their siblings during rendering and re-rendering:

```javascript
<Link key={item.id} to={`/item/${item.id}`}>
  {item.name}
</Link>

```
---
## Adding Thumbnails
---

### Overview
In React JS, creating a thumbnail for shared links involves adding Open Graph meta tags. While the overall process is similar to vanilla HTML, there are key differences due to React's structure and build processes.

---

### Differences Between React JS and Vanilla HTML

#### 1. File Location
- **Vanilla HTML**: Open Graph meta tags are added directly to a static index.html file.
- **React with CRA (Create React App)**: Tags are added to the public/index.html file.
- **React with Vite**: Tags are added to the /index.html file located in the root directory.

#### 2. Asset Path
- **Vanilla HTML**: Relative or absolute paths are used directly for the og:image attribute.
- **React (CRA)**: You must use %PUBLIC_URL% to resolve the path dynamically, e.g., %PUBLIC_URL%/thumbnail.jpg.
- **React (Vite)**: Use an absolute path such as /thumbnail.jpg for assets placed in the public folder or root directory.

#### 3. Dynamic Meta Tags
- **Vanilla HTML**: Meta tags are static and cannot change based on content or routes.
- **React**: Meta tags can be made dynamic using libraries like react-helmet or through frameworks with server-side rendering (SSR), such as Next.js. This allows for per-page customization of Open Graph metadata.

---

### Adding Open Graph Tags in React

#### For Create React App:
1. Open the public/index.html file.
2. Add Open Graph tags in the <span><</span>head<span>></span> section:  

```html
   <meta property="og:title" content="Your Website Title">
   <meta property="og:description" content="A brief description of your website.">
   <meta property="og:image" content="%PUBLIC_URL%/thumbnail.jpg">
   <meta property="og:url" content="https://yourwebsite.com/">
   <meta property="og:type" content="website">
```
3. Place thumbnail.jpg in the public folder.

#### For Vite

1. Open the /index.html file located in the root directory.

2. Add Open Graph tags in the <span><</span>head<span>></span> section:

```html
<meta property="og:title" content="Your Website Title">
<meta property="og:description" content="A brief description of your website.">
<meta property="og:image" content="/thumbnail.jpg">
<meta property="og:url" content="https://yourwebsite.com/">
<meta property="og:type" content="website">
```

3. Place thumbnail.jpg in the public folder or root directory.
