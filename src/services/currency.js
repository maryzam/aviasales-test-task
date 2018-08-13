// use this service as soos as it doesn't require any api key for free version
// max 2 exchages per request limit (don't care about it in demo)
const apiEndpoint = "https://free.currencyconverterapi.com/api/v6";

const baseCurrency = "RUB";
const supportedCurrencies = [ "RUB", "USD", "EUR" ]

class CurrencyService {

	constructor() {
		this.rates = {};
		this.rates[baseCurrency] = 1;
	}

	async fetchRates() {

		const query = supportedCurrencies
						.filter((c) => c !== baseCurrency)
						.map((c) => (`${baseCurrency}_${c}`))
						.join();
		const request = `${apiEndpoint}/convert?q=${query}`;

		try {
			const response = await fetch(request);
			if (response.ok) {

				const { results } = await response.json();
				const newRates = {};
				Object.values(results)
					.forEach((d) => {	newRates[d.to] = d.val; })
				
				this.rates = {
					...this.rates,
					...newRates
				};
			}
		} catch (err) {
			console.error('Failed to fetch exchange rates', err);
		}
	}

	exchange(price, currency) {
		const rate = this.rates[currency];
		if (!rate) {
			console.error(`Unable to convert price to ${currency} currency`);
			return null;
		}
		const result = Number.parseFloat(price);
		if (!result || Number.isNaN(result)) {
			console.error("Ticket price should be a number (float)");
			return null;
		}
		// dummy price rounding, should be more accurate irl
		return Math.ceil(result * rate);
	}

	getSupportedCurrencies() {
		return supportedCurrencies;
	}

}

export default new CurrencyService();