/*
1- form group yanında ekle butonu
2- tablo şeklinde eklenen todolar
3- 
*/

import React from "react";
import "./style.css";
import Header from "./Header"

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Header/>
      </div>
    );
  }
}

export default App;
