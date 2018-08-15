import React from 'react';
import PropTypes from 'prop-types';

const StopOnly = ({ stop, handleClick }) => (
		<a className="filter__item-only"
			data-stop={ stop }
			onClick={ handleClick } >
				только
		</a>
	);

StopOnly.propTypes = {
	stop: PropTypes.number.isRequired,
	handleClick: PropTypes.func.isRequired
};

export default StopOnly;