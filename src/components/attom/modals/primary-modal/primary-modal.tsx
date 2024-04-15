import { PureModal, PureModalProps } from '@attom';

export const PrimaryModal = ({
	children,

	...props
}: PureModalProps) => {
	return <PureModal {...props}>{children}</PureModal>;
};

export default PrimaryModal;
