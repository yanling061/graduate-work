import { isExistName } from "../../plugins/utils"


//新增一条数据
const createResourceItem = (req) =>{
  //新增前查询是否有相同名称存在
  if(await isExistName(req)){
    res.send({error: 1, msg: '名称已存在'})
    return;
  }

  const model = await req.Model.create(req.body);
  return model;
}

//获取资源列表
const getResourceList = req => {

}