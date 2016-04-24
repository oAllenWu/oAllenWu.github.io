var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var SortItem = React.createClass({
    
    getDefaultProps:function(){

        return {
        	list:[1, 3, 4, 2, 8, 5, 6, 7, 9, 10]
        } 

    },
    render:function(){
           
            var items = this.props.list.map(function(item,index){

                return (

                     <li key={item} style={{height:item*50 + 'px',left:index*60 + 'px'}}>
                         <span>{item}</span>       
                     </li> 
                )
            });

            return ( 
                <ul className="cf">
                    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {items}
                    </ReactCSSTransitionGroup>
                </ul> 
            )    
   

    }
 
});

module.exports = SortItem;