export class Reader {
	static trimToBase64 = (base64Img = '') => {
		return (base64Img || '')?.replace(/^data:image\/[a-z]+;base64,/, '');
	};

	static imageToBase64 = (e: any, cb: (result: any, base64: string, config: { size: number; type: any }) => any) => {
		const image = e?.target?.files[0] ?? null;
		if (!image) return;

		const trimToBase64 = (base64Img) => {
			return base64Img?.replace(/^data:image\/[a-z]+;base64,/, '');
		};

		const [size, type] = [image.size || 0, image.type || ''];

		const reader = new FileReader();
		reader.onloadend = () => {
			const base64 = trimToBase64(reader.result);
			return cb ? cb(reader.result, base64, { size, type }) : null;
		};
		reader.readAsDataURL(image);
	};

	static fileToBase64 = (e: any, cb: (result: any, base64: string, config: { size: number; type: any; name: any }) => any) => {
		const file = e?.target?.files[0];
		if (!file) return;

		const trimToBase64 = (base64Img) => {
			return base64Img?.replace(/^data:image\/[a-z]+;base64,/, '');
		};

		const size = file.size || 0;
		const name = file.name || '';
		const type = file.name.split('.')[1] || '';

		const reader = new FileReader();
		reader.onloadend = () => {
			const base64 = trimToBase64(reader.result);
			return cb ? cb(reader.result, base64, { size, type, name }) : null;
		};
		reader.readAsDataURL(file);
	};

	static fileToText = (e: any, cb: (result: any) => any) => {
		const file = e?.target?.files[0] ?? null;
		if (!file) return;

		const reader = new FileReader();

		reader.onload = () => {
			const result = reader.result;
			return cb ? cb(result) : null;
		};

		reader.readAsText(file, 'utf-8');
	};
}
