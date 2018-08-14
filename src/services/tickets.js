import moment from "moment";
import locale_ru from "moment/locale/ru";
moment.locale("ru", locale_ru);

import { formatStops, getCarrierLogo } from '../utils';

const apiEndpoint = "api";

const formatDate = (date) => moment(date, "DD.MM.YY").format("D MMM YYYY, ddd");
const byPrice = (first, second) => (first.price - second.price)

class TicketService {

	async fetchTickets() {
		const request = `${apiEndpoint}/tickets.json`;
		const response = await fetch(request);
		if (!response.ok) {
			throw new Error("Unable to fetch tickets");
		}

		const data = await response.json();
		return data.tickets
				.sort(byPrice)
				.map((item, id) => {
					return {
						id: id, // should be used a real id from source data
						carrier: {
							name: item.carrier,
							logo: getCarrierLogo(item.carrier) 
						},
						departure: {
							airport: `${ item.origin }, ${ item.origin_name }`,
							date: formatDate(item.departure_date),
							time: item.departure_time,
						},
						arrival: {
							airport: `${ item.destination_name }, ${ item.destination }`,
							date: formatDate(item.arrival_date),
							time: item.arrival_time,
						},
						price: item.price,
						stops: item.stops,
						stopsLabel: formatStops(item.stops)
					};			
				});
	}
}

export default new TicketService();