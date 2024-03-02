import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", {
    id: "heading"
}, "Hello world from React !");
console.log(heading); // React Element (object) - (not HTML element) - has props etc

// Adding nested divs
const div = React.createElement("div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },
        [heading, React.createElement("h2", { id: "subheader" }, "React h2")]
    )
)
console.log(div);

// redering root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
// If anything already is present inside the root element of html, then it will get replaced by react


// All this looks tedious - so we have jsx to write the code
