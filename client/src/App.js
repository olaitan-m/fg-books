import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/header';
import { selectCurrentUser } from './redux/user/selectors';
import { checkUserSession } from './redux/user/actions';
import Spinner from './components/spinner';
import ErrorBoundary from './components/error-boundary';
/* import { addCollectionAndDocuments } from './firebase'; // Comment or Uncommment to seed database */
/* import { selectCollectionsForPreview } from './redux/shop/selectors'; // Comment or Uncommment to seed database */

const HomePage = lazy(() => import('./pages/home-page'));
const ShopPage = lazy(() => import('./pages/shop-page'));
const Account = lazy(() => import('./pages/account'));
const CheckoutPage = lazy(() => import('./pages/checkout'));

const App = ({ checkUserSession, currentUser }) => {
	// Comment or Uncommment to seed database
	/* useEffect(() => {
		 addCollectionAndDocuments(
			'collections',
			props.collectionsArray.map(({ title, items }) => ({ title, items }))
		).then(console.log('loooooooog', 'data loaded!')); 
	}, []); */

	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div className='app'>
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense
						fallback={
							<div>
								<Spinner />
							</div>
						}
					>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route
							exact
							path='/account'
							render={() => (currentUser ? <Redirect to='/' /> : <Account />)}
						/>
						<Route exact path='/checkout' component={CheckoutPage} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	/* collectionsArray: selectCollectionsForPreview, // Comment or Uncommment to seed database */
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
