import Vue from 'vue'
import VueRouter, { RawLocation } from 'vue-router'
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import store from '@/store'
import { generateRoutes } from './permission'

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: RawLocation) {
  return (<any>(routerPush.call(this, location))).catch((error: any) => error)
}

Vue.use(VueRouter)

// 公共路由，全部角色均具有该部分路由权限
const routes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: Login
  },
  {
    path: '/',
    component: Home,
    redirect: '/dashboard',
    name: '首页',
    iconCls: 'el-icon-s-help',
    leaf: false,
    children: [
      {
        path: '/dashboard',
        name: '工作台',
        component: () => import('../views/Dashboard/index.vue')
      }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'el-icon-star-on',
    leaf: true,
    hidden: true,  // 路由是否在侧边导航栏中显示
    children: [

      {
        name: '404页面',
        path: '/404',
        component: () => import('../views/ErrorPage/404.vue')
      }
    ]
  }
]

// 需根据权限进行动态生成的路由
const asyncRoutes = [
  {
    path: '/',
    component: Home,
    name: '业务处理',
    iconCls: 'el-icon-s-data',
    leaf: false,
    children: [
      {
        name: '投诉事件',
        iconCls: 'el-icon-help',
        path: '/Complaints',
        component: () => import('../views/H-Complaints/index.vue'),
        
      },
      {
        name: '不良事件',
        iconCls: 'el-icon-bicycle',
        path: '/Ade',
        component: () => import('../views/H-Ade/index.vue'),
       
      },
      {
        name: '医患沟通记录',
        iconCls: 'el-icon-bicycle',
        path: '/Connect',
        component: () => import('../views/H-Connect/index.vue'),
      
      }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '统计分析',
    iconCls: 'el-icon-s-data',
    leaf: false,
    children: [
      {
        name: '投诉类别与科室统计',
        iconCls: 'el-icon-help',
        path: '/Category',
        component: () => import('../views/H-Category/index.vue'),
        
      },
      {
        name: '被投诉医护人员统计',
        iconCls: 'el-icon-s-custom',
        path: '/Statistics',
        component: () => import('../views/H-Statistics/index.vue'),
        
      },
      {
        name: '患者基本信息统计',
        iconCls: 'el-icon-document',
        path: '/Basic',
        component: () => import('../views/H-Basic/index.vue'),
       
      },
      {
        name: '患者疾病信息统计',
        iconCls: 'el-icon-s-marketing',
        path: '/Patient',
        component: () => import('../views/H-Patient/index.vue'),
      
      },
      {
        name: '科室及投诉类别词云统计',
        iconCls: 'el-icon-chat-line-square',
        path: '/Word',
        component: () => import('../views/H-Word/index.vue'),
       
      },
      {
        name: '投诉处理周期统计',
        iconCls: 'el-icon-aim',
        path: '/Cycle',
        component: () => import('../views/H-Cycle/index.vue'),
        
      },
    ]
  },
  {
    path: '/',
    component: Home,
    name: '文章管理',
    iconCls: 'el-icon-s-data',
    leaf: false,
    children: [
      {
        name: '文章列表',
        iconCls: 'el-icon-help',
        path: '/Articlelist',
        component: () => import('../views/H-Articlelist/index.vue'),
       
      },
      {
        name: '添加文章',
        iconCls: 'el-icon-help',
        path: '/Addarticle',
        component: () => import('../views/H-Addarticle/index.vue'),
      
      },
      {
        name: '栏目列表',
        iconCls: 'el-icon-help',
        path: '/Columnlist',
        component: () => import('../views/H-Columnlist/index.vue'),
       
      }
    ]
  },

  {
    path: '/',
    component: Home,
    name: '文件库',
    iconCls: 'el-icon-share',
    leaf: false,
    children: [
      {
        name: '文件列表',
        path: '/form',
        component: () => import('../views/H-Files/index.vue'),
       
      }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '角色权限',
    iconCls: 'el-icon-s-data',
    leaf: false,
    children: [
      {
        name: '员工管理',
        iconCls: 'el-icon-help',
        path: '/Staff',
        component: () => import('../views/H-Staff/index.vue'),
       
      },
      {
        name: '科室管理',
        iconCls: 'el-icon-help',
        path: '/Department',
        component: () => import('../views/H-Department/index.vue'),
        
      },
      {
        name: '角色管理',
        iconCls: 'el-icon-help',
        path: '/Role',
        component: () => import('../views/H-Role/index.vue'),
        
      },
      {
        name: '权限管理',
        iconCls: 'el-icon-help',
        path: '/Edit',
        component: () => import('../views/H-Edit/index.vue'),
       
      },
      // {
      //   name: '测试',
      //   iconCls: 'el-icon-help',
      //   path: '/a',
      //   component: () => import('../views/H-Files/a.vue'),
     
      // }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '用户管理',
    iconCls: 'el-icon-s-data',
    leaf: false,
    children: [
      {
        name: '个人信息',
        iconCls: 'el-icon-help',
        path: '/Personal',
        component: () => import('../views/H-Personal/index.vue'),
      
      },
      {
        name: '账户管理',
        iconCls: 'el-icon-help',
        path: '/Account',
        component: () => import('../views/H-Account/index.vue'),
      
      },
      {
        name: '消息通知',
        iconCls: 'el-icon-help',
        path: '/Notify',
        component: () => import('../views/H-Notify/index.vue'),
      
      }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '系统设置',
    iconCls: 'el-icon-s-data',
    leaf: false,
    children: [
      {
        name: '字典管理',
        iconCls: 'el-icon-help',
        path: '/Dictionaries',
        component: () => import('../views/H-Dictionaries/index.vue'),
        
      },
      {
        name: '邮箱及短信配置',
        iconCls: 'el-icon-help',
        path: '/Configure',
        component: () => import('../views/H-Configure/index.vue'),
      },
      {
        name: '基本设置',
        iconCls: 'el-icon-help',
        path: '/Technological',
        component: () => import('../views/H-Technological/index.vue'),
        
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',  // 重定向到404页面
    hidden: true
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

var flag = true  // 页面刷新标志
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('account');
    sessionStorage.removeItem('password');
    store.dispatch('app/ResetRouter');  // 全局路由tag重置
    flag = true
  }
  let admin = <String>sessionStorage.getItem('account');
  if (!admin && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    // 该处进行动态路由生成（当页面刷新时或首次进入该系统时，生成路由）
    if (flag && to.path !== '/login') {
      flag = false
      router['options'].routes = routes
      let generateAsyncRoutes = generateRoutes(asyncRoutes, <string>sessionStorage.getItem('account'))  // 根据登录角色生成动态路由
      router.addRoutes(generateAsyncRoutes)
      router['options'].routes = router['options'].routes.concat(generateAsyncRoutes)
      next({ ...to, replace: true })  // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
    } else {
      // 以下部分为向全局变量中添加路由历史，形成tag标签
      if (to.path !== '/login') {
        let newPath = {
          name: to.name,
          path: to.fullPath
        }
        store.dispatch("app/AddRouter", newPath)  // 向全局变量中添加路由
      }
      next()
    }
  }
});

export default router
