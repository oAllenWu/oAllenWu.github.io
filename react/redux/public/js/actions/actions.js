import {ADD_ITEM,EDIT_ITEM,DELETE_ITEM} from '../constants/appConstants';

export function addItem(text){

	return {
		type:ADD_ITEM,
		text:text
	}
}

export function editItem(text){

	return {
		type:EDIT_ITEM,
		text:text
	}
}