var Reflux = require('reflux');
var SortAction = require('../action/sortAction');
var Util = require('../util/util');

var SortStore = Reflux.createStore({
    items:[1, 10, 4, 2, 9, 5, 6, 8, 7, 3],
    listenables:[SortAction],
    onRepeat:function(playload){
    	
    	this.trigger(this.items.sort(function(){ return Math.random() > 0.5 ? 1:-1}))
    },
    onBubbleSort:function(playload){
        var oButton = Util.addClass(playload,'hide');
        var bubbleSort = function(arr){
            
            var _arr = [],_change = false;

            for(var i = 0 , len = arr.length; i < len ; i++){
                _change = false;
                for(var n = 0 , l = arr.length - i -1; n < l ;n++){
 
                	if(arr[n] > arr[n+1]){

                		arr[n] = arr[n] - arr[n+1];
                		arr[n+1] = arr[n] + arr[n+1];
                		arr[n] = arr[n+1] - arr[n];
                        _change = true;
                	}
                    
                    _arr.push(arr.slice())
                	
                }
  
                if(_change == false){
                	return _arr;
                }

            } 

            return _arr;

        };  	

        var arrs = bubbleSort(this.items);
        var timer = setInterval(function(){
         	
            this.trigger(arrs.shift());
            if(arrs.length <= 0){
            	clearInterval(timer);
            	Util.removeClass(oButton,'hide');
            }   
        }.bind(this),300);
        
    },
    getSortArr:function(){
        return this.items;	
    }
});

module.exports = SortStore;
