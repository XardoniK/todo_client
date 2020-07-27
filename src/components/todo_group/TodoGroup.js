import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {todoGroupSelect} from "../../redux/actions/todo";
import {Link} from "react-router-dom";

const propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
};

const defaultProps = {};

const TodoGroup = (props) => {
	const {name, id, todoGroupSelect} = props;

	const onClick = () => {
		todoGroupSelect(id);
	}

	return (
		<>
			<div className="row my-3">
				<div className="col">
					{name}
				</div>
				<div className="col-auto">
					{id}
				</div>
				<div className="col-auto">
					<Link
						to={`/todo_group/${id}`}
						// onClick={onClick}
						className="btn btn-primary"
					>
						Wybierz grupę
					</Link>
				</div>
				<div className="col-auto">
					<div className="btn btn-danger">Usuń grupę</div>
				</div>
			</div>
		</>
	);
};

TodoGroup.propTypes = propTypes;
TodoGroup.defaultProps = defaultProps;

const mapStateToProps = state => {
};

const actionCreators = {
	todoGroupSelect,
};

export default connect(mapStateToProps, actionCreators)(TodoGroup);
// export default TodoGroup;
