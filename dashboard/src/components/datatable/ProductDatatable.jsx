import { Link } from 'react-router-dom';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import http from '../../http';

const ProductDatatable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await http.get('products');
			setData(res.data);
		};
		fetchCategories();
	}, []);

	const handleDelete = id => {
		setData(data.filter(item => item._id !== id));
	};

	const columns = [
		{ field: '_id', headerName: 'ID', width: 100 },
		{ field: 'name', headerName: '产品名称', width: 180 },
		{
			field: 'img',
			headerName: '图片',
			width: 100,
			renderCell: params => {
				return <img src={params.row.img} width='50' />;
			},
		},
		{
			field: 'categories',
			headerName: '类别',
			width: 100,
			renderCell: params => (params.row.parent ? params.row.parent.name : ''),
		},
		{ field: 'degree', headerName: '新旧程度', width: 150 },
		{ field: 'price', headerName: '价格(元)', width: 100 },
		{ field: 'createdAt', headerName: '创建时间', width: 150 },
		{ field: 'updatedAt', headerName: '更新时间', width: 150 },
	];

	const actionColumn = [
		{
			field: 'action',
			headerName: '操作',
			sortable: false,
			width: 180,
			renderCell: params => {
				return (
					<div className='cellAction'>
						<Link to={`edit/${params.row._id}`} style={{ textDecoration: 'none' }}>
							<div className='editButton'>编辑</div>
						</Link>
						<div className='deleteButton' onClick={e => handleDelete(params.row._id)}>
							删除
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div className='datatable'>
			<DataGrid
				className='datagrid'
				rows={data}
				columns={columns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default ProductDatatable;
