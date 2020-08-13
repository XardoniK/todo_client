import {TODO_LIST_ADD, TODO_LIST_REMOVE, TODO_LIST_SELECT, TODO_LISTS_SAVE} from "../action_types";
import {GRAPHQL_TODO_GROUP_ID, GRAPHQL_TODO_LISTS, TODO_LISTS} from "../../constants";
import {graphQLRequest} from "../../grapql/graphql";
import {todoListAddQuery} from "../../grapql/queries";

export const todoListsSave = (data) => {
	if (data[GRAPHQL_TODO_LISTS]) {
		return {
			type: TODO_LISTS_SAVE,
			[TODO_LISTS]: data[GRAPHQL_TODO_LISTS],
		}
	}
}

export const todoListAdd = (name, todo_group_id) => {
	return async (dispatch, getState) => {
		const data = await graphQLRequest(todoListAddQuery, {name, [GRAPHQL_TODO_GROUP_ID]: todo_group_id});

		dispatch({
			type: TODO_LIST_ADD,
			id: data.todoListAdd.id,
			name,
			[GRAPHQL_TODO_GROUP_ID]: todo_group_id,
		});
	}
}

export const todoListRemove = (id) => {
	return {
		type: TODO_LIST_REMOVE,
		id,
	}
}

export const todoListSelect = (id) => {
	return {
		type: TODO_LIST_SELECT,
		id,
	}
}
