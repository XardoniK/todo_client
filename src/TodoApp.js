import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TodoGroupsWrapper from "./components/todo_group/TodoGroupsWrapper";
import TodoListWrapper from "./components/todo_list/TodoListsWrapper";
import TodoItemsWrapper from "./components/todo_item/TodoItemsWrapper";
import Button from "reactstrap/lib/Button";
import {todoDataGet} from "./redux/actions/todo_data";
import {ROUTER_TODO_GROUP, ROUTER_TODO_LIST} from "./constants";

const TodoApp = (props) => {
	const {todoDataGet} = props;

	useEffect(() => {
		todoDataGet();
	}, []);

	return (
		<>
			<Router>
				<Switch>
					<Route path={`/${ROUTER_TODO_LIST}/:todo_list_id`}>
						<TodoItemsWrapper/>
					</Route>
					<Route path={`/${ROUTER_TODO_GROUP}/:todo_group_id`}>
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
	todoDataGet,
}

export default connect(mapStateToProps, actionTypes)(TodoApp);
