import React from 'react';

import './styles.css';

import CurrencySwitcher from './CurrencySwitcher';
import StopsFilter from './StopsFilter';

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

export default Settings;
