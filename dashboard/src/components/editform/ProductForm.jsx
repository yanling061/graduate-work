import { useEffect, useState } from 'react';
import './editform.scss';
import http from '../../http';

const EditForm = ({ id, type }) => {
	const [parent, setParent] = useState({});
	const [name, setName] = useState('');
	const [cate, setCate] = useState({});
	const [products, setProductss] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const res = await http.get('products');
				setProductss(res.data);
			} catch (error) {}
		};

		getCategories();
	}, []);

	useEffect(() => {
		const getOneCategory = async () => {
			try {
				const res = await http.get(`products/${id}`);
				setCate(Object.assign(cate, res.data));
				setName(cate.name);
				setParent(cate.parent);
			} catch (error) {}
		};
		id && getOneCategory();
	}, [id, cate]);

	const handleCreate = async () => {
		try {
			const res = await http.post(
				'products',
				parent ? { parent, name } : { name }
			);
		} catch (error) {}
	};

	const handleEdit = async () => {
		try {
			const res = await http.put(
				'products/' + id,
				parent ? { parent, name } : { name }
			);
		} catch (error) {}
	};

	return (
		<div className='editForm'>
			<div className='title'>{id ? '编辑' : '新建'}产品</div>
			<form onSubmit={id ? handleEdit : handleCreate}>
				<div className='parentCate'>
					<p>产品分类</p>
					<select value={parent.id} onChange={e => setParent(e.target.value)}>
						<option value=''>无</option>
						{products.map(product => (
							<option value={product._id} key={product._id}>
								{product.name}
							</option>
						))}
					</select>
				</div>
				<div className='name'>
					<p>名称</p>
					<input
						type='text'
						required
						value={name}
						placeholder='请输入产品名称...'
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className='button'>
					<button type='submit'>确认{id ? '修改' : '新建'}</button>
				</div>
			</form>
		</div>
	);
};

export default EditForm;
