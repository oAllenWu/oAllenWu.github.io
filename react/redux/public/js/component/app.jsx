import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Item from './item';
import Input from './input';
import Button from './button';
import * as TodoActions from '../actions/actions';


class App extends Component {
   
    onAddItem(){
        const {actions} = this.props;  
        const input = findDOMNode(this.refs.inputTxt);console.log(input);  
    	actions.addItem(input.value)
    }  
   
    render(){
        const {item} = this.props;
    	return (
    		<div>
    		    <Item item={item}/>
    		    <Input ref="inputTxt"/>
                <Button addItem={this.onAddItem.bind(this)} text="添加"/> 
    		</div>
       
    	)
    }
}

App.propTypes = {
	item:PropTypes.array.isRequired,
	actions:PropTypes.object.isRequired
}

/**
 * 把store的state跟组件连接起来
 */
function mapStateToProps(state) {
  return {
    item: state.appItem
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)