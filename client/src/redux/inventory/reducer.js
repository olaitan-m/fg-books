const INITIAL_STATE = {
	sections: [
		{
			title: 'bibles',
			img: 'https://i.ibb.co/yPscNcf/bibles.jpg',
			orientation: 'square',
			id: 1,
			linkUrl: 'shop/bibles',
		},
		{
			title: 'prophecy',
			img: 'https://i.ibb.co/0s6YMs9/prophecy.jpg',
			orientation: 'vertical',
			id: 2,
			linkUrl: 'shop/prophecy',
		},
		{
			title: 'devotionals',
			img: 'https://i.ibb.co/2vwp96R/devotion.jpg',
			orientation: 'square',
			id: 3,
			linkUrl: 'shop/devotionals',
		},

		{
			title: 'prayer',
			img: 'https://i.ibb.co/PFv2vs6/prayer.jpg',
			orientation: 'square',
			id: 4,
			linkUrl: 'shop/prayer',
		},
		{
			title: 'songs',
			img: 'https://i.ibb.co/L8Dsq2k/songs.jpg',
			orientation: 'square',
			id: 5,
			linkUrl: 'shop/songs',
		},
		{
			title: 'kids',
			img: 'https://i.ibb.co/yBk2Khq/Moses.jpg',
			orientation: 'horizontal',
			id: 6,
			linkUrl: 'shop/kids',
		},
	],
};

const inventoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default inventoryReducer;
