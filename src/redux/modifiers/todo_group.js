import * as R from "ramda";
import {TODO_GROUPS, TODO_GROUP_SELECTED} from "../../constants";

export const todoGroupsSave = (state, action) => {

	return {
		...state,
		[TODO_GROUPS]: action[TODO_GROUPS],
	}
}

export const todoGroupAdd = (state, action) => {
	const {id, name} = action;

	const updated_todo_groups = R.append({id, name}, state[TODO_GROUPS]);

	return {
		...state,
		[TODO_GROUPS]: updated_todo_groups,
	}
}

export const todoGroupSelect = (state, action) => {
	return {
		...state,
		[TODO_GROUP_SELECTED]: action.id,
	}
}
