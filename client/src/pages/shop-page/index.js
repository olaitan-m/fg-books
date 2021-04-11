import { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as S from './styled';
import { fetchCollectionsStart } from '../../redux/shop/actions';
import Spinner from '../../components/spinner';

const CollectionsOverview = lazy(() =>
	import('../../components/collections-overview')
);
const CollectionCategory = lazy(() =>
	import('../../components/collection-category')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<S.ShopPage>
			<Suspense
				fallback={
					<div>
						<Spinner />
					</div>
				}
			>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverview}
				></Route>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionCategory}
				></Route>
			</Suspense>
		</S.ShopPage>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
