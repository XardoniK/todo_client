import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoList from "./TodoList";

const propTypes = {};

const defaultProps = {};

const TodoLists = (props) => {
	const {todo_lists} = props;

	return (
		<>
			{todo_lists.map(todo_list => (
				<TodoList
					key={todo_list.id}
					id={todo_list.id}
					name={todo_list.name}
				/>
			))}
		</>
	);
};

TodoLists.propTypes = propTypes;
TodoLists.defaultProps = defaultProps;

const mapStateToProps = state => {
	const {todo_lists} = state.todo;

	return {
		todo_lists,
	}
};

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(TodoLists);
// export default TodoLists;
