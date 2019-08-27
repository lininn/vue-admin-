export default {
    userLogin(req){
        console.log(req);
      return {"message":"获取token成功","code":1,"data":{"token":"admin"}}
    },
    userInfo:(req)=>{
        console.log('info',req)
        return {"code":1,"data":{"avatar":"https://randy168.com/1533262153771.gif",
        "name":"admin","roles":["admin"],
        "data":["order-manage","order-list","product-manage","product-list","review-manage",
        "return-goods","goods","goods-list","goods-classify","permission","user-manage",
        "role-manage","menu-manage"]}}
     },
     getUserTree:(req)=>{
      console.log('info',req)
      return {"code" : 1,data:[
        {
            "path": "/order",
            "component": "/order-manage/index.vue",
            "name": "order-manage",
            "meta": {
                "name": "订单管理",
                "icon": "example"
            },
            "children": [
                {
                    "path": "list",
                    "name": "order-list",
                    "component": "/order-manage/order-list/index.vue",
                    "meta": {
                        "name": "订单列表",
                        "icon": "table"
                    }
                },
                {
                  "path": "product",
                  "name": "product-manage",
                  "component": "/order-manage/product-manage",
                  "meta": {
                      "name": "生产管理",
                      "icon": "user"
                  },
                  "children": [
                      {
                          "path": "list",
                          "name": "product-list",
                          "component": "/order-manage/product-manage/production-list",
                          "meta": {
                              "name": "生产列表",
                              "icon": "table"
                          }
                      },
                      {
                          "path": "review",
                          "name": "review-manage",
                          "component": "/order-manage/product-manage/review-manage",
                          "meta": {
                              "name": "审核管理",
                              "icon": "eye"
                          }
                      }
                  ]
              },
                {
                    "path": "returnGoods",
                    "name": "return-goods",
                    "component": "/order-manage/return-goods",
                    "meta": {
                        "name": "退货管理",
                        "icon": "nested"
                    }
                }
            ]
        },
        {
            "path": "/goods",
            "component": "/goods-manage/index.vue",
            "name": "goods",
            "meta": {
                "name": "产品管理",
                "icon": "user"
            },
            "children": [
                {
                    "path": "list",
                    "name": "goods-list",
                    "component": "/goods-manage/goods-list",
                    "meta": {
                        "name": "产品列表",
                        "icon": "table"
                    }
                },
                {
                    "path": "classify",
                    "name": "goods-classify",
                    "component": "/goods-manage/goods-classify",
                    "meta": {
                        "name": "产品分类",
                        "icon": "tree"
                    }
                }
            ]
        },
        // {
        //     "path": "/permission",
        //     "component": "/permission",
        //     "name": "permission",
        //     "meta": {
        //         "name": "权限管理",
        //         "icon": "table"
        //     },
        //     "children": [
        //         {
        //             "path": "user",
        //             "name": "user-manage",
        //             "component": "/permission/user-manage",
        //             "meta": {
        //                 "name": "用户管理",
        //                 "icon": "table"
        //             }
        //         },
        //         {
        //             "path": "role",
        //             "name": "role-manage",
        //             "component": "/permission/role-manage",
        //             "meta": {
        //                 "name": "角色管理",
        //                 "icon": "eye"
        //             }
        //         },
        //         {
        //             "path": "menu",
        //             "name": "menu-manage",
        //             "component": "/permission/menu-manage",
        //             "meta": {
        //                 "name": "菜单管理",
        //                 "icon": "tree"
        //             }
        //         }
        //     ]
        // }
    ]}
    }
}
