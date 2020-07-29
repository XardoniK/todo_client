import React, {useState} from 'react';
//import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
	placeholder: PropTypes.string,
	onItemAdd: PropTypes.func,
};

const defaultProps = {};

const ItemAdd = (props) => {
	const {placeholder, onItemAdd} = props;
	const [name, setName] = useState('');

	const onChange = (event) => {
		setName(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		if (name && name.trim()) {
			onItemAdd(name);
			setName('');
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
									placeholder={placeholder}
									value={name}
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

ItemAdd.propTypes = propTypes;
ItemAdd.defaultProps = defaultProps;

//const mapStateToProps = state => {};

//const actionCreators = {};

//export default connect(mapStateToProps, actionCreators)(ItemAdd);
export default ItemAdd;
