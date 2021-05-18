//Converting Fahrenheit to Celsius
function convertFahrToCelsius(tempValue) {
	let valueType = typeof tempValue;
	if (valueType === "string" || valueType === "number") {
		if (tempValue === "") {
			let error = `${JSON.stringify(tempValue)} is an empty string`;
			console.log(error);
			return error;
		} else if (isNaN(tempValue)) {
			let error = `${JSON.stringify(tempValue)} is a ${typeof tempValue}.`;
			console.log(error);
			return error;
		} else {
			let tempCelsius = ((tempValue - 32) * 5) / 9;
			console.log(`${tempCelsius}°C`);
			return tempCelsius;
		}
	} else if (Array.isArray(tempValue)) {
		let error = `${JSON.stringify(tempValue)} is not a valid number but an array`;
		console.log(error);
		return error;
	} else {
		let error = `${JSON.stringify(tempValue)} is not a valid number but a/an ${typeof tempValue}.`;
		console.log(error);
		return error;
	}
}

//The YuGiOh function
function checkYuGiOh(num) {
	const theList = [];
	if (isNaN(num)) {
		let error = `Invalid parameter: ${JSON.stringify(num)}.`;
		console.log(error);
		return error;
	} else {
		for (i = 1; i <= num; i++) {
			if (i % 2 === 0) {
				if (i % 3 === 0) {
					if (i % 5 === 0) {
						theList.push("yu-gi-oh");
					} else {
						theList.push("yu-gi");
					}
				} else if (i % 5 === 0) {
					theList.push("yu-oh");
				} else {
					theList.push("yu");
				}
			} else if (i % 3 === 0) {
				if (i % 5 === 0) {
					theList.push("gi-oh");
				} else {
					theList.push("gi");
				}
			} else if (i % 5 === 0) {
				theList.push("oh");
			} else {
				theList.push(i);
			}
		}
		console.log(theList);
		return theList;
	}
}

checkYuGiOh("cow is moo");
