import React from 'react';
//import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ROUTER_TODO_LIST} from "../../constants";

const propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	onRemove: PropTypes.func,
};

const defaultProps = {};

const TodoList = (props) => {
	const {id, name, onRemove} = props;

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

//const mapStateToProps = state => {};

//const actionCreators = {};

//export default connect(mapStateToProps, actionCreators)(TodoList);
export default TodoList;
