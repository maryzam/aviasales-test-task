import React from 'react';
import PropTypes from 'prop-types';

import styles from './settings.css';

import { CurrencySwitcher } from './CurrencySwitcher';
import { StopsFilter } from './StopsFilter';

const Settings = ({ stops, handleStopsChange, currency, handleCurrencyChange }) => (
		<aside className="settings__panel">
			<CurrencySwitcher 
				selectedCurrency={ currency }
				handleCurrencyChange={ handleCurrencyChange } />
			<StopsFilter 
				stops={ stops }
				handleStopsChange={ handleStopsChange } />
		</aside>
	);

Settings.propTypes = {
	stops: PropTypes.arrayOf(PropTypes.bool).isRequired,
	handleStopsChange: PropTypes.func.isRequired,
	currency: PropTypes.string.isRequired,
	handleCurrencyChange: PropTypes.func.isRequired
};

export default Settings;
