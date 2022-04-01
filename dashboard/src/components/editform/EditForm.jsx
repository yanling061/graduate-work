import './editform.scss';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';

const EditForm = ({ id, type }) => {
	const intialUppercase = word => {
		let init = String(word).split('')[0].toUpperCase();
		word = String(word).slice(1);
		init = init.concat(word);
		return init;
	};

	type = intialUppercase(type);

	switch (type) {
		case 'Category':
			return <CategoryForm id={id} />;
		case 'Product':
			return <ProductForm id={id} />;
		case 'User':
			return <ProductForm id={id} />;
		default:
			break;
	}
};

export default EditForm;
