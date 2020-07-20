import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {todoAdd} from "../redux/actions/todo";
import {todoGroupAdd} from "../redux/actions/todo";

const propTypes = {};

const defaultProps = {};

const TodoAddField = (props) => {
	const {todoGroupAdd} = props;
	const [new_todo_group_name, setNewTodoGroupName] = useState('');


	const onChange = (event) => {
		setNewTodoGroupName(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		onTodoAdd();
	};

	const onTodoAdd = () => {
		if (new_todo_group_name && new_todo_group_name.trim()) {
			todoGroupAdd(new_todo_group_name);
			setNewTodoGroupName('');
		}
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<form onSubmit={onSubmit}>
							<div className="input-group">
								<input
									className="form-control"
									type="text"
									placeholder="Add new group"
									value={new_todo_group_name}
									onChange={onChange}
								/>
								<div className="input-group-append">
									<button className="btn btn-secondary">
										Dodaj
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
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
