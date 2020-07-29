import {graphQLRequest} from "../../grapql/graphql";
import {
	TODO_ITEM_ADD,
	TODO_ITEM_REMOVE,
	TODO_ITEM_SET_CHECKED,
	TODO_ITEMS_SAVE,
} from "../action_types";
import {
	todoItemAddQuery,
	todoItemRemoveQuery,
	todoItemSetCheckedQuery
} from "../../grapql/queries";
import {GRAPHQL_TODO_ITEMS, TODO_ITEMS,} from "../../constants";


export const todoItemsSave = (data) => {
	if (data[GRAPHQL_TODO_ITEMS]) {
		return {
			type: TODO_ITEMS_SAVE,
			[TODO_ITEMS]: data[GRAPHQL_TODO_ITEMS],
		}
	}
}

export const todoItemAdd = (name) => {
	console.log(TODO_ITEM_ADD, name);

	return async (dispatch, getState) => {
		const {todo_group_selected} = getState().todo;
		console.log(todo_group_selected);
		const data = await graphQLRequest(todoItemAddQuery, {name, todoGroupID: todo_group_selected});
		console.log(data);

		dispatch({
			type: TODO_ITEM_ADD,
			id: data.todoAdd.id,
			name,
			todoGroupID: todo_group_selected,
		});
	}
}

export const todoItemRemove = (id) => {
	console.log(TODO_ITEM_REMOVE, id);

	return async (dispatch) => {
		await graphQLRequest(todoItemRemoveQuery, {id});

		dispatch({
			type: TODO_ITEM_REMOVE,
			id,
		});
	}
}

export const todoItemSetChecked = (id) => {

	return async (dispatch) => {
		await graphQLRequest(todoItemSetCheckedQuery, {id});

		dispatch({
			type: TODO_ITEM_SET_CHECKED,
			id,
		})
	}

};
