import * as R from "ramda";

export const todoListSave = (state, action) => {
	const {todo_list} = action;
	console.log(todo_list)

	return {
		...state,
		todo_list,
	};
}

export const todoAdd = (state, action) => {
	const {id, name, todoGroupID} = action;

	const updated_todo_list = R.append({id, name, todoGroupID}, state.todo_list);

	return {
		...state,
		todo_list: updated_todo_list
	};
};

export const todoRemove = (state, action) => {
	const updated_todo_list = R.reject((item) => item.id === action.id, state.todo_list);

	return {
		...state,
		todo_list: updated_todo_list
	};
};

export const todoGroupListSave = (state, action) => {
	const {todo_group_list} = action;

	return {
		...state,
		todo_group_list,
	}
}

export const todoGroupAdd = (state, action) => {
	const {id, name} = action;

	const updated_todo_group_list = R.append({id, name}, state.todo_group_list);

	return {
		...state,
		todo_group_list: updated_todo_group_list,
	}
}

export const todoGroupSelect = (state, action) => {
	return {
		...state,
		todo_group_selected: action.id,
	}
}
