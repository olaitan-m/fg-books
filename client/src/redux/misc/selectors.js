import { createSelector } from 'reselect';

const selectMisc = (state) => state.misc;

export const selectMenuHidden = createSelector(
	[selectMisc],
	(misc) => misc.menuHidden
);
