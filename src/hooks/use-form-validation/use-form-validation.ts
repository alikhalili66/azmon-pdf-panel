/* eslint-disable react-hooks/exhaustive-deps */

type Data = {
	[key: string]: {
		isValid: boolean | any;
		[key: string]: any;
	};
};

type Config = { isValidProperty?: string };

export const useFormValidation = (data: Data, config?: Config) => {
	const isValidProperty = config?.isValidProperty || 'isValid';

	const invalidItems: { [key: string]: any }[] = Object.keys(data)
		.filter((key) => !data[key][isValidProperty])
		.map((invalidKey) => ({ name: invalidKey, ...data[invalidKey] }));

	const validItems = Object.keys(data)
		.filter((key) => data[key][isValidProperty])
		.map((validKey) => ({ name: validKey, ...data[validKey] }));

	const isValidForm = invalidItems.length === 0;

	return { validItems, invalidItems, isValidForm };
};
