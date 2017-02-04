var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');



require("style!css!foundation-sites/dist/foundation.min.css")
$(document).foundation();
// var Route = require('react-router').Route; It is same as upper beacuse we have to assign this same requier 
//  var obj =  { // It is same as below 
require("style!css!applicationStyles")
//   name : "andrew"
// }
// var {name} = obj;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        
    </Route>
  </Router>,
  document.getElementById('app')
);
