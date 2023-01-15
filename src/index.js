module.exports = function toReadable(number) {

	const str = number.toString()
	let readableNumber

	if (str.length == 1) {
		readableNumber = getUnit(str)
	} else if (str.length == 2) {
		readableNumber = getResDoubleDigit(str)
	} else if (str.length == 3) {
		if (str.substr(1) === '00') {
			readableNumber = getUnit(str[0]) + ' hundred'
		} else {
			readableNumber = getUnit(str[0]) + ' hundred ' + getResDoubleDigit(str.substring(1))
		}
	}
	return readableNumber

	function getUnit(str) {
		let unit
		switch (str) {
			case '0':
				unit = 'zero';
				break;
			case '1':
				unit = 'one';
				break;
			case '2':
				unit = 'two';
				break;
			case '3':
				unit = 'three';
				break;
			case '4':
				unit = 'four';
				break;
			case '5':
				unit = 'five';
				break;
			case '6':
				unit = 'six';
				break;
			case '7':
				unit = 'seven';
				break;
			case '8':
				unit = 'eight';
				break;
			case '9':
				unit = 'nine';
				break;
		}
		return unit
	}

	function getDozen(str) {
		let dozen
		switch (str) {
			case '10':
				dozen = 'ten';
				break;
			case '11':
				dozen = 'eleven';
				break;
			case '12':
				dozen = 'twelve';
				break;
			case '13':
				dozen = 'thirteen';
				break;
			case '14':
				dozen = 'fourteen';
				break;
			case '15':
				dozen = 'fifteen';
				break;
			case '16':
				dozen = 'sixteen';
				break;
			case '17':
				dozen = 'seventeen';
				break;
			case '18':
				dozen = 'eighteen';
				break;
			case '19':
				dozen = 'nineteen';
				break;
		}
		return dozen
	}

	function getDoubleDigit(str) {
		let doubleDigit
		switch (str) {
			case '2':
				doubleDigit = 'twenty';
				break;
			case '3':
				doubleDigit = 'thirty';
				break;
			case '4':
				doubleDigit = 'forty';
				break;
			case '5':
				doubleDigit = 'fifty';
				break;
			case '6':
				doubleDigit = 'sixty';
				break;
			case '7':
				doubleDigit = 'seventy';
				break;
			case '8':
				doubleDigit = 'eighty';
				break;
			case '9':
				doubleDigit = 'ninety';
				break;
		}
		return doubleDigit
	}

	function getResDoubleDigit(str) {

		let resDoubleDigit

		if (str[0] === '1') {
			resDoubleDigit = getDozen(str)
		} else if (str[0] === '0') {
			resDoubleDigit = getUnit(str[1])
		} else if (str[1] === '0') {
			resDoubleDigit = getDoubleDigit(str[0])
		} else {
			resDoubleDigit = getDoubleDigit(str[0]) + ' ' + getUnit(str[1])
		}
		return resDoubleDigit
	}
}
