import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {todoRemove} from "../../redux/actions/todo";
import TodoItem from "./TodoItem";
import {filter} from "ramda";

const propTypes = {};

const defaultProps = {};

const TodoItems = (props) => {
	const {todo_list, todoRemove} = props;

	if (!todo_list) return null;

	const onTodoRemove = async (id) => {

		todoRemove(id);
	};

	return (
		<>
			<div className="container">
				{todo_list.map(todo_item => (
					<TodoItem
						id={todo_item.id}
						name={todo_item.name}
						checked={todo_item.checked}
						onRemove={() => onTodoRemove(todo_item.id)}
					/>
				))}
			</div>

		</>
	);
};

TodoItems.propTypes = propTypes;
TodoItems.defaultProps = defaultProps;

const mapStateToProps = state => {
	const {todo_list, todo_group_selected} = state.todo;

	const todo_list_filtered = filter(todo_item => todo_item.todoGroupID === todo_group_selected, todo_list);

	return {
		todo_list: todo_list_filtered
	}
};

const actionCreators = {
	todoRemove,
};

export default connect(mapStateToProps, actionCreators)(TodoItems);
