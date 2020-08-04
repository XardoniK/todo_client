import React from 'react';
import PropTypes from 'prop-types';
import {todoItemRemove, todoItemSetChecked} from "../../redux/actions/todo_item";
import {connect} from "react-redux";

const propTypes = {
	id: PropTypes.string,
	checked: PropTypes.bool,
	name: PropTypes.string,
	onRemove: PropTypes.func,
};

const defaultProps = {};

const TodoItem = (props) => {
	const {id, checked, name, todoItemRemove, todoItemSetChecked} = props;

	const onCheckboxClick = () => {
		todoItemSetChecked(id);
	};

	return (
		<>

			<div className="row my-3">
				<div className="col">
					<label className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							checked={checked}
							onChange={onCheckboxClick}
						/>
						<span className="form-check-label">
							{name}
						</span>
					</label>
				</div>
				<div className="col-auto">

					<button
						type="button"
						className="btn btn-danger"
						onClick={todoItemRemove}
					>
						Remove item
					</button>

				</div>
			</div>
		</>
	);
};

TodoItem.propTypes = propTypes;
TodoItem.defaultProps = defaultProps;

const mapStateToProps = (state) => ({});

const actionCreators = {
	todoItemRemove,
	todoItemSetChecked,
};

export default connect(mapStateToProps, actionCreators)(TodoItem);
