const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"商品类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShangpin"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"礼品管理",
                        "menuJump":"列表",
                        "tableName":"lipin"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"礼品兑换管理",
                        "menuJump":"列表",
                        "tableName":"lipinduihuan"
                    }
                ],
                "menu":"礼品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商店管理",
                        "menuJump":"列表",
                        "tableName":"shangdian"
                    }
                ],
                "menu":"商店管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品管理",
                        "menuJump":"列表",
                        "tableName":"shangpin"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"消费管理",
                        "menuJump":"列表",
                        "tableName":"xiaofei"
                    }
                ],
                "menu":"商品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"积分记录管理",
                        "menuJump":"列表",
                        "tableName":"jifen"
                    }
                ],
                "menu":"积分记录管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"礼品管理",
                        "menuJump":"列表",
                        "tableName":"lipin"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"礼品兑换管理",
                        "menuJump":"列表",
                        "tableName":"lipinduihuan"
                    }
                ],
                "menu":"礼品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"商品管理",
                        "menuJump":"列表",
                        "tableName":"shangpin"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"消费管理",
                        "menuJump":"列表",
                        "tableName":"xiaofei"
                    }
                ],
                "menu":"商品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"积分记录管理",
                        "menuJump":"列表",
                        "tableName":"jifen"
                    }
                ],
                "menu":"积分记录管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"员工",
        "tableName":"yuangong"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"礼品管理",
                        "menuJump":"列表",
                        "tableName":"lipin"
                    }
					,
					{
                        "buttons":[
                            "查看"
                        ],
                        "menu":"礼品兑换管理",
                        "menuJump":"列表",
                        "tableName":"lipinduihuan"
                    }
                ],
                "menu":"礼品管理"
            }
            ,{
                "child":[
					{
                        "buttons":[
                            "查看"
                        ],
                        "menu":"消费管理",
                        "menuJump":"列表",
                        "tableName":"xiaofei"
                    }
                ],
                "menu":"消费管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"积分记录管理",
                        "menuJump":"列表",
                        "tableName":"jifen"
                    }
                ],
                "menu":"积分记录管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
