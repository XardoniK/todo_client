import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {todoItemRemove,} from "../../redux/actions/todo_item";
import TodoItem from "./TodoItem";
import {filter} from "ramda";

const propTypes = {};

const defaultProps = {};

const TodoItems = (props) => {
	const {todo_items, todoItemRemove} = props;

	if (!todo_items) return null;

	const onTodoItemRemove = (id) => {
		todoItemRemove(id);
	};

	return (
		<>
			<div className="container">
				{todo_items.map(todo_item => (
					<TodoItem
						key={todo_item.id}
						id={todo_item.id}
						name={todo_item.name}
						checked={todo_item.checked}
						onRemove={() => onTodoItemRemove(todo_item.id)}
					/>
				))}
			</div>

		</>
	);
};

TodoItems.propTypes = propTypes;
TodoItems.defaultProps = defaultProps;

const mapStateToProps = state => {
	const {todo_items, todo_list_selected} = state.todo;

	const todo_items_filtered = filter(todo_item => todo_item.todoListID === todo_list_selected, todo_items);

	return {
		todo_items: todo_items_filtered
	}
};

const actionCreators = {
	todoItemRemove,
};

export default connect(mapStateToProps, actionCreators)(TodoItems);
