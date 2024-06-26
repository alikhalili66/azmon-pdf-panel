export const regex = {
	// auth
	token: /^.{30,}$/,
	// public
	postalCode: /^\d{10}$/,
	receptionCode: /^\d{2,}$/,
	phone: /^\d{11}$/,
	cellphone: /^09\d{9}$/,
	password: /^.{3,}$/,
	username: /^.{3,}$/,
	name: /^.{3,}$/,
	lastName: /^.{1,}$/,
	address: /^.{5,}$/,
	otp: /^\d{6}$/,
	date: /^.{8,}$/,
	image: /^.{1,}$/,
	email:
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	//
	labId: /^\d{1,50}$/,
};
