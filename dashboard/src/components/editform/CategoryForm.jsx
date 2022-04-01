import { useEffect, useState } from 'react';
import './editform.scss';
import http from '../../http';
import { useNavigate } from 'react-router-dom';

const CategoryForm = ({ id }) => {
	const [parent, setParent] = useState({});
	const [name, setName] = useState('');
	const [cate, setCate] = useState({});
	const [categories, setCategories] = useState([]);
	let navigate = useNavigate();

	useEffect(() => {
		const getCategories = async () => {
			try {
				const res = await http.get('categories');
				setCategories(res.data);
			} catch (error) {}
		};

		getCategories();
	}, []);

	useEffect(() => {
		const getOneCategory = async () => {
			try {
				const res = await http.get(`categories/${id}`);
				setCate(Object.assign(cate, res.data));
				setName(cate.name);
				setParent(Object.assign(parent, cate.parent));
			} catch (error) {}
		};
		id && getOneCategory();
	}, [id, cate, parent]);

	const handleCreate = async e => {
		e.preventDefault();
		try {
			const res = await http.post(
				'categories',
				JSON.stringify(parent) === '{}' ? { name } : { parent, name }
			);
			if (res.status === 200) {
				navigate('/category');
			}
		} catch (error) {}
	};
	const handleEdit = async e => {
		e.preventDefault();
		try {
			const res = await http.put('categories/' + id, { parent, name });
			if (res.status === 200) {
				navigate('/category');
			}
		} catch (error) {}
	};

	return (
		<div className='editForm' n>
			<div className='title'>{id ? '编辑' : '新建'}分类</div>
			<form onSubmit={id ? handleEdit : handleCreate}>
				<div className='parentCate'>
					<p>上级类别</p>
					<select value={parent.id} onChange={e => setParent(e.target.value)}>
						{categories.map(category => (
							<option value={category._id} key={category._id}>
								{category.name}
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
						placeholder='请输入类别名称...'
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

export default CategoryForm;
