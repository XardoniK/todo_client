import React from 'react';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {todoGroupSelect} from "../../redux/actions/todo_group";
import {Link} from "react-router-dom";
import {ROUTER_TODO_GROUP} from "../../constants";

const propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
};

const defaultProps = {};

const TodoGroup = (props) => {
	const {id, name} = props;

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
						to={`/${ROUTER_TODO_GROUP}/${id}`}
						// onClick={onClick}
						className="btn btn-primary"
					>
						Select group
					</Link>
				</div>
				<div className="col-auto">
					<div className="btn btn-danger">Remove group</div>
				</div>
			</div>
		</>
	);
};

TodoGroup.propTypes = propTypes;
TodoGroup.defaultProps = defaultProps;

// const mapStateToProps = state => ({});

// const actionCreators = {};

// export default connect(mapStateToProps, actionCreators)(TodoGroup);
export default TodoGroup;
