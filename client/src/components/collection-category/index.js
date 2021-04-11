import { connect } from 'react-redux';
import * as S from './styled';
import CollectionItem from '../collection-item';
import WithSpinner from '../with-spinner';
import {
	selectCollection,
	selectIsCollectionsLoaded,
} from '../../redux/shop/selectors';

const CollectionCategory = ({ collection }) => {
	const { title, items } = collection;
	return (
		<S.CollectionCategory>
			<h1 className='title'>{title}</h1>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</S.CollectionCategory>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
	isLoaded: selectIsCollectionsLoaded(state),
});

export default connect(mapStateToProps)(WithSpinner(CollectionCategory));
