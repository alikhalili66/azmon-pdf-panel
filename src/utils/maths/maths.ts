export class Maths {
	//
	static plus = (number1: number | string, number2: number | string) => {
		const num1 = String((typeof number1 === 'string' ? +number1 : number1) || 0);
		const num2 = String((typeof number2 === 'string' ? +number2 : number2) || 0);

		const num1_decimal = num1.split('.')?.[1] || '';
		const num2_decimal = num2.split('.')?.[1] || '';

		const bigDecimalLenght = num1_decimal.length > num2_decimal.length ? num1_decimal.length : num2_decimal.length;

		const fixedLength = bigDecimalLenght + 1;

		let result = String(+num1 + +num2);
		const result_decimal = result.split('.')?.[1] || '';
		if (result_decimal.length > fixedLength) result = String((+result).toFixed(fixedLength));

		return +result || 0;
	};

	static subtract = (number1: number | string, number2: number | string) => {
		const num1 = String((typeof number1 === 'string' ? +number1 : number1) || 0);
		const num2 = String((typeof number2 === 'string' ? +number2 : number2) || 0);

		const num1_decimal = num1.split('.')?.[1] || '';
		const num2_decimal = num2.split('.')?.[1] || '';

		const bigDecimalLenght = num1_decimal.length > num2_decimal.length ? num1_decimal.length : num2_decimal.length;

		const fixedLength = bigDecimalLenght;

		let result = String(+num1 - +num2);
		const result_decimal = result.split('.')?.[1] || '';
		if (result_decimal.length > fixedLength) result = String((+result).toFixed(fixedLength));

		return +result || 0;
	};

	static multipy = (number1: number | string, number2: number | string) => {
		const num1 = String((typeof number1 === 'string' ? +number1 : number1) || 0);
		const num2 = String((typeof number2 === 'string' ? +number2 : number2) || 0);

		const num1_decimal = num1.split('.')?.[1] || '';
		const num2_decimal = num2.split('.')?.[1] || '';

		const fixedLength = num1_decimal.length + num2_decimal.length;

		let result = String(+num1 * +num2);
		const result_decimal = result.split('.')?.[1] || '';
		if (result_decimal.length > fixedLength) result = String((+result).toFixed(fixedLength));

		return +result || 0;
	};

	static divide = (number1: number | string, number2: number | string) => {
		const num1 = String((typeof number1 === 'string' ? +number1 : number1) || 0);
		const num2 = String((typeof number2 === 'string' ? +number2 : number2) || 0);

		if (+num1 === 0 || +num2 === 0) return 0;

		const num1_decimal = num1.split('.')?.[1] || '';
		const num2_decimal = num2.split('.')?.[1] || '';

		const fixedLength = num1.length + num1.length + 1;

		let result = String(+num1 / +num2);
		const result_decimal = result.split('.')?.[1] || '';
		if (result_decimal.length > fixedLength) result = String((+result).toFixed(fixedLength));

		return +result || 0;
	};
}
