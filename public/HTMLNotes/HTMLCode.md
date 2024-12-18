# HTML Basics with Code Examples
---

## Document Structure

The following tag is used to tell the browser what <span class="emphasis">document type</span> to expect.  
- It is also considered a <span class="secondEmphasis">declaration</span> and is <span class="emphasis">not case-sensitive</span>:

```html
<!DOCTYPE html>
```

A basic HTML document is structured as follows:

```html
<html>
  <head>
    <!-- Metadata and links -->
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

---

## Head

The <span class="emphasis">head</span> tag contains <span class="emphasis">metadata</span> and links that help the browser <span class="secondEmphasis">render the webpage</span> correctly.

```html
<head>
```

The <span class="emphasis">meta</span> tag is used to include <span class="secondEmphasis">metadata</span> for the webpage.

```html
<meta>
```

### Meta Tag Attributes

The <span class="emphasis">meta</span> tag may include the following attributes:

```html
charset
content
http-equiv
name
```

For example, to set the <span class="emphasis">character encoding</span> for the document, use the following:

```html
<meta charset="UTF-8">
```

---

### Linking External Resources

The following tag is used to embed executable code or data into the document, typically for <span class="emphasis">JavaScript files</span>:

```html
<script>
```

To link your HTML page to an external <span class="secondEmphasis">CSS stylesheet</span>, use the <span class="emphasis">link</span> tag.  
- Place it in the <span class="emphasis">head</span> above the <span class="emphasis">title</span> tag.

```html
<link rel="stylesheet" href="styles.css">
```

---

## Body

The <span class="emphasis">body</span> element represents the container for all the <span class="emphasis">visible content</span> shown to the end-user.

```html
<body>
```

---

## Common HTML Elements

Here is a list of commonly used <span class="emphasis">HTML elements</span>:

```html
<p> <textarea> <h1> <h2> <h3> <h4> <h5> <h6> <input> <label>
<header> <img> <ul> <ol> <li> <a> <hr>
```

### Purpose of Each Tag:

- <span><</span>p<span>></span>: Used to write a <span class="secondEmphasis">block of text</span>, like a paragraph.
  
```html
<p>
```


- <span><</span>textarea<span>></span> : Creates a box for users to type <span class="emphasis">multiple lines of text</span>.

```html
<textarea>
```

- <span><</span>h1<span>></span> : The largest and most <span class="emphasis">important heading</span>.

```html
<h1>
```

- <span><</span>h2<span>></span> - <span><</span>h6<span>></span> : Smaller headings used for <span class="secondEmphasis">sub-sections</span>.

```html
<h2>
<h3>
<h4>
<h5>
<h6>
```

- <span><</span>input<span>></span> : Creates a box for <span class="emphasis">user input</span>.

```html
<input>
```

- <span><</span>label<span>></span>: Describes an input field, e.g., "Name:".

```html
<label>
```

- <span><</span>header<span>></span> : Represents the <span class="secondEmphasis">top section</span> of a page.

```html
<header>
```

- <span><</span>img<span>></span> : Displays a picture or graphic.

```html
<img>
```

- <span><</span>ul<span>></span> : Creates a <span class="emphasis">bullet list</span>.

```html
<ul>
```

- <span><</span>ol<span>></span> : Creates a <span class="secondEmphasis">numbered list</span>.

```html
<ol>
```

- <span><</span>li<span>></span> : Represents each individual <span class="emphasis">list item</span>.

```html
<li>
```

- <span><</span>a<span>></span> : Creates a <span class="emphasis">clickable link</span>.

```html
<a>
```

- <span><</span>hr<span>></span> : Inserts a <span class="secondEmphasis">divider</span> between content.

```html
<hr>
```

---

## Content Division

Elements like <span><</span>div<span>></span> and <span><</span>section<span>></span> are used to divide content into logical <span class="emphasis">sections</span>.

```html
<div>
<section>
```

---

## Special Characters

To display <span class="emphasis">special characters</span> in HTML, use the following:

```html
&rsquo;
&lsquo;
&rdquo;
&ldquo;
&amp;
&gt;
&lt;
&copy;
&reg;
&trade;
```

### Output:

- &rsquo; : Right Single Quote  
- &lsquo; : Left Single Quote  
- &rdquo; : Right Double Quote  
- &ldquo; : Left Double Quote  
- &amp;: Ampersand  
- &gt; : Greater Than  
- &lt; : Less Than  
- &copy; : Copyright Symbol  
- &reg; : Registered Symbol  
- &trade; : Trademark Symbol  

---

## Articles and Sidebars

### Article

The <span><</span>article<span>></span> tag represents a <span class="emphasis">self-contained</span> piece of content.

```html
<article>
```

### Aside

The <span><</span>aside<span>></span> tag is used for <span class="secondEmphasis">supplementary content</span> like sidebars.

```html
<aside>
```

---

## Creating Thumbnails

To create a thumbnail using <span class="emphasis">Open Graph meta tags</span>, add the following code inside the <span><</span>head<span>></span> element:

```html
<title>Website Title</title>
<meta property="og:title" content="Your Website Title">
<meta property="og:description" content="A brief description of your website.">
<meta property="og:image" content="thumbnail.jpg">
<meta property="og:url" content="https://yourwebsite.com/">
<meta property="og:type" content="website">
```

Ensure the path to the thumbnail image file is correct.

---

## Summary

HTML provides the building blocks of every <span class="emphasis">webpage</span>. By understanding the structure, <span class="secondEmphasis">tags</span>, and special features, you can create structured and <span class="emphasis">semantic content</span> for the web.
