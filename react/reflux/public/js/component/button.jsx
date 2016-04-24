var React = require('react');

var Button = React.createClass({

    render:function(){

    	return (
            <span className="button" onClick={this.props.clickEvent}>{this.props.buttonTxt}</span> 
    	)
    } 

});
module.exports = Button;