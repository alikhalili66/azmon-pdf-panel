import { PanelTemplate } from '@template';
import { LabReception } from '@page/lab-reception';
import { page_labReception } from '@context';

const NextPage = () => {
	return <LabReception />;
};

export default NextPage;

NextPage.getLayout = function getLayout(page) {
	return (
		<PanelTemplate>
			<page_labReception.Provider>{page}</page_labReception.Provider>
		</PanelTemplate>
	);
};
