import React,{Component,PropTypes} from 'react';

class Item extends Component{

    render(){
        var {item} = this.props;console.log(item);
        var items = item.map(function(item,index){

            return (
                <li key={index}>{item.text}</li> 
            ) 
        })  
    	return (
 
            <ul className="ul">
                {items}
            </ul>               
    	)
    }
}

Item.propTypes = {

    item:PropTypes.array.isRequired

};

export default Item;