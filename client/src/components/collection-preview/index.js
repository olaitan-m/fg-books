import { withRouter } from 'react-router-dom';
import * as S from './styled';
import CollectionItem from '../collection-item';

const CollectionPreview = ({ title, items, routeName, history, match }) => {
	return (
		<S.CollectionPreview className='collection-preview'>
			<h1
				className='title'
				onClick={() => history.push(`${match.path}/${routeName}`)}
			>
				{title}
			</h1>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</S.CollectionPreview>
	);
};

export default withRouter(CollectionPreview);
