import './list.scss';
import ProductDatatable from '../../components/datatable/ProductDatatable';

const List = () => {
	return (
		<div className='list'>
			<div className='listContainer'>
				<ProductDatatable />
			</div>
		</div>
	);
};

export default List;
