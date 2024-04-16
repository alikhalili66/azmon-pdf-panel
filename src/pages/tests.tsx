import { MainTemplate } from '@template';
import { LabReception } from '@page/lab-reception';
import { page_labReception } from '@context';

const NextPage = () => {
	return <LabReception />;
};

export default NextPage;

NextPage.getLayout = function getLayout(page) {
	return (
		<MainTemplate>
			<page_labReception.Provider>{page}</page_labReception.Provider>
		</MainTemplate>
	);
};
