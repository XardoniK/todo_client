import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoList from "./TodoList";
import {filter} from "ramda";
import {todoListRemove} from "../../redux/actions/todo_list";

const propTypes = {
	todo_group_id: PropTypes.string,
};

const defaultProps = {};

const TodoLists = (props) => {
	const {todo_lists, todoListRemove} = props;

	const onTodoListRemove = (id) => {
		todoListRemove(id);
	}

	return (
		<>
			<div className="container">
				{todo_lists.map(todo_list => (
					<TodoList
						key={todo_list.id}
						id={todo_list.id}
						name={todo_list.name}
						onRemove={() => onTodoListRemove(todo_list.id)}
					/>
				))}
			</div>
		</>
	);
};

TodoLists.propTypes = propTypes;
TodoLists.defaultProps = defaultProps;

const mapStateToProps = (state, props) => {
	const {todo_group_id} = props;
	const {todo_lists} = state.todo;

	const todo_lists_filtered = filter(todo_list => todo_list.todoGroupID === todo_group_id, todo_lists);

	return {
		todo_lists: todo_lists_filtered,
	}
};

const actionCreators = {
	todoListRemove,
};

export default connect(mapStateToProps, actionCreators)(TodoLists);
// export default TodoLists;
