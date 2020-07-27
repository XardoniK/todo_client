import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {clearDB, todoGroupsGet} from "./redux/actions/todo";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TodoGroupsWrapper from "./components/todo_group/TodoGroupsWrapper";
import TodoListWrapper from "./components/todo_list/TodoListsWrapper";
import TodoItemsWrapper from "./components/todo_item/TodoItemsWrapper";
import Button from "reactstrap/lib/Button";

const TodoApp = (props) => {
	const {todoGroupsGet, clearDB} = props;

	useEffect(() => {
		todoGroupsGet();
	}, []);

	return (
		<>
			{/*<Button color="primary" onClick={clearDB}>Clear DB</Button>*/}
			<Router>
				<Switch>
					<Route path="/todo-list/:todo_list_id">
						<TodoItemsWrapper/>
					</Route>
					<Route path="/todo-group/:todo_group_id">
						<TodoListWrapper/>
					</Route>
					<Route>
						<TodoGroupsWrapper/>
					</Route>
				</Switch>
			</Router>
		</>
	);
};

const mapStateToProps = state => {
	return state;
}
const actionTypes = {
	todoGroupsGet,
	clearDB,
}

export default connect(mapStateToProps, actionTypes)(TodoApp);
