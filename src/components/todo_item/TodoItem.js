import React from 'react';
import PropTypes from 'prop-types';
import {todoRemove, todoSetChecked} from "../../redux/actions/todo";
import {connect} from "react-redux";

const propTypes = {
	id: PropTypes.string,
	checked: PropTypes.bool,
	name: PropTypes.string,
	onRemove: PropTypes.func,
};

const defaultProps = {};

const TodoItem = (props) => {
	const {id, checked, name, onRemove, todoSetChecked} = props;

	const onClick = () => {
		todoSetChecked(id);
	};

	return (
		<>

			<div className="row my-3">
				<div className="col">
					<label className="form-check" onClick={onClick}>
						<input className="form-check-input" type="checkbox" checked={checked}/>
						<span className="form-check-label">
							{name}
						</span>
					</label>
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
	todoSetChecked,
};

export default connect(mapStateToProps, actionCreators)(TodoItem);
