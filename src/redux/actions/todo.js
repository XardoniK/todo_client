import {TODO_ADD, TODO_GROUP_ADD, TODO_GROUP_LIST_SAVE, TODO_LIST_SAVE, TODO_REMOVE} from "../action_types";
import {graphQLRequest} from "../../grapql/graphql";
import {
	todoAddQuery,
	todoGroupAddQuery,
	todoGroupListGetQuery,
	todoListGetQuery,
	todoRemoveQuery
} from "../../grapql/queries";

export const todoListGet = () => {
	return async (dispatch) => {
		const data = await graphQLRequest(todoListGetQuery);

		if (data && data.todoList) {
			dispatch(todoListSave(data.todoList));
		}
	}
}

export const todoGroupListGet = () => {
	return async (dispatch) => {
		const data = await graphQLRequest(todoGroupListGetQuery);

		if(data && data.todoGroupList) {
			dispatch(todoGroupListSave(data.todoGroupList));
		}
	}
};

export const todoListSave = (todo_list) => {
	return {
		type: TODO_LIST_SAVE,
		todo_list,
	}
}

export const todoGroupListSave = (todo_group_list) => {
	return {
		type: TODO_GROUP_LIST_SAVE,
		todo_group_list
	}
}

export const todoAdd = (name) => {
	console.log(TODO_ADD, name);

	return async (dispatch) => {
		const data = await graphQLRequest(todoAddQuery, {name});
		console.log(data);

		dispatch({
			type: TODO_ADD,
			id: data.todoAdd.id,
			name,
		});
	}
};

export const todoGroupAdd = (name) => {
	return async (dispatch) => {
		const data = await graphQLRequest(todoGroupAddQuery, {name});
		console.log(data);

		dispatch({
			type: TODO_GROUP_ADD,
			id: data.todoGroupAdd.id,
			name,
		});
	}
}

export const todoRemove = (id) => {
	console.log(TODO_REMOVE, id);

	return async (dispatch) => {
		await graphQLRequest(todoRemoveQuery, {id});

		dispatch({
			type: TODO_REMOVE,
			id,
		});
	}
};
