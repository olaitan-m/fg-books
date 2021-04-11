import { withRouter } from 'react-router-dom';
import * as S from './styled';

const InventoryItem = ({
	title,
	img,
	linkUrl,
	history,
	match,
	orientation,
	...restProps
}) => {
	return (
		<S.InventoryItem
			orientation={orientation}
			{...restProps}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
			img={img}
		>
			<div className='background' />
			<div className='description'>
				<p>{title.toUpperCase()}</p>
			</div>
		</S.InventoryItem>
	);
};

export default withRouter(InventoryItem);
