import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ROUTER_TODO_LIST} from "../../constants";
import {filter} from "ramda";

const propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	onRemove: PropTypes.func,
};

const defaultProps = {};

const TodoList = (props) => {
	const {id, name, todo_items, onRemove} = props;

	const todoItemsChecked = useCallback(() => {
		return filter((todo_item) => todo_item.checked, todo_items).length;
	}, [todo_items]);

	const todoItemsTotal = useCallback(() => {
		return todo_items.length;
	}, [todo_items]);

	return (
		<>
			<div className="row my-3">
				<div className="col">{name}</div>
				<div className="col-auto">{id}</div>
				<div className="col-auto">
					<Link
						to={`/${ROUTER_TODO_LIST}/${id}`}
						className="btn btn-primary"

					>
						Select list
					</Link>
				</div>
				<div className="col-auto">
					{todoItemsChecked()}/{todoItemsTotal()}
				</div>
				<div className="col-auto">
					<div
						className="btn btn-danger"
						onClick={onRemove}
					>
						Remove list
					</div>
				</div>
			</div>
		</>
	);
};

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

const mapStateToProps = (state, props) => {
	const {todo_items} = state.todo;

	const todo_items_filtered = filter((todo_item) => todo_item.todoListID === props.id, todo_items);

	return {
		todo_items: todo_items_filtered,
	}
};


const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(TodoList);
// export default TodoList;
