import React from 'react';
//import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
};

const defaultProps = {};

const TodoList = (props) => {
	const {id, name} = props;

	return (
		<>
			{id}
			{name}
		</>
	);
};

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

//const mapStateToProps = state => {};

//const actionCreators = {};

//export default connect(mapStateToProps, actionCreators)(TodoList);
export default TodoList;
