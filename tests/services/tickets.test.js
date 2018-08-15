import mockFetch from 'jest-fetch-mock';

import ticketService from '../../src/services/tickets';

let mockResponse = null;

describe(("Tickets Service"), () => {

	beforeEach(() => {
	    global.fetch = mockFetch;
	    mockFetch.resetMocks();
		mockResponse = getRandomResponse();
		mockFetch.mockResponseOnce(JSON.stringify(mockResponse));
	});

	afterEach(() => {
	    mockFetch.resetMocks();
	});

	it("should call api once", async () => {
		expect.assertions(1);
		await ticketService.fetchTickets();
		expect(mockFetch).toHaveBeenCalledTimes(1);
	});

	it("should throw an error if response state is not ok", async () => {
		expect.assertions(1);
	    mockFetch.resetMocks();
		fetch.mockReject(new Error("fake error message"));

		let error = false;
		try {
			await ticketService.fetchTickets();
		} catch (e) {
			error = e;
			console.log(e, e.message);
		}

		expect(error).toBeTruthy();
	});

	it("should return all loaded tickets", async () => {
		expect.assertions(1);
		const tickets = await ticketService.fetchTickets();
		expect(tickets).toHaveLength(mockResponse.tickets.length);
	});

	it("should add a unique id to each ticket", async () => {
		expect.assertions(1);
		const tickets = await ticketService.fetchTickets();
		const uniqueIds = new Set(tickets.map((t) => t.id));
		expect(uniqueIds.size).toBe(tickets.length);
	});

});

const getRandomResponse = () => {
	const total = Math.floor(Math.random() * 20) + 1;
	const tickets = [];
	for (let i = 0; i < total; i++) {
		tickets.push(mockTickets[ (i % 2) ]); // do not care about duplicates here
	}
	return { tickets };
}

const mockTickets = [{
		    "origin": "VVO",
		    "origin_name": "Владивосток",
		    "destination": "TLV",
		    "destination_name": "Тель-Авив",
		    "departure_date": "12.05.18",
		    "departure_time": "16:20",
		    "arrival_date": "12.05.18",
		    "arrival_time": "22:10",
		    "carrier": "TK",
		    "stops": 3,
		    "price": 12400
		  }, {
		    "origin": "VVO",
		    "origin_name": "Владивосток",
		    "destination": "TLV",
		    "destination_name": "Тель-Авив",
		    "departure_date": "12.05.18",
		    "departure_time": "17:20",
		    "arrival_date": "12.05.18",
		    "arrival_time": "23:50",
		    "carrier": "S7",
		    "stops": 1,
		    "price": 13100
		  }];

