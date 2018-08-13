

const baseCurrency = "RUB";
const supportedCurrencies = [ "RUB", "USD", "EUR" ]

const apiEndpoint = "https://free.currencyconverterapi.com/api/v6";

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
			return "";
		}
		const result = Number.parseFloat(price) * rate;
		return (result && !Number.isNan(result)) ? result : "";
	}

	getSupportedCurrencies() {
		return supportedCurrencies;
	}

}

export default new CurrencyService();