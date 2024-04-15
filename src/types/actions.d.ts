declare type Action_callbacks = {
	okCB?: (res?: any) => any;
	failCB?: (res?: any) => any;
	statusChangeCB?: (status: Service_status) => any;
};
