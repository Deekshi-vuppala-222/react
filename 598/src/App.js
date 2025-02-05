// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// function App() {
//   let username="deekshitha";
  // let ele=React.createElement("div",{className:"App"},
  //   React.createElement("h1","null","header")
  // )
//   return (
    
    // <div className="App">
    //   <h1>Deekshitha</h1>
    // </div>
    // ele
//     <div>
//       <h1></h1>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//       <h1>Class Based component</h1>
//     )
//   }
// }
// export default App;

//! component composition
// import React from "react";
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Footer from './components/Footer'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'

// const App =()=>{
//   return(
//     <div className="app">
//       <Navbar/>
//       <Main/>
//       <div className="sidebar">
//       <Sidebar1/>
//       <Sidebar2/>
//       </div>
//       <Footer/>

//     </div>
//   )
// }
// export default App

//!props
// import React, { Component } from 'react'
//import CBCPropEx from './propsexample/CBCPropEx'
// import FBCPropEx from './propsexample/FBCPropEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx
//         username="vamshi"
//         age={20}
//         hobbies={["playing"]}
//         address={{city:"sircilla",area:"Gandhinagar"}}
//         sendFun={function(){alert("hi i am vamshi")}}
//         /> */}
//         <FBCPropEx
//         username="Deekshitha"
//         isMarried={true}
//         hobbies={["sleeping","eating"]}
//         />
//       </div>
//     )
//   }
// }
// import React from "react";
// import PropChildEx from "./propsexample/PropChildEx";
// import SubChild from "./propsexample/SubChild";
// const App=()=>{
//   return(
//     <div>
//       <PropChildEx num={1000}>
//         <h1>this data coming from props children</h1>
//       </PropChildEx>
//       {/* /> */}
//     </div>
//   )
// }

import React from 'react'
import Child1 from './propsexample/Child1'
import Child2 from './propsexample/Child2'
import Child3 from './propsexample/Child3'
const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
