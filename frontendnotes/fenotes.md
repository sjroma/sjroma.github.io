# Front-end Links, Hints, Tips

## HTML/CSS  

If you have a dark-mode extension installed on your browser, disable it.  

<a href="https://validator.w3.org/#validate_by_input" target="_blank">HTML Validator</a> - Used to <a href="https://validator.w3.org/docs/help.html#validation_basics" target="_blank">check the validity</a> of your HTML document. It's easiest to cut &amp; paste your code into the 'Validate by Direct Input' tab.  

<a href="https://jigsaw.w3.org/css-validator/#validate_by_input" target="_blank">CSS Validator</a> - Similar to link above, validate your CSS code. Cut &amp; paste your code into the 'By direct input' tab.  

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">HTML Entities</a> - MDN docs is always a good resource  
<a href="https://www.w3schools.com/html/html_elements.asp" target="_blank">HTML Entities</a> - W<sup>3</sup> Schools is a good resource and there's usually a little editor where you can try things out  
<a href="https://fonts.google.com/" target="_blank">Google Fonts</a> - A tremendous resource for fonts that you can either link to (HTML) or import (CSS) so you don't have to install anything. 

### HTML tags vs elements vs attributes
#### HTML tags
Tags are used to mark up the start and end of an HTML element. The following are paragraph tags.  
`<p></p>`  

#### HTML elements
An element in HTML represents some kind of structure or semantics and generally consists of a start tag, its attributes (if any), content, and an end tag. The following is a paragraph element:  
`<p>This is the content of the paragraph element.</p>`

#### HTML attributes
An attribute defines a property for an element. It consists of an attribute/value pair and appears within the element's start tag. An element's start tag may contain any number of space separated attribute/value pairs.
The most popular misuse of the term "tag" is referring to `alt` attributes as "alt tags". There is no such thing in HTML. `alt` is an attribute, not a tag.   
`<img src="foobar.gif" alt="A foo can be balanced on a bar by placing its fubar on the bar's foobar.">` 

### Flexbox &amp; CSS Grid  
<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">A Complete Guide to Flexbox</a> - a good comprehensive overview   
  * <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a> - A game for learning CSS Flexbox  
  
  * Flexbox note: `justify-content` versus `align-items`  
  justify is X axis, align is Y axis...sort of;  
  XY axis depends on the "orientation" of the flex. For `flex-direction: row;`, justify is horizontal (X) and align is vertical (Y). For `flex-direction: column;` they're inverted, with justify being vertical and align horizontal.  
  
<a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">A Complete Guide to CSS Grid</a> - a good comprehensive overview  
  * <a href="https://cssgridgarden.com/" target="_blank">Grid Garden</a> - A game for learning CSS Grid  
  
As a general rule of thumb, use Flexbox for a single axis (either X or Y) layout, CSS Grid for a 2-axis layout.
  
### General notes    
Review this for an understanding of the <a href="https://medium.com/better-programming/understanding-the-tags-in-html-boilerplate-38d1ae2805f7" target="_blank">HTML boilerplate tags</a>.  

Get familiar with the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model" target="_blank">box methodology</a>. Once you realize everything you see on a webpage is just a box you need to move around and resize, things will start to click.  

Don't be afraid to be descriptive with `class` and `id` names. It will be more semantic for yourself, and others who read your code. For example, if you have several two letter `id`'s that make sense to you now, they may not a year later and probably will never mean anything to other people. 

In general, an `id` is typically used when you want to target HTML elements with JavaScript. A `class` is used to style the page. You can use an `id` to style the page if you want but know that it has more weight than a `class` does and an `id` will override a `class` targeting the same element.  
In your own personal projects that you create outside of freeCodeCamp some people recommend only using a `class` to style the page and an `id` if using JavaScript in your project. However, JavaScript can target a `class` too, so you may not need `id`'s that much in your personal projects.  

Elements in CSS layout are normally either block-level or inline (with exceptions for elements within flex, table and grid elements). So it's the basis for all of CSS layout: it treats all elements like boxes or text.  `display:block` makes them act like a block element regardless of what they were before (images are inline for example).  
`display:inline` makes them act like an inline element.  
`display:inline-block` makes it act like a block that is laid out inline.  
See <a href="https://medium.com/@DaphneWatson/css-display-properties-block-inline-and-inline-block-how-to-tell-the-difference-7d3a1e6e3051" target="_blank">CSS display properties: block, inline, and inline-block - &amp; how to tell the difference</a>  
  
### Google Fonts notes

When using Google fonts, should I use the **link** or **import**?
  - For 90%+ of the cases you likely want the `<link>` tag. As a rule of thumb, you want to avoid `@import` rules because they defer the loading of the included resource until the file is fetched.  
  
12 Easy Read Fonts  (listed alphabetically, sans-serif first)
  - Futura (sans-serif)  
  - Karla (sans-serif)  
  - Lato (sans-serif)  
  - Open Sans (sans-serif)  
  - Quicksand (sans-serif)  
  - Roboto (sans-serif)  
  - Ubuntu (sans-serif)  
  - Helvetica (sans-serif)  
  - Verdana (sans-serif)  
  - PT Sans &amp; PT Serif   
  - Georgia (serif)  
  - Rooney (serif)  

### Responsiveness notes

Rather than using fixed dimensions on elements, use max-width/height and relative units like %, em, rem and vw to keep everything responsive. 

Start by styling for a narrow view port first. Narrow your browser as far as it will go and style the page so it looks good at that narrow width. Then gradually widen your browser and use CSS media query break points to adjust the style for wider view ports if needed.  

## JavaScript 

Try looking at your code with this tool, <a href="http://www.pythontutor.com/javascript.html" target="_blank">http://www.pythontutor.com/javascript.html</a>, to see if it helps you  
