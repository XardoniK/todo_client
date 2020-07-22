import {
	TODO_ADD,
	TODO_GROUP_ADD,
	TODO_GROUP_LIST_SAVE,
	TODO_GROUP_SELECT,
	TODO_LIST_SAVE,
	TODO_REMOVE
} from "../action_types";
import {todoAdd, todoGroupAdd, todoGroupListSave, todoGroupSelect, todoListSave, todoRemove} from "../modifiers/todo";

const initial_state = {
	todo_list: [],
	todo_group_list: [],
	todo_group_selected: null,
};

const reducer = (state = initial_state, action) => {
	const {type} = action;

	switch (type) {
		case TODO_LIST_SAVE: {
			return todoListSave(state, action);
		}
		case TODO_ADD: {
			return todoAdd(state, action);
		}
		case TODO_REMOVE: {
			return todoRemove(state, action);
		}
		case TODO_GROUP_LIST_SAVE: {
			return todoGroupListSave(state, action);
		}
		case TODO_GROUP_ADD: {
			return todoGroupAdd(state, action);
		}
		case TODO_GROUP_SELECT: {
			return todoGroupSelect(state, action);
		}
		default: {
			return state;
		}
	}
};

export default reducer;
