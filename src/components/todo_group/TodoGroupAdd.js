import React from 'react';
import {connect} from 'react-redux';
import {todoGroupAdd} from "../../redux/actions/todo_group";
import ItemAdd from "../ItemAdd";

const propTypes = {};

const defaultProps = {};

const TodoAddField = (props) => {
	const {todoGroupAdd} = props;

	return (
		<>
			<ItemAdd
				placeholder="Add new todo group"
				onItemAdd={todoGroupAdd}
			/>
		</>
	);
};

TodoAddField.propTypes = propTypes;
TodoAddField.defaultProps = defaultProps;

const mapStateToProps = state => ({});

const actionCreators = {
	todoGroupAdd,
};

export default connect(mapStateToProps, actionCreators)(TodoAddField);
// export default TodoAddField;
