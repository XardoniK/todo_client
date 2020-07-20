import React, {useEffect} from 'react';
import TodoAddField from "./components/TodoAddField";
import TodoList from "./components/TodoList";
import {connect} from "react-redux";
import {todoGroupListGet, todoListGet} from "./redux/actions/todo";
import TodoGroupList from "./components/TodoGroupList";
import TodoGroupAddField from "./components/TodoGroupAddField";

const TodoApp = (props) => {
	const {todoListGet, todoGroupListGet} = props;


	useEffect(() => {
		todoListGet();
		todoGroupListGet();
	}, []);

	return (
		<>
			<TodoGroupAddField/>
			<TodoAddField/>
			<TodoGroupList/>
			<TodoList/>
		</>
	);
};

const mapStateToProps = state => {
	return state;
}

const actionTypes = {
	todoListGet,
	todoGroupListGet,
}

export default connect(mapStateToProps, actionTypes)(TodoApp);
