import { MainTemplate } from '@template';
import { Home } from '@page/home';
import { page_home } from '@context';

const NextPage = () => {
	return <Home />;
};

export default NextPage;

NextPage.getLayout = function getLayout(page) {
	return (
		<MainTemplate>
			<page_home.Provider>{page}</page_home.Provider>
		</MainTemplate>
	);
};
