import React, { Fragment } from 'react';

import { TicketList } from './TicketList';
import Settings from './Settings/Settings';
import Header from './Header/Header';

import './app.css';

import ticketService from '../services/tickets';

const filterTickets = (tickets, stops) => {
	const stopsPredicate = (item) => (item.stops < 4) && stops[item.stops];
	return tickets.filter(stopsPredicate);
};

class App extends React.Component {

	allTickets = [];

	state = {
		isLoading: true,
		stops: Array(4).fill(true),
		currency: "RUB", // todo use const instead of string
		tickets: []
	};

	componentDidMount() {
		ticketService
			.fetchTickets()
			.then((data) => {
				const { stops } = this.state;
				this.allTickets = data;
				this.setState({
					isLoading: false,
					tickets: filterTickets(data, stops)
				});
			})
			.catch((err) => {
				console.error("Failed to fetch tickets", err); // todo
			})
	}

	handleStopsChange = (stops) => {
		const stopsPredicate = (item) => (item.stops < 4) && stops[item.stops];
		const tickets = this.allTickets.filter(stopsPredicate);
		this.setState({ stops, tickets });
	}

	handleCurrencyChange = (event) => {
		const { target } = event;
		const currency = target.value;
		this.setState({ currency });
	}

	render() {
		return (
			<Fragment>
				<Header />
				<main className="search__main">
					<Settings 
						stops={ this.state.stops }
						handleStopsChange = { this.handleStopsChange } 
						currency={ this.state.currency }
						handleCurrencyChange={ this.handleCurrencyChange }/>
					<TicketList 
						tickets={ this.state.tickets } 
						currency={ this.state.currency } />
				</main>
			</Fragment>
		);
	}
}

export default App;