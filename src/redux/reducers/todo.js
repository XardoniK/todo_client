import {
	TODO_ITEM_ADD,
	TODO_GROUP_ADD,
	TODO_GROUP_SELECT,
	TODO_ITEM_REMOVE, TODO_ITEM_SET_CHECKED, TODO_GROUPS_SAVE, TODO_LISTS_SAVE,
	TODO_ITEMS_SAVE, TODO_LIST_ADD, TODO_LIST_SELECT
} from "../action_types";
import {
	todoItemAdd,
	todoItemRemove,
	todoItemSetChecked, todoItemsSave
} from "../modifiers/todo_item";
import {
	todoListAdd, todoListSelect,
	todoListsSave,
} from '../modifiers/todo_list';

import {
	todoGroupAdd,
	todoGroupsSave,
	todoGroupSelect,
} from "../modifiers/todo_group";
import {TODO_GROUPS, TODO_GROUP_SELECTED, TODO_ITEMS, TODO_LISTS, TODO_LIST_SELECTED} from "../../constants";

const initial_state = {
	[TODO_ITEMS]: [],

	[TODO_LISTS]: [],
	[TODO_LIST_SELECTED]: null,

	[TODO_GROUPS]: [],
	[TODO_GROUP_SELECTED]: null,
};

const reducer = (state = initial_state, action) => {
	const {type} = action;

	switch (type) {
		case TODO_ITEMS_SAVE: {
			return todoItemsSave(state, action);
		}
		case TODO_ITEM_ADD: {
			return todoItemAdd(state, action);
		}
		case TODO_ITEM_REMOVE: {
			return todoItemRemove(state, action);
		}
		case TODO_ITEM_SET_CHECKED: {
			return todoItemSetChecked(state, action);
		}

		case TODO_LISTS_SAVE: {
			return todoListsSave(state, action);
		}
		case TODO_LIST_ADD: {
			return todoListAdd(state, action);
		}
		case TODO_LIST_SELECT: {
			return todoListSelect(state, action);
		}

		case TODO_GROUPS_SAVE: {
			return todoGroupsSave(state, action);
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
