import mockFetch from 'jest-fetch-mock';

import currencyService from '../../src/services/currency';

const testResponseUsd = (rate) => ({ 
						results: {
							RUB_USD:{
								id:"RUB_USD",
								val: rate,
								to:"USD",
								fr:"RUB"
							}
						}
					});

const testResponseEur =(rate) => ({ 
						results: {
							RUB_EUR:{
								id:"RUB_EUR",
								val: rate,
								to:"EUR",
								fr:"RUB"
							}
						}
					});

describe(("Currency Service"), () => {

	beforeEach(() => {
	    global.fetch = mockFetch;
	    mockFetch.resetMocks();
	    currencyService.resetRates();
		
	});

	it("should fetch exchange rates correctly", async () => {
		expect.assertions(4);
		
		const usdRate = 2;
		const response = testResponseUsd(usdRate);
		mockFetch.mockResponseOnce(JSON.stringify(response));

		await currencyService.fetchRates();
		expect(mockFetch).toHaveBeenCalledTimes(1);

		const rates = currencyService.getRates();
		expect(Object.keys(rates)).toHaveLength(2);
		expect(rates["RUB"]).toBe(1);
		expect(rates["USD"]).toBe(usdRate);
	});

	it("should not exchage RUB price", () => {

		const originPrice = 123;
		const price = currencyService.exchange(originPrice, "RUB");
		expect(price).toBe(originPrice);
	});

	it("should exchage price based on latest rates", async () => {

		const usdRate = 2.5;
		const response = testResponseUsd(usdRate)
		mockFetch.mockResponseOnce(JSON.stringify(response));

		await currencyService.fetchRates();

		const originPrice = 2;
		const price = currencyService.exchange(originPrice, "USD");
		expect(price).toBe(originPrice * usdRate);
	});

	it("should return null if excahge rate for currency is unknown", () => {

		const originPrice = 2;
		const price = currencyService.exchange(originPrice, "USD");
		expect(price).toBe(null);
	});
});

