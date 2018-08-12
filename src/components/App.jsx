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

	handleStopToggle = (event) => {
		const target = event.target;
		const stopType = target.value;
		const isChecked = target.checked;

		if (stopType === 'all') {
			this.updateFilteredData(Array(4).fill(isChecked));
			return; 
		} 
		const newStops = [...this.state.stops];
		newStops[stopType] = isChecked;
		this.updateFilteredData(newStops);
	}

	handleStopOnly = (event) => {
		const target = event.target;
		const stopType = +target.dataset.stop;

		const newStops = Array(4).fill(false);
		newStops[stopType] = true;

		this.updateFilteredData(newStops);
	}

	updateFilteredData(stops) {
		const tickets = allTickets.filter((item) => (item.stops < 4) && stops[item.stops]);
		this.setState({ stops, tickets });
	}

	render() {

		return (
			<Fragment>
				<Settings 
					stops={ this.state.stops }
					handleStopToggle = { this.handleStopToggle} 
					handleStopOnly ={ this.handleStopOnly }/>
				<TicketList 
					tickets={ this.state.tickets } />
			</Fragment>
		);
	}
}

export default App;