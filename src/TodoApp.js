import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {todoGroupListGet, todoListGet} from "./redux/actions/todo";
import TodoAppHome from "./components/TodoAppHome";

const TodoApp = (props) => {
	const {todoListGet, todoGroupListGet} = props;


	useEffect(() => {
		todoListGet();
		todoGroupListGet();
	}, []);

	return (
		<>
			<TodoAppHome/>
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
