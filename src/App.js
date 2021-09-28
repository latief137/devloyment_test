import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { DatePicker, Button, version } from 'antd';
import './App.css'
import "antd/dist/antd.css";
import  { MyContext } from './context';

import Stage1 from "./components/stage_1";
import Stage2 from "./components/stage_2";

class App extends React.Component {

  static contextType = MyContext;

  render() {
    return (
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who pays the bill 2</h1>
        { this.context.state.stage === 1 ?
           <Stage1/>
           :
           <Stage2/>
        }
      </div>
      <div>
      <div className="App">
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
  </div>

      </div>
    </div>

    )
  }
}

export default App;
