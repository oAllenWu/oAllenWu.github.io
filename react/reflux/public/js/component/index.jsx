var React = require('react');
var ReactDOM = require('react-dom');
var SortItem = require('./sortItem');
var Button = require('./button');
var SortAction = require('../action/sortAction');
var SortStore = require('../store/sortStore');

var App = React.createClass({
	getInitialState:function(){

		return {
            list:SortStore.getSortArr()
		}
	},
	componentDidMount:function(){
       
        this.unsubscribe = SortStore.listen(this.onStatusChange);   
	},
	componentWillUnMount:function(){

        this.unsubscribe();        
	},
	onStatusChange:function(items){
       
        this.setState({list:items})     

	},
    sortClick:function(){
        var oButton = ReactDOM.findDOMNode(this.refs.repeatButton);
        SortAction.bubbleSort(oButton);
    },
    repeatClick:function(){

        SortAction.repeat();    
    },
    render:function(){

        return (
            <div className="sort-container">
                <SortItem list={this.state.list}/>
                <Button buttonTxt="冒泡" clickEvent={this.sortClick} ref="sortButton"/>
                <Button buttonTxt="乱序" clickEvent={this.repeatClick} ref="repeatButton"/>
            </div>  
        )

    }
   
});

ReactDOM.render(<App />,
    document.getElementById("app")
)