import * as R from "ramda";
import {TODO_ITEMS} from "../../constants";

export const todoItemsSave = (state, action) => {
	return {
		...state,
		[TODO_ITEMS]: action[TODO_ITEMS],
	};
}

export const todoItemAdd = (state, action) => {
	const {id, name, todoListID} = action;

	const updated_todo_items = R.append({id, name, todoListID, checked: false}, state[TODO_ITEMS]);

	return {
		...state,
		[TODO_ITEMS]: updated_todo_items,
	};
};

export const todoItemRemove = (state, action) => {
	const updated_todo_items = R.reject((item) => item.id === action.id, state[TODO_ITEMS]);

	return {
		...state,
		[TODO_ITEMS]: updated_todo_items,
	};
};

export const todoItemSetChecked = (state, action) => {
	const todo_item = R.find((item) => item.id === action.id)(state[TODO_ITEMS]);
	const todo_item_index = R.find(R.propEq('id', action.id))(state[TODO_ITEMS]);

	todo_item.checked = !todo_item.checked;

	const updated_todo_items = R.update(todo_item_index, todo_item, state[TODO_ITEMS]);

	return {
		...state,
		[TODO_ITEMS]: updated_todo_items,
	};
};
