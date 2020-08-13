import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ItemAdd from "../ItemAdd";
import {todoListAdd} from "../../redux/actions/todo_list";

const propTypes = {
	todo_group_id: PropTypes.string,
};

const defaultProps = {};

const TodoListAdd = (props) => {
	const {todo_group_id, todoListAdd} = props;

	const onTodoListAdd = (name) => {
		todoListAdd(name, todo_group_id);
	}

	return (
		<>
			<ItemAdd
				placeholder="Add new todo list"
				onItemAdd={onTodoListAdd}
			/>
		</>
	);
};

TodoListAdd.propTypes = propTypes;
TodoListAdd.defaultProps = defaultProps;

const mapStateToProps = state => ({});

const actionCreators = {
	todoListAdd,
};

export default connect(mapStateToProps, actionCreators)(TodoListAdd);
// export default TodoListAdd;
