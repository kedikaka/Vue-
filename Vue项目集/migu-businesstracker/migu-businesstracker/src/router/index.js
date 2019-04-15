import Vue from 'vue'
import Router from 'vue-router'
import '../assets/js.cookie.js'

// import HelloWorld from '@/components/HelloWorld'

import Dashboard from '@/components/layout/Dashboard'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'


import Login from '@/views/admin/Login'
import Register from '@/views/admin/Register'

import Home from '@/views/Home'


import AdminCreate from '@/views/admin/Create'
import AdminUpdate from '@/views/admin/Update'
import AdminList from '@/views/admin/List'
import AdminDetail from '@/views/admin/Detail'
import AdminChangePassword from '@/views/admin/ChangePassword'
import AdminCard from '@/views/admin/Card'
import AdminAvatar from '@/views/admin/Avatar'
import AdminUserSelect from '@/views/admin/UserSelect'

import ProjectRoleCreate from '@/views/projectRole/Create'
import ProjectRoleUpdate from '@/views/projectRole/Update'
import ProjectRoleList from '@/views/projectRole/List'

import ProjectCreate from '@/views/project/Create'
import ProjectUpdate from '@/views/project/Update'
import ProjectList from '@/views/project/List'
import ProjectDetail from '@/views/project/Detail'
import ProjectUserList from '@/views/project/UserList'
import ProjectUserCreate from '@/views/project/UserCreate'

import ProcessCreate from '@/views/process/Create'
import ProcessUpdate from '@/views/process/Update'
import ProcessList from '@/views/process/List'
import ProcessDetail from '@/views/process/Detail'
import ProcessUserList from '@/views/process/UserList'
import ProcessUserCreate from '@/views/process/UserCreate'

import StepCreate from '@/views/step/Create'
import StepUpdate from '@/views/step/Update'
import StepList from '@/views/step/List'
import StepDetail from '@/views/step/Detail'
import StepUserList from '@/views/step/UserList'
import StepUserCreate from '@/views/step/UserCreate'
import StepMessage from '@/views/step/Message'

import ResourceList from '@/views/resource/List'
import ResourceDetailList from '@/views/resource/DetailList'

import DocCreate from '@/views/doc/Create'
import DocUpdate from '@/views/doc/Update'
import DocDetail from '@/views/doc/Detail'

import FileCreate from '@/views/file/Create'
import FileDetail from '@/views/file/Detail'

import ImageCreate from '@/views/image/Create'
import ImageDetail from '@/views/image/Detail'

import Test from '@/views/test/Test'

import Main from '@/views/test/Main'
import About from '@/views/test/About'
import Bar from '@/views/test/Bar'



Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/admin/Login',
      name: '登陆',
      component: Login
    },
    {
      path: '/admin/Register',
      name: '注册',
      component: Register
    },

    {
      //默认页，加登陆校验
      path: '/',
      name: 'default',
      meta: {
        requireAuth: true
      },
      component: Dashboard,
      children: [{
          path: '/Home',
          name: '首页',
          meta: {
            requireAuth: true
          },
          component: Home
        },

      ],
    },

    {
      //用户模块
      path: '/admin',
      name: '用户',
      component: Dashboard,
      children: [{
          path: '/admin/Create',
          name: '新建用户',
          component: AdminCreate
        },
        {
          path: '/admin/Update',
          name: '修改用户',
          component: AdminUpdate
        },
        {
          path: '/admin/List',
          name: '用户列表',
          component: AdminList
        },
        {
          path: '/admin/Detail',
          name: '用户详情',
          component: AdminDetail
        },
        {
          path: '/admin/ChangePassword',
          name: '修改密码',
          component: AdminChangePassword
        },
        {
          path: '/admin/Card',
          name: '名片',
          component: AdminCard
        }
        
      ],
    },

    {
      path: '/admin/Avatar',
      name: '名片',
      component: AdminAvatar
    },
    {
      path: '/admin/UserSelect',
      name: '名片',
      component: AdminUserSelect
    },


    {
      //项目模块
      path: '/projectRole',
      name: '项目角色',
      component: Dashboard,
      children: [{
          path: '/projectRole/Create',
          name: '新建项目角色',
          component: ProjectRoleCreate
        },
        {
          path: '/projectRole/Update',
          name: '修改项目角色',
          component: ProjectRoleUpdate
        },
        {
          path: '/projectRole/List',
          name: '项目列表角色',
          component: ProjectRoleList
        }
      ],
    },

    {
      //项目模块
      path: '/project',
      name: '项目',
      component: Dashboard,
      children: [{
          path: '/project/Create',
          name: '新建项目',
          component: ProjectCreate
        },
        {
          path: '/project/Update',
          name: '修改项目',
          component: ProjectUpdate
        },
        {
          path: '/project/List',
          name: '项目列表',
          component: ProjectList
        },
        {
          path: '/project/Detail',
          name: '项目详情',
          component: ProjectDetail
        },
        {
          path: '/project/UserList',
          name: '项目成员列表',
          component: ProjectUserList
        },
        {
          path: '/project/UserCreate',
          name: '项目成员添加',
          component: ProjectUserCreate
        }
        
      ],
    },

    {
      //流程模块
      path: '/process',
      name: '流程',
      component: Dashboard,
      children: [{
          path: '/process/Create',
          name: '新建流程',
          component: ProcessCreate
        },
        {
          path: '/process/Update',
          name: '修改流程',
          component: ProcessUpdate
        },
        {
          path: '/process/List',
          name: '流程列表',
          component: ProcessList
        },
        {
          path: '/process/Detail',
          name: '流程详情',
          component: ProcessDetail
        },
        {
          path: '/process/UserList',
          name: '流程成员列表',
          component: ProcessUserList
        },
        {
          path: '/process/UserCreate',
          name: '流程成员添加',
          component: ProcessUserCreate
        }
      ],
    },


    {
      //步骤模块
      path: '/step',
      name: '步骤',
      component: Dashboard,
      children: [{
          path: '/step/Create',
          name: '新建步骤',
          component: StepCreate
        },
        {
          path: '/step/Update',
          name: '修改步骤',
          component: StepUpdate
        },
        {
          path: '/step/List',
          name: '步骤列表',
          component: StepList
        },
        {
          path: '/step/Detail',
          name: '步骤详情',
          component: StepDetail
        },
        {
          path: '/step/UserList',
          name: '步骤成员列表',
          component: StepUserList
        },
        {
          path: '/step/UserCreate',
          name: '步骤成员添加',
          component: StepUserCreate
        }
      ],
    },

    {
      //步骤消息
      path: '/step/Message',
      name: '步骤消息',
      component: StepMessage,
    },



    {
      //资源模块
      path: '/resource',
      name: '资源',
      component: Dashboard,
      children: [{
          path: '/resource/List',
          name: '资源列表',
          component: ResourceList
        },
        {
          path: '/resource/DetailList',
          name: '指定资源列表',
          component: ResourceDetailList
        }
      ],
    },

    {
      //文档模块
      path: '/doc',
      name: '文档资源',
      component: Dashboard,
      children: [{
          path: '/doc/Create',
          name: '文档步骤',
          component: DocCreate
        },
        {
          path: '/doc/Update',
          name: '修改文档',
          component: DocUpdate
        },
        {
          path: '/doc/Detail',
          name: '文档详情',
          component: DocDetail
        }
      ],
    },

    {
      //markdown模块
      path: '/md',
      name: 'markdown资源',
      component: Dashboard,
      children: [{
          path: '/md/Create',
          name: 'markdown新建',
          component: DocCreate
        },
        {
          path: '/md/Update',
          name: '修改markdown',
          component: DocUpdate
        },
        {
          path: '/md/Detail',
          name: 'markdown详情',
          component: DocDetail
        }
      ],
    },

    {
      //file模块
      path: '/file',
      name: 'file资源',
      component: Dashboard,
      children: [{
          path: '/file/Create',
          name: 'file新建',
          component: FileCreate
        },
        {
          path: '/file/Detail',
          name: 'file详情',
          component: FileDetail
        }
      ],
    },

    {
      //image模块
      path: '/image',
      name: 'image资源',
      component: Dashboard,
      children: [{
          path: '/image/Create',
          name: 'image新建',
          component: ImageCreate
        },
        {
          path: '/image/Detail',
          name: 'image详情',
          component: ImageDetail
        }
      ],
    },


    {
      path: '/test/Test',
      name: 'Test',
      component: Test
    },

  ]
})




// 每次请求之前都要判断有没有登录成功
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth == true) {
    //在需要进行登录校验的页面进行验证是否登陆
    let loginUser = Cookies.get("loginUser");
    if (loginUser == null || loginUser == '') {
      //未登录
      next({
        path: '/admin/login'
      });
    } else {
      if (to.name == "default") {
        next({
          path: '/home'
        });
      } else {
        next();
      }
    }
  } else {
    next();
  }

});

export default router;
