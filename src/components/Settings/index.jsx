import React from 'react';

import './styles.css';

import StopsFilter from './StopsFilter';

const Settings = ({ stops, handleStopToggle, handleStopOnly }) => (
		<aside className="settings__panel">
			<StopsFilter 
				stops={ stops }
				handleStopToggle={ handleStopToggle }
				handleStopOnly={ handleStopOnly } />
		</aside>
	);

export default Settings;
