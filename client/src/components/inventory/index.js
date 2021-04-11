import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as S from './styled';
import InventoryItem from '../inventory-item';
import { selectInventorySections } from '../../redux/inventory/selectors';

const Inventory = ({ sections }) => {
	return (
		<S.Inventory>
			{sections.map(({ id, orientation, ...restProps }) => (
				<InventoryItem orientation={orientation} key={id} {...restProps} />
			))}
		</S.Inventory>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectInventorySections,
});

export default connect(mapStateToProps)(Inventory);
