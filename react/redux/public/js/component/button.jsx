import React,{Component,PropTypes} from 'react';

class Button extends Component {

    render(){

        const {addItem,text} = this.props;

    	return (
            <span className="button" onClick={addItem}>{text}</span>
    	)
    }
}

Button.propTypes = {
	addItem: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
}

export default Button;