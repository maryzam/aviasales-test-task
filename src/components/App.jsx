import React from 'react';
import TicketList from './TicketList';

import data from '../../data/tickets.json';

const tickets = data.tickets.map((ticket, id) =>  {
	return Object.assign({ id }, ticket);
});

const App = () => (
		<TicketList tickets={ tickets } />
	);

export default App;