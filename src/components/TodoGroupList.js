import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoGroupItem from "./TodoGroupItem";

const propTypes = {};

const defaultProps = {};

const TodoGroupList = (props) => {
	const {todo_group_list} = props;

	return (
		<>
			<div className="container">
				{todo_group_list.map((todo_group_item) => (
					<TodoGroupItem
						name={todo_group_item.name}
						id={todo_group_item.id}
					/>
				))}
			</div>
		</>
	);
};

TodoGroupList.propTypes = propTypes;
TodoGroupList.defaultProps = defaultProps;

const mapStateToProps = state => {
	const {todo_group_list} = state.todo;
	console.log(todo_group_list);
	return {
		todo_group_list
	}
};

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(TodoGroupList);
// export default TodoGroupList;
