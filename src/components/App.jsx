import React from 'react';
import TicketList from './TicketList';

import data from '../../data/tickets.json';

const tickets = data.tickets.map((ticket, id) =>  {
	return Object.assign({ id }, ticket);
});

tickets.sort((first, second) => (first.price - second.price));

const carriers = new Set(tickets.map((t) => t.carrier));
console.log(carriers);

const App = () => (
		<TicketList tickets={ tickets } />
	);

export default App;