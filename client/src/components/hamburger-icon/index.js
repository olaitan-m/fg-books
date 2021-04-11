import * as S from './styled';

const HamburgerIcon = ({
	open,
	setOpen,
	dontShowOnLargeViewPort,
	...restProps
}) => {
	return (
		<S.HamburgerIcon
			{...restProps}
			open={open}
			onClick={setOpen}
			dontShowOnLargeViewPort={dontShowOnLargeViewPort}
		>
			<div className='line'></div>
			<div className='line'></div>
			<div className='line'></div>
		</S.HamburgerIcon>
	);
};

export default HamburgerIcon;
