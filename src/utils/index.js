
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