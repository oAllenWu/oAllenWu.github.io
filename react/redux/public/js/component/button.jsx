import React,{Component} from 'react';

class Button extends Component {

    render(){

    	return (
            <span className="button">{this.props.text}</span>
    	)
    }
}

export default Button;