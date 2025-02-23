import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { className: "heading" },
);
const Title = () => {
  return <h1>This is the title component </h1>;
};
const Body = () => {
  return (
    <div>
      <h2>This is the body component</h2>
    </div>
  );
};
const Page = () => {
  return (
    <div>
      {heading}
      <Body />
      <Title />
    </div>)
}

const HeaderElement = () => {
  return (<h1>This is H1 tag</h1>)
}

const Head = () => {
  return (
    <div>
      <div className="header">
        <img src={require("./assests/bird-logo.jpg")} alt="logo" className="logo"></img>
        <input type="search" placeholder="Search..." className="search-bar"></input>
        <img src={require("./assests/user-icon.png")} className="user-icon" alt="user" />
      </div>
    </div>
  )
}



root.render(<Head></Head>);