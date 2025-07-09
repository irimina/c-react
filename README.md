
## Challenges 

1 Create a custom page component 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React 
 * Render the Page component.

 2. Create a new custom component that renders the Header 

 /** Mini Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

# How to load Images 

## Option 1 
add the image in the public folder 

<img src="/assets/react-logo.png" width="40px" alt="React logo" />

## Option 2 ( more in line with react way) - dynamic representation 
import React from 'react';
import reactLogo from './assets/react-logo.png';

function App() {
  return (
    <header>
      <img src={reactLogo} width="40px" alt="React logo" />
    </header>
  );
}

export default App;

=======================
## More explanations on images
./ means: "start from the current file’s directory"

BUT 

/assets/... is interpreted as an absolute URL path — not a file path
React will look for this in the public folder, not in src

==========================================
# Quiz #2 on Components
1. What is a React component?
A: a piece of code that can be reused in your page; it is a function that
returns React elements ( .jsx). A react element (.jsx) is the react version of an HTML element.

It is turning the jsx syntax into calls to react.create element and then the reactCreate function is turning them into the JavaScript Obkects that React will interpret and turn into real DOM nodes under the hood

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
A: pascal case MyComponent

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
A: the rendering has syntax errors 
======================================================