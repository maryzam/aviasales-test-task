
export function formatStops(stops) {
	if (stops < 1) {
		return "";
	}
	if (stops === 1) {
		return "1 пересадка"; 
	}
	if (stops > 1 && stops < 5) {
		return `${stops} пересадки`;
	}
	return `${stops} пересадок`;
}

export function getCarrierLogo(carrier) {
	return `assets/carriers/${carrier}.png`
} 

const currencyFormatters = {
	"RUB": (price) => `${price}₽`,
	"USD": (price) => `$${price}`,
	"EUR": (price) => `€${price}`
}

function splitPrice(price) {
	return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
}

export function formatPrice(price, currency) {
	if (!price) {
		return "";
	}
	const splittedPrice = splitPrice(price);
	const formatter = currencyFormatters[currency];
	return formatter ? formatter(splittedPrice) : `${splittedPrice} ${currency}`;
}