import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// 管理员
import administrators from "@/components/admin/administrators";
//权限和菜单
import rolemanagement from "@/components/powerMenu/roleManagement";
import powermanagement from "@/components/powerMenu/powerManagement";
import userpowermanagement from "@/components/powerMenu/userPowerManagement";
import rolepowermanagement from "@/components/powerMenu/rolePowerManagement";
import menumanagement from "@/components/powerMenu/menuManagement";
//代码
import codegeneration from "@/components/code/codegeneration";
// 系统设置
import appealcenter from "@/components/systemSetting/appealCenter";
import systemsetting from "@/components/systemSetting/systemSetting";
import systemmsg from "@/components/systemSetting/systemMsg";
import accountinformation from "@/components/systemSetting/accountInformation";
// 用户中心
import liarstatistics from "@/components/userCenter/liarStatistics";
import blacklist from "@/components/userCenter/blacklist";
import usermanagement from "@/components/userCenter/userManagement";
import userexamine from "@/components/userCenter/userExamine";

// 提现管理
import cashmanagement from "@/components/cashManagement/cashManagement";
// 资金相关
import bankmanagement from "@/components/money/bankManagement";
import commissionmanagement from "@/components/money/commissionManagement";
import rechargemanagement from "@/components/money/rechargeManagement";
//分站管理
import substationchildmanagement from "@/components/substationManagement/substationChildManagement";
import substationmanagement from "@/components/substationManagement/substationManagement";
import teamsetting from "@/components/substationManagement/teamsetting";
import myteam from "@/components/substationManagement/myTeam";
// 数据统计
import orderstatistics from "@/components/dataStatistics/orderStatistics";
import statistics from "@/components/dataStatistics/dataStatistics";
import moneystatistics from "@/components/dataStatistics/moneyStatistics";
import substationstatistics from "@/components/dataStatistics/substationStatistics";

//三方管理
import sellermanagement from "@/components/threePartyManagement/sellerManagement";
import shopmanagement from "@/components/threePartyManagement/shopManagement";
import ordermanagement from "@/components/threePartyManagement/orderManagement";
import taskmanagement from "@/components/threePartyManagement/taskManagement";
//版本控制
import editioncontrol from "@/components/APPEdition/editionControl";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: 'administrators',
          name: 'administrators',
          component: administrators
        },
        {
          path: 'rolemanagement',
          name: 'rolemanagement',
          component: rolemanagement
        },
        
        {
          path: 'usermanagement',
          name: 'usermanagement',
          component: usermanagement
        },
        {
          path: 'blacklist',
          name: 'blacklist',
          component: blacklist
        },
        {
          path: 'powermanagement',
          name: 'powermanagement',
          component: powermanagement
        },
        {
          path: 'userpowermanagement',
          name: 'userpowermanagement',
          component: userpowermanagement
        },
        
        {
          path: 'rolepowermanagement',
          name: 'rolepowermanagement',
          component: rolepowermanagement
        },
        {
          path: 'menumanagement',
          name: 'menumanagement',
          component: menumanagement
        },
        {
          path: 'codegeneration',
          name: 'codegeneration',
          component: codegeneration
        },
        {
          path: 'appealcenter',
          name: 'appealcenter',
          component: appealcenter
        },
        
        {
          path: 'systemsetting',
          name: 'systemsetting',
          component: systemsetting
        },
        {
          path: 'systemmsg',
          name: 'systemmsg',
          component: systemmsg
        },
        {
          path: 'accountinformation',
          name: 'accountinformation',
          component: accountinformation
        },
        {
          path: 'liarstatistics',
          name: 'liarstatistics',
          component: liarstatistics
        },
        {
          path: 'userexamine',
          name: 'userexamine',
          component: userexamine
        },
        {
          path: 'cashmanagement',
          name: 'cashmanagement',
          component: cashmanagement
        },
        {
          path: 'bankmanagement',
          name: 'bankmanagement',
          component: bankmanagement
        },
        
        {
          path: 'commissionmanagement',
          name: 'commissionmanagement',
          component: commissionmanagement
        },
        {
          path: 'rechargemanagement',
          name: 'rechargemanagement',
          component: rechargemanagement
        },
        {
          path: 'substationchildmanagement',
          name: 'substationchildmanagement',
          component: substationchildmanagement
        },
        {
          path: 'substationmanagement',
          name: 'substationmanagement',
          component: substationmanagement
        },
        
        {
          path: 'teamsetting',
          name: 'teamsetting',
          component: teamsetting
        },
        {
          path: 'myteam',
          name: 'myteam',
          component: myteam
        },
        {
          path: 'orderstatistics',
          name: 'orderstatistics',
          component: orderstatistics
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: statistics
        },
        
        {
          path: 'moneystatistics',
          name: 'moneystatistics',
          component: moneystatistics
        },
        {
          path: 'substationstatistics',
          name: 'substationstatistics',
          component: substationstatistics
        },
        {
          path: 'sellermanagement',
          name: 'sellermanagement',
          component: sellermanagement
        },
        {
          path: 'shopmanagement',
          name: 'shopmanagement',
          component: shopmanagement
        },
        {
          path: 'ordermanagement',
          name: 'ordermanagement',
          component: ordermanagement
        },
        {
          path: 'taskmanagement',
          name: 'taskmanagement',
          component: taskmanagement
        },
        {
          path: 'editioncontrol',
          name: 'editioncontrol',
          component: editioncontrol
        }

        
      ]
    },

  ]
})
