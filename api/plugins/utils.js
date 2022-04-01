const isExistName = async req => {
	let findOption = { name: req.body.name || '' };
	const modelName = req.Model.modelName;

	if (modelName === 'Category') {
		findOption.parent = req.body.parent;
	}

	const exsitName = await req.Model.find(findOption);
	if (exsitName.length !== 0) {
		console.log(modelName + ': 名称已存在');
		return true;
	}

	return false;
};

module.exports = { isExistName };
