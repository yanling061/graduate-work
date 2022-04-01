export const postColumns = [
	{ field: '_id', headerName: 'ID', width: 180 },
	{ field: 'name', headerName: '类别名称', width: 250 },
	{
		field: 'parent',
		headerName: '上级类别',
		width: 250,
		renderCell: params => (params.row.parent ? params.row.parent.name : ''),
	},
	{ field: 'createdAt', headerName: '创建时间', width: 180 },
	{ field: 'updatedAt', headerName: '更新时间', width: 180 },
];
