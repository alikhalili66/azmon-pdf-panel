declare type API_example_getAll_item = {
	[key: string]: any;
};

declare type API_example_getById = {
	[key: string]: any;
};

declare type API_reception_result_test = {
	[key: string]: any;

	Order: number;
	Name: string;
	Result: string;
	Unit: string;
	Method: string;
	NormalRange: string;
	Status: string;
	Comment: string;
	Comment2: string;
	TestCode: string;
	SampleType: string;
	TestId: string;
	RelatedTestId: string;
};

declare type API_reception_result = {
	[key: string]: any;

	Section: string;
	Tests: API_reception_result_test[];
};

declare type API_reception = {
	[key: string]: any;

	FullName: string;
	FName: string;
	LName: string;
	FNameEn: string;
	LNameEn: string;
	Airline: string;
	Passport: string;
	Sex: string;
	BirthDate: string;
	NationalCode: string;
	Phone: string;
	ReceptionCode: string;
	ReceptionDate: string;
	ResultDate: string;
	RemainingAmount: number;
	DoctorName: string;
	DoctorCode: string;
	UserId: string;
	UserName: string;
	LabId: string;
	LabName: string;
	LabMobile: string;
	Result: API_reception_result[];
};

declare type Reception = API_reception;
