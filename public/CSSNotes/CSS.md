# CSS Basics
---

<span class="emphasis">CSS</span> stands for <span class="emphasis">Cascading Style Sheets</span>.

<span class="emphasis">CSS</span> <span class="secondEmphasis">functions</span> as the <span class="emphasis">styling</span> or <span class="emphasis">skin</span> of a <span class="emphasis">webpage</span>.
- Just as a human wears clothes to express a sense of style, <span class="emphasis">CSS</span> provides the "clothing" that gives a webpage its unique appearance and design.

<span class="emphasis">CSS</span> determines how <span class="secondEmphasis">HTML elements</span> <span class="emphasis">appear</span> or are <span class="emphasis">displayed</span> on a <span class="emphasis">webpage</span>.
- For example, it controls a page's <span class="emphasis">colors</span>, <span class="secondEmphasis">aesthetics</span>, <span class="emphasis">visual design</span>, <span class="secondEmphasis">layout</span>, and <span class="emphasis">organization</span>.

---

### Key Features of CSS
---

1. **Styling Across Multiple Pages**:
   - <span class="emphasis">CSS</span> can style multiple webpages simultaneously, applying consistent design elements.

2. **Inline vs External Styles**:
   - Styles can be <span class="emphasis">embedded</span> directly into <span class="secondEmphasis">HTML</span> or linked externally via a <span class="emphasis">CSS stylesheet</span>.
   - External stylesheets are best for <span class="secondEmphasis">reusability</span> and <span class="emphasis">maintenance</span>.
   - Inline styles are generally avoided because they complicate <span class="secondEmphasis">updates</span> and <span class="emphasis">readability</span>.

3. **CSS Syntax**:
   - CSS uses <span class="emphasis">selectors</span>, <span class="secondEmphasis">properties</span>, and <span class="emphasis">values</span> to apply styles.
   - Always end CSS statements with a <span class="punctuationSymbol">;</span>.

4. **Classes and IDs**:
   - When a <span class="punctuationSymbol">.</span> <span class="emphasis">precedes</span> the name of a property, it references an <span class="emphasis">HTML</span> <span class="secondEmphasis">class</span>.
   - When a <span class="punctuationSymbol">#</span> <span class="emphasis">precedes</span> the name of a property, it references an <span class="emphasis">HTML</span> <span class="secondEmphasis">id</span>.

5. **CSS Box Model**:
   - The box model is like a container for <span class="secondEmphasis">HTML elements</span>, with layers:
     - <span class="emphasis">Content</span>
     - <span class="emphasis">Padding</span>
     - <span class="emphasis">Border</span>
     - <span class="emphasis">Margin</span>

6. **Selectors**:
   - Selectors target <span class="emphasis">HTML elements</span> for styling, such as <span class="codeSnip">&lt;header&gt;</span> or <span class="codeSnip">&lt;p&gt;</span>.

7. **Media Queries**:
   - Media queries allow <span class="emphasis">responsive designs</span> for various screen sizes.

---

# Advanced CSS Concepts
---

### CSS Specificity
---

<span class="emphasis">Specificity</span> determines the priority of <span class="secondEmphasis">CSS rules</span>:
- Inline styles > IDs > Classes > Element selectors.

### CSS Inheritance
---

Some properties, like <span class="emphasis">color</span> and <span class="secondEmphasis">font-family</span>, are inherited by child elements, while others, like <span class="emphasis">padding</span> and <span class="secondEmphasis">margin</span>, are not.

### CSS Positioning
---

Positioning options allow you to control how <span class="secondEmphasis">elements</span> are placed:
- <span class="emphasis">Static</span>: Default position.
- <span class="secondEmphasis">Relative</span>: Position relative to its normal placement.
- <span class="emphasis">Absolute</span>: Positioned relative to its closest positioned ancestor.
- <span class="secondEmphasis">Fixed</span>: Positioned relative to the viewport.

### CSS Flexbox
---

<span class="secondEmphasis">Flexbox</span> enables <span class="emphasis">responsive layouts</span>:
- Align <span class="emphasis">elements</span> horizontally or vertically.

### CSS Grid
---

<span class="emphasis">Grid</span> layouts create complex, <span class="secondEmphasis">grid-based designs</span>:
- Define rows and columns using grid properties.
