import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {todoGroupSelect} from "../../redux/actions/todo_group";
import TodoLists from "./TodoLists";
import TodoListAdd from "./TodoListAdd";

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
			<TodoListAdd/>
			<TodoLists/>
		</>
	);
};

TodoListsWrapper.propTypes = propTypes;
TodoListsWrapper.defaultProps = defaultProps;

const mapStateToProps = state => ({
});

const actionCreators = {
	todoGroupSelect,
};

export default connect(mapStateToProps, actionCreators)(TodoListsWrapper);
// export default TodoListsWrapper;
