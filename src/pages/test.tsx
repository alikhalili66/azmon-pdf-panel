import { PanelTemplate } from '@template';
import { UserReception } from '@page/user-reception';
import { page_userReception } from '@context';

const NextPage = () => {
	return <UserReception />;
};

export default NextPage;

NextPage.getLayout = function getLayout(page) {
	return (
		<PanelTemplate>
			<page_userReception.Provider>{page}</page_userReception.Provider>
		</PanelTemplate>
	);
};
