import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Item from '../component/item';
import Input from '../component/input';
import Button from '../component/button';
import * as TodoActions from '../actions/actions';


class App extends Component {
   
    constructor(props){
        super(props)
        this.onAddItem = this.onAddItem.bind(this); 
    }
    onAddItem(){
        const {actions} = this.props;  
        const input = findDOMNode(this.refs.inputTxt);
       	actions.addItem(input.value);
        input.focus();
        input.value = '';
    }  
   
    render(){
        const {item} = this.props;
    	  return (
    	  	<div>
    	  	    <Item item={item}/>
    	  	    <Input ref="inputTxt"/>
              <Button addItem={this.onAddItem} text="添加"/> 
    	  	</div>
         
    	  )
    }
}

App.propTypes = {
	  item:PropTypes.array.isRequired,
	  actions:PropTypes.object.isRequired
}

/**
 * 把store的state传递到顶层组件的props
 */
function mapStateToProps(state) {
    return {
        item: state.appItem
    }
}

/**
 * 把action creator传递到顶层组件的props
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)