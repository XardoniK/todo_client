import {TODO_ITEM_ADD, TODO_LIST_ADD, TODO_LIST_REMOVE, TODO_LISTS_SAVE} from "../action_types";
import {GRAPHQL_TODO_LISTS, TODO_GROUP_SELECTED, TODO_LISTS} from "../../constants";
import {graphQLRequest} from "../../grapql/graphql";
import {todoItemAddQuery, todoListAddQuery} from "../../grapql/queries";

export const todoListsSave = (data) => {
	if (data[GRAPHQL_TODO_LISTS]) {
		return {
			type: TODO_LISTS_SAVE,
			[TODO_LISTS]: data[GRAPHQL_TODO_LISTS],
		}
	}
}

export const todoListAdd = (name) => {
	return async (dispatch, getState) => {
		const todo_group_selected = getState().todo[TODO_GROUP_SELECTED];

		const data = await graphQLRequest(todoListAddQuery, {name, todoGroupID: todo_group_selected});
		console.log(data);

		dispatch({
			type: TODO_LIST_ADD,
			id: data.todoListAdd.id,
			name,
			todoGroupID: todo_group_selected,
		});
	}
}

export const todoListRemove = () => {
	return {
		type: TODO_LIST_REMOVE,
	}
}
