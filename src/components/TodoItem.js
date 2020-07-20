import React from 'react';
import PropTypes from 'prop-types';
import {todoRemove} from "../redux/actions/todo";
import {connect} from "react-redux";

const propTypes = {
	name: PropTypes.string,
	onRemove: PropTypes.func,
};

const defaultProps = {};

const TodoItem = (props) => {
	const {name, onRemove} = props;

	return (
		<>

			<div className="row my-3">
				<div className="col">
					<span>{name}</span>
				</div>
				<div className="col-auto">

					<button
						type="button"
						className="btn btn-danger"
						onClick={onRemove}
					>
						usuń
					</button>

				</div>
			</div>
		</>
	);
};

TodoItem.propTypes = propTypes;
TodoItem.defaultProps = defaultProps;

const mapStateToProps = (state, props) => {
	// const {hash} = props;
	// const {todo_list} = state;
	//
	// return {
	// 	todo_item: todo_list[hash]
	// }

	return {};
};

const actionCreators = {
	todoRemove,
};

export default connect(mapStateToProps, actionCreators)(TodoItem);
