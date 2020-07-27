import React from 'react';
//import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoAddField from "./TodoItemAddField";
import TodoList from "./TodoItems";

const propTypes = {};

const defaultProps = {};

const TodoItemsWrapper = (props) => {
	const {} = props;

	return (
		<>
			<TodoAddField/>
			<TodoList/>
		</>
	);
};

TodoItemsWrapper.propTypes = propTypes;
TodoItemsWrapper.defaultProps = defaultProps;

//const mapStateToProps = state => {};

//const actionCreators = {};

//export default connect(mapStateToProps, actionCreators)(TodoItemsWrapper);
export default TodoItemsWrapper;
