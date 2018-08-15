import React from 'react';
import PropTypes from 'prop-types';

const CurrencyItem = ({ currency, isSelected, handleToggle }) => {
		const statusClass = isSelected ? "button--selected" : "";
		return (
			<button
				className={ `currency__button ${statusClass}` }
					key={ currency}
					value={ currency}
					onClick={ handleToggle } >
						{ currency }
			</button>
		);
}; 

CurrencyItem.propTypes = {
	currency: PropTypes.string.isRequired,
	isSelected: PropTypes.bool.isRequired,
	handleToggle: PropTypes.func.isRequired
};

CurrencyItem.defaultProps = {
	isSelected: false
};

export default CurrencyItem;