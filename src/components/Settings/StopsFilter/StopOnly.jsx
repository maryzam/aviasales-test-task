import React from 'react';

const StopOnly = ({ stop, handleClick }) => (
		<a className="filter__item-only"
			data-stop={ stop }
			onClick={ handleClick } >
				только
		</a>
	);

export default StopOnly;