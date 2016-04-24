var Util = {

    addClass:function(element,className){

        var _class = element.className;
        if(_class.indexOf(className) === -1){
         
            element.className += ' ' + className; 
        }
        return element;  
    },
    removeClass:function(element,className){

        var _class = element.className;

        element.className = _class.replace(className,'');
        return element; 
    }

}

module.exports = Util;