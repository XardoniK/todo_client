import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoItemAdd from "./TodoItemAdd";
import TodoItems from "./TodoItems";
import {useParams} from "react-router-dom";
import {todoListSelect} from "../../redux/actions/todo_list";

const propTypes = {};

const defaultProps = {};

const TodoItemsWrapper = (props) => {
	const {todoListSelect} = props;
	const {todo_list_id} = useParams();

	useEffect(() => {
		if (todo_list_id) {
			todoListSelect(todo_list_id);
		}
	}, [todoListSelect, todo_list_id]);

	return (
		<>
			<TodoItemAdd/>
			<TodoItems/>
		</>
	);
};

TodoItemsWrapper.propTypes = propTypes;
TodoItemsWrapper.defaultProps = defaultProps;

const mapStateToProps = state => ({});

const actionCreators = {
	todoListSelect,
};

export default connect(mapStateToProps, actionCreators)(TodoItemsWrapper);
// export default TodoItemsWrapper;
