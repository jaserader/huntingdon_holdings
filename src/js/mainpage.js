import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Mainpage extends React.Component{

  render(){
    return(
        <div id="mainpage">
          <div className="background-image"></div>

          <div className="main-content">
            <h1><span>H</span><span className="smaller-font">UNTINGDON</span> <span>H</span><span className="smaller-font">OLDINGS</span></h1>
            <h2>Established 2014 | Nashville, Tenn.</h2>
            <a href="mailto:info@huntingdonholdings.com"><i className="fa fa-envelope-o" aria-hidden="true"></i> info@huntingdonholdings.com</a>
          </div>

          <footer>© 2016 Huntingdon Holdings</footer>
        </div>
    )
  }
}

export default Mainpage;
