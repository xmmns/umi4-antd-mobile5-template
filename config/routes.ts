/**
 * 路由配置
 * 更多路由请查询 https://umijs.org/zh-CN/docs/routing
 */
export default [
  { path: '/', redirect: '/list' },
  {
    path: '/list',
    title: '列表',
    component: '@/pages/list/index',
  },
  {
    path: '/*',
    component: '@/pages/404',
  },
  { path: '/**/*', redirect: '/404' },
];
