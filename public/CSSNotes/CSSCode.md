# CSS Basics with Code Examples
---

## Introduction to CSS

<span class="emphasis">CSS</span> is used to determine how <span class="secondEmphasis">HTML elements</span> <span class="emphasis">appear</span> or are <span class="emphasis">displayed</span> on a <span class="emphasis">webpage</span>. These code examples demonstrate <span class="secondEmphasis">basic</span> and <span class="emphasis">advanced concepts</span>.

---

### Example: External Stylesheet

This example shows how to link an <span class="emphasis">external CSS file</span> to an <span class="secondEmphasis">HTML document</span>.

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

---

### Example: Basic CSS Syntax

Here is the <span class="secondEmphasis">basic structure</span> of a <span class="emphasis">CSS rule</span>. The <span class="emphasis">selector</span> targets <span class="secondEmphasis">elements</span>, and the <span class="emphasis">property</span> applies a specific style.

```css
/* Basic CSS Syntax */
p {
    color: blue; /* Property and Value */
}
```

---

### Example: CSS Box Model

The <span class="emphasis">box model</span> consists of the <span class="secondEmphasis">content</span>, <span class="emphasis">padding</span>, <span class="secondEmphasis">border</span>, and <span class="emphasis">margin</span>. It defines the <span class="emphasis">space</span> an element occupies.

```css
div {
    margin: 10px;  /* Space outside the element */
    padding: 20px; /* Space inside the border */
    border: 1px solid black; /* Border width and color */
}
```

---

## CSS Selectors

### Basic Selectors

<span class="emphasis">CSS selectors</span> target specific <span class="secondEmphasis">HTML elements</span> for styling.

```css
header {
    background-color: lightgray;
}
p {
    color: green;
}
```

The selector <span class="codeSnip">&lt;header&gt;</span> applies a <span class="emphasis">background color</span>.  
The selector <span class="codeSnip">&lt;p&gt;</span> changes the <span class="secondEmphasis">text color</span> to green.

---

### Descendant Selectors

<span class="emphasis">Descendant selectors</span> target elements nested within a specific <span class="secondEmphasis">parent</span>.

```css
header p {
    color: green;
}

header p span {
    color: blue;
}
```

The first rule targets <span class="codeSnip">&lt;p&gt;</span> elements inside a <span class="codeSnip">&lt;header&gt;</span> and sets their <span class="secondEmphasis">text color</span> to green.  
The second rule specifically targets <span class="codeSnip">&lt;span&gt;</span> elements within those paragraphs and sets their <span class="emphasis">text color</span> to blue.

---

## Class and ID Selectors

### Class Selectors

<span class="emphasis">Class selectors</span> are <span class="secondEmphasis">reusable</span> and apply styles to multiple <span class="emphasis">elements</span>.

```css
/* Class Selector */
.highlight {
    color: red;
}
```

The class <span class="emphasis">highlight</span> applies <span class="secondEmphasis">red text color</span> to all elements with this class.

---

### ID Selectors

<span class="emphasis">ID selectors</span> uniquely style a <span class="secondEmphasis">single element</span>.

```css
/* ID Selector */
#uniqueElement {
    font-size: 20px;
}
```

The ID <span class="emphasis">uniqueElement</span> applies a <span class="secondEmphasis">font size</span> of 20px to the targeted element.

---

## Advanced CSS Properties

### Margin Property

The <span class="emphasis">margin</span> <span class="secondEmphasis">property</span> adds space <span class="secondEmphasis">outside</span> an element's border.

```css
div {
    margin: 10px; /* Space on all four sides */
}
```

---

### Padding Property

The <span class="emphasis">padding</span> <span class="secondEmphasis">property</span> adds space <span class="emphaiss">between</span> the <span class="secondEmphasis">content</span> and the element's <span class="emphasis">border</span>.

```css
div {
    padding: 20px;
}
```

---

### Box Shadow

The <span class="emphasis">box-shadow</span> <span class="secondEmphasis">property</span> adds <span class="secondEmphasis">shadows</span> to an element.

```css
div {
    box-shadow: 5px 10px; /* Horizontal and vertical shadow */
}
```

---

## Responsive Design

### Media Queries

<span class="emphasis">Media queries</span> enable <span class="secondEmphasis">responsive styling</span> for various <span class="emphasis">screen sizes</span>.

```css
@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}
```

This rule changes the <span class="secondEmphasis">background color</span> when the screen width is <span class="emphasis">768px</span> or less.

---

## Centering Elements

### Flexbox Layout

The <span class="emphasis">flex</span> <span class="emphasis">properties</span> center content both <span class="secondEmphasis">horizontally</span> and <span class="emphasis">vertically</span>.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---

## Additional Notes

### Shorthand Properties

<span class="emphasis">CSS</span> includes <span class="secondEmphasis">shorthand properties</span> to simplify styling multiple <span class="emphasis">aspects</span> at once:

**Border Property**: Combines <span class="emphasis">width</span>, <span class="secondEmphasis">style</span>, and <span class="emphasis">color</span>.

```css
border: 1px solid black;
```

**Box Model Layers**:

- <span class="emphasis">Margin</span>: Space outside the border.  
- <span class="secondEmphasis">Padding</span>: Space between content and border.

---

## Summary

These examples showcase the <span class="emphasis">core features</span> of <span class="secondEmphasis">CSS</span> styling. From <span class="emphasis">basic syntax</span> to advanced techniques like <span class="secondEmphasis">flexbox</span> and <span class="emphasis">media queries</span>, CSS provides tools to control the <span class="secondEmphasis">layout</span> and design of a <span class="emphasis">webpage</span>.
