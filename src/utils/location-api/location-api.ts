export class locationAPI {
	//----------* Get Current Poistion *----------//
	static getCurrentPosition = (options: PositionOptions = { timeout: 5000 }) =>
		new Promise((resolve, reject) => {
			if (!navigator?.geolocation?.getCurrentPosition) return reject('[GeoLocation] - getCurrentPosition Method Not Support');

			navigator.geolocation.getCurrentPosition(
				(position) => resolve(position),
				(err) => reject(err),
				options,
			);
		});
}
