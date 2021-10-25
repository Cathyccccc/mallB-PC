const roleRoutesName = {
  coustomer: [
    {
      name: 'product',
    },
    {
      name: 'productList',
    },
    {
      name: 'productAdd',
    },
  ],
  admin: [
    {
      name: 'product',
    },
    {
      name: 'productList',
    },
    {
      name: 'productAdd',
    },
    {
      name: 'category',
    },
  ],
};

// 重点：鉴权的实现
export default function getFilterRoute(role, routes) {
  const allowRoutesName = roleRoutesName[role].map((item) => item.name);
  const resultRoutes = routes.filter((route) => {
    const obj = route;
    // 第一层路由存在权限路由
    if (allowRoutesName.indexOf(route.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((child) => allowRoutesName.indexOf(child.name) !== -1);
      return true;
    }
    return true;
  });
  return resultRoutes;
}
