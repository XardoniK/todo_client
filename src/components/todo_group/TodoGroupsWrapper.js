import React from 'react';
//import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoGroupAddField from "./TodoGroupAdd";
import TodoGroups from "./TodoGroups";

const propTypes = {};

const defaultProps = {};

const TodoGroupsWrapper = (props) => {
	const {} = props;

	return (
		<>
			<TodoGroupAddField/>
			<TodoGroups/>
		</>
	);
};

TodoGroupsWrapper.propTypes = propTypes;
TodoGroupsWrapper.defaultProps = defaultProps;

//const mapStateToProps = state => {};

//const actionCreators = {};

//export default connect(mapStateToProps, actionCreators)(TodoGroupsWrapper);
export default TodoGroupsWrapper;
