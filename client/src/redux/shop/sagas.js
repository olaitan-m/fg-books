import { takeLatest, call, put, all } from 'redux-saga/effects';
import shopActionTypes from './types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './actions';
import { firestore, convertCollectsionSnapshotToMap } from '../../firebase';

function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectsionSnapshotToMap,
			snapshot
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

function* fetchCollectionsStart() {
	yield takeLatest(
		shopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}
