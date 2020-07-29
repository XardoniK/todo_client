import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ItemAdd from "../ItemAdd";
import {todoListAdd} from "../../redux/actions/todo_list";

const propTypes = {};

const defaultProps = {};

const TodoListAdd = (props) => {
	const {todoListAdd} = props;

	return (
		<>
			<ItemAdd
				placeholder="Add new todo list"
				onItemAdd={todoListAdd}
			/>
		</>
	);
};

TodoListAdd.propTypes = propTypes;
TodoListAdd.defaultProps = defaultProps;

const mapStateToProps = state => ({});

const actionCreators = {
	todoListAdd,
};

export default connect(mapStateToProps, actionCreators)(TodoListAdd);
// export default TodoListAdd;
