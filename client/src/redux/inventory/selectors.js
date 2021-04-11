import { createSelector } from 'reselect';

const selectInventory = (state) => state.inventory;

export const selectInventorySections = createSelector(
	selectInventory,
	(inventory) => inventory.sections
);
