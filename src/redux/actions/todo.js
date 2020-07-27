import {graphQLRequest} from "../../grapql/graphql";
import {
	TODO_ITEM_ADD,
	TODO_GROUP_ADD,
	TODO_GROUP_SELECT,
	TODO_ITEM_REMOVE,
	TODO_ITEM_SET_CHECKED,
	TODO_GROUPS_SAVE,
	TODO_LISTS_SAVE
} from "../action_types";
import {
	todoItemAddQuery,
	todoGroupAddQuery,
	todoGroupListGetQuery,
	todoListGetQuery,
	todoRemoveQuery,
	todoSetCheckedQuery,
	clearDBQuery,
	todoGroupsGetQuery,
	todoListsGetQuery,
	todoItemRemoveQuery,
	todoItemSetCheckedQuery
} from "../../grapql/queries";
import {TODO_GROUPS, TODO_LISTS} from "../../constants";

export const todoListsGet = () => {
	return async (dispatch) => {
		const data = await graphQLRequest(todoListsGetQuery);

		if (data && data.todoLists) {
			dispatch(todoListsSave(data.todoLists));
		}
	}
}

export const todoListsSave = (todo_lists) => {
	return {
		type: TODO_LISTS_SAVE,
		[TODO_LISTS]: todo_lists,
	}
}

export const todoAdd = (name) => {
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

export const todoRemove = (id) => {
	console.log(TODO_ITEM_REMOVE, id);

	return async (dispatch) => {
		await graphQLRequest(todoItemRemoveQuery, {id});

		dispatch({
			type: TODO_ITEM_REMOVE,
			id,
		});
	}
}

export const todoSetChecked = (id) => {

	return async (dispatch) => {
		await graphQLRequest(todoItemSetCheckedQuery, {id});

		dispatch({
			type: TODO_ITEM_SET_CHECKED,
			id,
		})
	}

};

export const todoGroupsGet = () => {
	return async (dispatch) => {
		const data = await graphQLRequest(todoGroupsGetQuery);

		if(data && data.todoGroups) {
			dispatch(todoGroupsSave(data.todoGroups));
		}
	}
};

export const todoGroupsSave = (todo_groups) => {
	return {
		type: TODO_GROUPS_SAVE,
		[TODO_GROUPS]: todo_groups
	}
}

export const todoGroupAdd = (name) => {
	return async (dispatch) => {
		const data = await graphQLRequest(todoGroupAddQuery, {name});

		dispatch({
			type: TODO_GROUP_ADD,
			id: data.todoGroupAdd.id,
			name,
		});
	}
}

export const todoGroupRemove = (id) => {

}

export const todoGroupSelect = (id) => {
	return {
		type: TODO_GROUP_SELECT,
		id,
	}
}

export const clearDB = () => {
	return async (dispatch) => {
		const data = await graphQLRequest(clearDBQuery);
		console.log(data);


	}
}
