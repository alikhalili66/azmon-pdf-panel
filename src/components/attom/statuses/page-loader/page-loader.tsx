import { ContentLoader, ContentLoaderProps } from '@attom';

export const PageLoader = ({ ...props }: ContentLoaderProps) => {
	return <ContentLoader boxPosition='fixed' boxBgColor='bg-[#fff8]' {...props} />;
};

PageLoader;
