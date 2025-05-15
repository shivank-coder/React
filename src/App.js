
const pizza=(props)=>{
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},props.name),
        React.createElement("p",{},props.desciption),
        React.createElement("p",{},props.type)


    );
}


const App=() =>
{
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},"padro's"),
        React.createElement(pizza,{name:"capiscum"}),
     React.createElement(pizza,{desciption:"its saltey in nature with some extra gravy" }),
          React.createElement(pizza,{type:"basic pizza" }),




        );
    
};


const container=document.getElementById("root");
const root =ReactDOM.createRoot(container)
root.render(React.createElement(App))