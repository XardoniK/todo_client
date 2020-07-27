import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoGroup from "./TodoGroup";

const propTypes = {};

const defaultProps = {};

const TodoGroups = (props) => {
	const {todo_groups} = props;

	return (
		<>
			<div className="container">
				{todo_groups.map((todo_group) => (
					<TodoGroup
						name={todo_group.name}
						id={todo_group.id}
					/>
				))}
			</div>
		</>
	);
};

TodoGroups.propTypes = propTypes;
TodoGroups.defaultProps = defaultProps;

const mapStateToProps = state => {
	const {todo_groups} = state.todo;
	// console.log(todo_groups);
	return {
		todo_groups
	}
};

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(TodoGroups);
// export default TodoGroups;
