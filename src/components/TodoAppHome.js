import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoGroupAddField from "./TodoGroupAddField";
import TodoAddField from "./TodoAddField";
import TodoGroupList from "./TodoGroupList";
import TodoList from "./TodoList";

const propTypes = {};

const defaultProps = {};

const TodoAppHome = (props) => {
	const {todo_group_selected} = props;

	const renderView = useCallback(() => {
		if (!todo_group_selected) {
			return (
				<>
					<TodoGroupAddField/>
					<TodoGroupList/>
				</>
			)
		}

		return (
			<>
				<TodoAddField/>
				<TodoList/>
			</>
		)
	}, [todo_group_selected]);

	return renderView();
};

TodoAppHome.propTypes = propTypes;
TodoAppHome.defaultProps = defaultProps;

const mapStateToProps = state => {
	const {todo_group_selected} = state.todo;

	return {
		todo_group_selected,
	}
};

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(TodoAppHome);
// export default TodoAppHome;
