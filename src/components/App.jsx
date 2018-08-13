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
		stops: Array(4).fill(true),
		currency: "RUB" // todo use const instead of string
	}

	handleStopsChange = (stops) => {
		const stopsPredicate = (item) => (item.stops < 4) && stops[item.stops];
		const tickets = allTickets.filter(stopsPredicate);
		this.setState({ stops, tickets });
	}

	handleCurrencyChange = (event) => {
		const { target } = event;
		const currency = target.value;
		this.setState({ currency });
	}

	render() {
		console.log("render", this.state.currency);
		return (
			<Fragment>
				<Settings 
					stops={ this.state.stops }
					handleStopsChange = { this.handleStopsChange } 
					currency={ this.state.currency }
					handleCurrencyChange={ this.handleCurrencyChange }/>
				<TicketList 
					tickets={ this.state.tickets } 
					currency={ this.state.currency } />
			</Fragment>
		);
	}
}

export default App;