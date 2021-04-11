import { connect } from 'react-redux';
import * as S from './styled';
import CustomButton from '../custom-button';
import { addItem } from '../../redux/cart/actions';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<S.CollectionItem imageUrl={imageUrl}>
			<div className='background'></div>
			<div className='wrapper'>
				<p className='description'>
					{name}
					<span>${price}</span>
				</p>
				<div className='button-container'>
					<CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
				</div>
			</div>
		</S.CollectionItem>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
