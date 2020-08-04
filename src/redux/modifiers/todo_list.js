import * as R from "ramda";
import {TODO_LIST_SELECTED, TODO_LISTS} from "../../constants";

export const todoListsSave = (state, action) => {

	return {
		...state,
		[TODO_LISTS]: action[TODO_LISTS],
	};
}

export const todoListAdd = (state, action) => {
	const {id, name, todoGroupID} = action;

	const updated_todo_lists = R.append({id, name, todoGroupID}, state[TODO_LISTS]);

	return {
		...state,
		[TODO_LISTS]: updated_todo_lists,
	};
}

export const todoListSelect = (state, action) => {
	const {id} = action;

	return {
		...state,
		[TODO_LIST_SELECTED]: id,
	}
}
