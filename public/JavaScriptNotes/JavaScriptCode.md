# JavaScript Basics with Code Examples
---

## Exporting and Importing Functions

### Default Function Export

When you use the following code before the name of a <span class="emphasis">function</span>, you can change the <span class="secondEmphasis">name</span> of the function when you <span class="emphasis">import</span> it into another file:

```javascript
export default function myFunction() {
    console.log("Default exported function");
}
```

In another file, you can <span class="emphasis">import</span> it with any name:

```javascript
import myFunction from "./fileName";
myFunction();
```

---

### Renaming Exported Functions

When exporting a <span class="emphasis">function</span>, you can rename it using curly brackets and the <span class="emphasis">as</span> keyword.

```javascript
function greet() {
    console.log("Hello!");
}

export { greet as sayHello };
```

In another file, <span class="emphasis">import</span> the function using its new name:

```javascript
import { sayHello } from "./fileName";
sayHello(); // Outputs: Hello!
```

---

## Array Methods

### Generating a New Array with <span class="emphasis">.map()</span>

The <span class="emphasis">.map()</span> method creates a <span class="secondEmphasis">new array</span> by applying a <span class="emphasis">callback function</span> to each element of the original array. It does not <span class="secondEmphasis">filter</span> values.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);

console.log(doubled); // Outputs: [2, 4, 6, 8]
```

If you need to <span class="secondEmphasis">filter values</span>, use <span class="emphasis">.filter()</span> instead.

---

## Event Handling

### Placeholder for an Event

The parameter <span class="emphasis">(e)</span> inside a <span class="secondEmphasis">function</span> serves as a placeholder for the <span class="emphasis">Event object</span>. It allows access to <span class="secondEmphasis">event properties</span>.

```javascript
document.querySelector("button").addEventListener("click", (e) => {
    console.log("Button clicked", e.type); // Outputs: Button clicked click
});
```

---

### Preventing Default Behavior

The <span class="emphasis">preventDefault()</span> method stops the browser's <span class="secondEmphasis">default behavior</span>, such as submitting a <span class="emphasis">form</span> or navigating a <span class="secondEmphasis">link</span>.

```javascript
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Default form submission prevented");
});
```

---

## String Methods

### Extracting the First Character of a String

The <span class="emphasis">charAt(index)</span> method retrieves the <span class="secondEmphasis">character</span> at the specified position of a <span class="emphasis">string</span>. To extract the <span class="emphasis">first character</span>, use <span class="emphasis">charAt(0)</span>.

```javascript
const str = "Hello";
const firstChar = str.charAt(0);

console.log(firstChar); // Outputs: H
```

---

## Summary

These examples demonstrate core <span class="emphasis">JavaScript</span> techniques, including exporting <span class="secondEmphasis">functions</span>, handling <span class="emphasis">events</span>, using <span class="secondEmphasis">array methods</span>, and working with <span class="emphasis">strings</span>. Mastering these concepts will help you build <span class="secondEmphasis">dynamic</span> and <span class="emphasis">interactive</span> applications.
