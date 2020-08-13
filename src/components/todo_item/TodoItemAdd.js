import React from 'react';
import {connect} from 'react-redux';
import {todoItemAdd} from "../../redux/actions/todo_item";
import ItemAdd from "../ItemAdd";

const propTypes = {};

const defaultProps = {};

const TodoItemAdd = (props) => {
	const {todoItemAdd} = props;

	return (
		<>
			<ItemAdd
				placeholder="Add new todo item"
				onItemAdd={todoItemAdd}
			/>
		</>
	);
};

TodoItemAdd.propTypes = propTypes;
TodoItemAdd.defaultProps = defaultProps;

const mapStateToProps = state => ({});

const actionCreators = {
	todoItemAdd,
};

export default connect(mapStateToProps, actionCreators)(TodoItemAdd);
// export default TodoItemAdd;
