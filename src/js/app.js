import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { hashHistory } from 'react-router';

import Mainpage from "./mainpage";

class App extends React.Component {

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
};

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Mainpage} />
    </Route>
  </Router>
), document.getElementById('app'));

export default App;
