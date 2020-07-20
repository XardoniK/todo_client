import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {todoAdd, todoRemove} from "../redux/actions/todo";
import TodoItem from "./TodoItem";
import {useMutation, useQuery} from "graphql-hooks";

const query = `
	query {
		todoList {
			id
			name
		}
	}
`;

const queryRemove = `
	mutation removeTodo($id: ID) {
		removeTodo(id: $id) {
			id
		}
	}
`;

const propTypes = {};

const defaultProps = {};

const TodoList = (props) => {
	const {todo_list, todoRemove} = props;

	// const {loading, error, data, refetch} = useQuery(query);
	// const [removeTodo] = useMutation(queryRemove);

	// useEffect(() => {
	// 	console.log(1);
	// });

	// if (!R.is(Object, todo_list)) return null;
	// console.log(todo_list);

	if (!todo_list) return null;

	const onTodoRemove = async (id) => {
		console.log(id);
		todoRemove(id);
		// const reponse = await removeTodo({variables: {id}});
	};

	return (
		<>
			<div className="container">
				{todo_list.map(todo_item => (
					<TodoItem
						name={todo_item.name}
						onRemove={() => onTodoRemove(todo_item.id)}
					/>
				))}
			</div>

		</>
	);
};

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

const mapStateToProps = state => {
	const {todo_list} = state.todo;

	return {
		todo_list
	}
};

const actionCreators = {
	todoRemove,
};

export default connect(mapStateToProps, actionCreators)(TodoList);
