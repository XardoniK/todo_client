import {TODO_ADD, TODO_GROUP_ADD, TODO_GROUP_LIST_SAVE, TODO_LIST_SAVE, TODO_REMOVE} from "../action_types";
import {todoAdd, todoGroupAdd, todoGroupListSave, todoListSave, todoRemove} from "../modifiers/todo";

const initial_state = {
	todo_list: [],
	todo_group_list: [],
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
		default: {
			return state;
		}
	}
};

export default reducer;
