import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
// import React from "./react";

class About extends Component{
  constructor(props){
    super(props);
    console.log("parent Constructor");
  }

  componentDidMount(){      //use to make an api call
    console.log("parent component did mount");
    }

  render(){
    console.log("parent Rendre")
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React</h2>
        {/* <User name={"Neha (function)"} /> */}
  
        <UserClass name={"first(class)"} />
        <UserClass name={"second"} />
      </div>
    );
  }
}

export default About;
