import React, { Fragment } from 'react';
import TicketList from './TicketList';
import Settings from './Settings';

import data from '../../data/tickets.json';

const allTickets = data.tickets.map((ticket, id) =>  {
	return Object.assign({ id }, ticket);
});

allTickets.sort((first, second) => (first.price - second.price));

class App extends React.Component {

	state = {
		tickets: allTickets,
		stops: Array(4).fill(true)
	}

	handleStopsChange = (stops) => {
		const stopsPredicate = (item) => (item.stops < 4) && stops[item.stops];
		const tickets = allTickets.filter(stopsPredicate);
		this.setState({ stops, tickets });
	}

	render() {

		return (
			<Fragment>
				<Settings 
					stops={ this.state.stops }
					handleStopsChange = { this.handleStopsChange } />
				<TicketList 
					tickets={ this.state.tickets } />
			</Fragment>
		);
	}
}

export default App;