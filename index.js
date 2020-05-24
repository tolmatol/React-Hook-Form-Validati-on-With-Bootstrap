import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoute from "./Login/MainRoute";
class App extends Component { 

  render() {
    return (
       <div
      className="container-fluid"
      style={{
        background:
          "url(https://images.pexels.com/photos/1335115/pexels-photo-1335115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=740)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="col-md-10 col-lg-6 bg-white pl-5 pr-5 pt-3 pb-3">
          <div className="innerContent">
            <MainRoute />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

render( <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
