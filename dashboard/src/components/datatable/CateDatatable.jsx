import { Link } from 'react-router-dom';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { postColumns as columns } from './datatablesource';
import { useEffect, useState } from 'react';
import http from '../../http';

const CateDatatable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await http.get('categories');
			setData(res.data);
		};
		fetchCategories();
	}, []);

	const handleDelete = id => {
		setData(data.filter(item => item._id !== id));
	};

	const colums = [{}];

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

export default CateDatatable;
