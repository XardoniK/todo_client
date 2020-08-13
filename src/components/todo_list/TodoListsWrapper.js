import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {todoGroupSelect} from "../../redux/actions/todo_group";
import TodoLists from "./TodoLists";
import TodoListAdd from "./TodoListAdd";

const propTypes = {
	todo_group_id: PropTypes.string,
};

const defaultProps = {};

const TodoListsWrapper = (props) => {
	const {todoGroupSelect} = props;
	let {todo_group_id} = useParams();

	if (!todo_group_id) {
		todo_group_id = null;
	}

	useEffect(() => {
		todoGroupSelect(todo_group_id);
	}, [todoGroupSelect, todo_group_id]);

	return (
		<>
			<TodoListAdd
				todo_group_id={todo_group_id}
			/>
			<TodoLists
				todo_group_id={todo_group_id}
			/>
		</>
	);
};

TodoListsWrapper.propTypes = propTypes;
TodoListsWrapper.defaultProps = defaultProps;

const mapStateToProps = state => ({});

const actionCreators = {
	todoGroupSelect,
};

export default connect(mapStateToProps, actionCreators)(TodoListsWrapper);
// export default TodoListsWrapper;
