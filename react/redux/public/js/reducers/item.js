import {ADD_ITEM,EDIT_ITEM,DELETE_ITEM} from '../constants/appConstants';

const initialState = [];

export function appItem(state = initialState,action){

    switch(action.type){

        case ADD_ITEM:
            return [...state,{text:action.text}];
        default: 
            return state;
    }

}