import React from 'react';

import './styles.css';

import StopsFilter from './StopsFilter';

const Settings = ({ stops, handleStopsChange }) => (
		<aside className="settings__panel">
			<StopsFilter 
				stops={ stops }
				handleStopsChange={ handleStopsChange } />
		</aside>
	);

export default Settings;
