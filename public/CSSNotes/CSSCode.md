# CSS Selectors
---

The following html tags are examples of CSS Selectors

```css
header
h1
h2
p
article
hr
a
ol
ul
li
```

```css

header p {
         color: green;
}
 
header p span {
         color: blue;
}

``` 

In the previous example, the browser would look first for the <span><</span>header<span>></span> element or tag.

Then within the <span><</span>header<span>></span> element or tag it would search for all the <span><</span>p<span>></span> tags that are direct children or descendants of the <span><</span>header<span>></span> element.

- Then within any <span><</span>p<span>></span> tag within the <span><</span>header<span>></span> would have their text color set to green.

In the case of the header p span.

- The process is the same up until it finds the <span><</span>p<span>></span> tags within the <span><</span>header<span>></span>.

- The browser would then search for all <span><</span>span<span>></span> tags that are inside the <span><</span>p<span>></span> tags and set the text color to blue.

---
## Class and ID Selectors
---

The following property is used as a shorthand way to set the border-width, border-style and border-color all in the same command:

```css
border:
```

The following property indicates how much space is to be put around an element's border on all 4 sides.

- In most cases the order is top, right, bottom, left.

```css
margin:
```
The following property indicates how much space between an elements border and content.

```css
padding:
```
The following property adds one or more shadows to an element:

```css
box-shadow:
box-shadow: 5px 10px;
```

When trying to center something on a page, such as text or an image, it is best to use the following:


