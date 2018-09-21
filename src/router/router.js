export const homeRouter = {
    path: '/',
    name: 'home',
    component: resolve => {
      require(['../pages/home.vue'], resolve);
    }
  };
  
  
  export const error404 = {
    path: '*',
    name: 'error404',
    redirect:'/',
    component: resolve => {
      require(['../pages/home.vue'], resolve);
    }
  };
  
  export const routers = [
    error404,
    homeRouter
  ];
  