/*  
<div id ="parent">
    <div id ="child">
        <h1>I'm h1 Tag</h1>
        <h1>I'm h1 Tag</h1>
    </div>
</div>
<div id ="parent">
    <div id ="child">
        <h1>I'm h1 Tag</h1>
        <h1>I'm h1 Tag</h1>
    </div>
</div>

*/ 

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm a h1 TAg"),
        React.createElement("h2",{},"I'm a h2 TAg"),
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm a h1 TAg"),
        React.createElement("h2",{},"I'm a h2 TAg"),
    ]),

]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


