/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */

export function recursionRouter (userRouter = [], allRouter = []) {
    var realRoutes = allRouter
        .filter(item => userRouter.includes(item.name))
        .map(item => ({
            ...item,
            children: item.children
                ? recursionRouter(userRouter, item.children)
                : null
        }))
    return realRoutes
}

/**
 *
 * @param {Array} routes 用户过滤后的路由
 *
 * 递归为所有有子路由的路由设置第一个children.path为默认路由
 */
export function setDefaultRoute (routes) {
    routes.forEach((v, i) => {
        if (v.children && v.children.length > 0) {
            v.redirect = { name: v.children[0].name }
            setDefaultRoute(v.children)
        }
    })
}
/**
 * @param {Array} routes  用户tree转组件
 * 
 */
export function transformTree (routes) {
    var arr=[];
    routes.map((val,index)=>{
        let component=(resolve)=>require(['@/pages'+val['component']],resolve)
        var obj={
            ...val,
            'component':component,
            children: val.children?transformTree(val["children"]):[]
        }

        arr.push(obj)
    })
    return arr
}