import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as S from './styled';
import CollectionPreview from '../collection-preview';
import WithSpinner from '../with-spinner';
import {
	selectCollectionsForPreview,
	selectIsCollectionsLoaded,
} from '../../redux/shop/selectors';

const CollectionsOverview = ({ collections }) => {
	return (
		<S.CollectionsOverview>
			{collections.map(({ id, ...others }) => (
				<CollectionPreview key={id} {...others} />
			))}
		</S.CollectionsOverview>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
	isLoaded: (state) => selectIsCollectionsLoaded(state),
});

export default connect(mapStateToProps)(WithSpinner(CollectionsOverview));
