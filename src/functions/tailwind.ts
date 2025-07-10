export function tailwindProperty(property: string, values: string[]) {
	let allProperty = "";
	for (const value of values) {
		allProperty += `${property}:${value} `;
	}
	return allProperty;
}
