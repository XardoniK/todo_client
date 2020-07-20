import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import {todoAdd} from "../redux/actions/todo_list";
import {useMutation} from "graphql-hooks";
import {todoAdd} from "../redux/actions/todo";

const propTypes = {};

const defaultProps = {};

const TodoAddField = (props) => {
	const {todoAdd} = props;
	const [new_todo_name, setNewTodoName] = useState('');
	// const [todoAdd] = useMutation(`
	// 	mutation todoAdd($name: String!) {
	// 		todoAdd(name: $name, todoGroupID: 0) {
	// 			id
	// 		}
	// 	}
	// `);

	const onChange = (event) => {
		setNewTodoName(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		onTodoAdd();
	};

	const onTodoAdd = () => {
		if (new_todo_name && new_todo_name.trim()) {
			todoAdd(new_todo_name);
			setNewTodoName('');
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
									placeholder="Add new todo"
									value={new_todo_name}
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
	todoAdd,
};

export default connect(mapStateToProps, actionCreators)(TodoAddField);
// export default TodoAddField;
