import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoAddField from "../todo_item/TodoItemAddField";
import TodoList from "../todo_item/TodoItems";
import {useParams} from 'react-router-dom';
import {todoGroupSelect} from "../../redux/actions/todo";

const propTypes = {};

const defaultProps = {};

const TodoListsWrapper = (props) => {
	const {todoGroupSelect} = props;
	const {todo_group_id} = useParams();

	useEffect(() => {
		console.log(todo_group_id);
		todoGroupSelect(todo_group_id);
	}, [todoGroupSelect, todo_group_id]);

	return (
		<>
			<TodoAddField/>
			<TodoList/>
		</>
	);
};

TodoListsWrapper.propTypes = propTypes;
TodoListsWrapper.defaultProps = defaultProps;

const mapStateToProps = state => {
};

const actionCreators = {
	todoGroupSelect,
};

export default connect(mapStateToProps, actionCreators)(TodoListsWrapper);
// export default TodoListsWrapper;
