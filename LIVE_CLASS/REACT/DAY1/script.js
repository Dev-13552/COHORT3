console.log(React)
console.log(ReactDOM)

let span = React.createElement("span", {color: "blue"}, "I am Span.");
let h1 = React.createElement("h1", {}, span);
let div = React.createElement("div", {className: "box"}, h1);

console.log(div);


ReactDOM.createRoot(document.querySelector("#root")).render(div);