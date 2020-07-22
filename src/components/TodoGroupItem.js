import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {todoGroupSelect} from "../redux/actions/todo";

const propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
};

const defaultProps = {};

const TodoGroupItem = (props) => {
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
					<div className="btn btn-primary" onClick={onClick}>Wybierz grupę</div>
				</div>
				<div className="col-auto">
					<div className="btn btn-danger">Usuń grupę</div>
				</div>
			</div>
		</>
	);
};

TodoGroupItem.propTypes = propTypes;
TodoGroupItem.defaultProps = defaultProps;

const mapStateToProps = state => {
};

const actionCreators = {
	todoGroupSelect,
};

export default connect(mapStateToProps, actionCreators)(TodoGroupItem);
// export default TodoGroupItem;
