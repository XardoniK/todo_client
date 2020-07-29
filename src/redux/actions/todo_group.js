import {graphQLRequest} from "../../grapql/graphql";
import {todoGroupAddQuery} from "../../grapql/queries";
import {TODO_GROUP_ADD, TODO_GROUP_SELECT, TODO_GROUPS_SAVE} from "../action_types";
import {GRAPHQL_TODO_GROUPS, TODO_GROUPS} from "../../constants";

export const todoGroupsSave = (data) => {
	return {
		type: TODO_GROUPS_SAVE,
		[TODO_GROUPS]: data[GRAPHQL_TODO_GROUPS],
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
