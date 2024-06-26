export class Price {
	//
	static seperate = (value: number | string) => {
		if (isNaN(Number(value))) return value;

		const valueArray = String(value).split('.');

		valueArray[0] = valueArray[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

		return valueArray.join('.');
	};
}
