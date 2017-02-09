var React = require('react');
var {Link} = require('react-router');

var Login = React.createClass({
    render:function(){
        return(
           <div className = "container-fluid">
             <input type="email" className = "form" placeholder = "Enter your email"/>
             <input type="password" className = "form" placeholder = "Enter your password"/>
             <Link to = "/todo" className = "button expanded">Log In</Link>
           </div>
        )
    }
});
module.exports = Login;