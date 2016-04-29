import {ADD_ITEM,EDIT_ITEM,DELETE_ITEM} from '../constants/appConstants';

const initialState = {
	item:[]
}

export function appItem(state = initialState,action){

    switch(action.type){

        case ADD_ITEM:
            return Object.assign({},state,{item:[...state.item,{text:action.text}]});
        default: 
            return state;
    }

}