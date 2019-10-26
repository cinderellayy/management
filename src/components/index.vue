<template>
  <div class="management scroll">
    <div class="top">
      <p class="top-title color-title">系统后台</p>
      <p class="right">
        <span class="color-blue mr8">取消审核提醒</span>
        <span class="color-blue mr8">修改密码</span>
        <span class="color-blue mr8">退出</span>
        <span>欢迎您!</span>
      </p>
    </div>
    <div class="left-content scroll">
      <div class="left-title">功能菜单</div>
      <div class="left-detail mt40">
        <p class="list-title" @click="showMenu=!showMenu">
          系统菜单
          <img src="../assets/img/menu.jpg" class="folder-icon right" />
        </p>
        <div v-show="showMenu==true">
          <!-- 首页管理员 -->
          <div class="list-unit">
            <p :class="{'unit-active':listUnit=='index'}" @click="listUnit='index';add('首页')">
              <a-icon type="home" />首页
            </p>
            <p :class="{'unit-active':listUnit=='管理员'}" @click="listUnit='管理员';add('管理员')">
              <a-icon type="team" />管理员
            </p>
          </div>
          <!-- 权限和菜单 -->
          <div class="list-unit">
            <p @click="showSetting=!showSetting">
              <a-icon type="setting" />权限和菜单
              <a-icon type="caret-down" class="arrow-icon" />
            </p>
            <ul v-show="showSetting==true">
              <li
                :class="{'unit-active':listUnit=='角色管理'}"
                class="pl30"
                @click="listUnit='角色管理';add('角色管理')"
              >
                <a-icon type="team" />角色管理
              </li>
              <li class="pl30" @click="showQuanxian=!showQuanxian">
                <a-icon type="appstore" />权限管理
                <a-icon type="caret-down" class="arrow-icon" />
              </li>
              <ul v-show="showQuanxian==true">
                <li
                  :class="{'unit-active':listUnit=='权限管理'}"
                  class="pl50"
                  @click="listUnit='权限管理';add('权限管理')"
                >权限管理</li>
                <li
                  :class="{'unit-active':listUnit=='用户权限管理'}"
                  class="pl50"
                  @click="listUnit='用户权限管理';add('用户权限管理')"
                >用户权限管理</li>
                <li
                  :class="{'unit-active':listUnit=='角色权限管理'}"
                  class="pl50"
                  @click="listUnit='角色权限管理';add('角色权限管理')"
                >角色权限管理</li>
              </ul>
              <li
                :class="{'unit-active':listUnit=='菜单管理'}"
                class="pl30"
                @click="listUnit='菜单管理';add('菜单管理')"
              >
                <a-icon type="form" />菜单管理
              </li>
            </ul>
          </div>    
          <div class="list-unit">
            <!-- 代码 -->
            <p :class="{'unit-active':listUnit=='代码生成'}" @click="listUnit='代码生成';add('代码生成')">代码生成</p>
            <!-- 系统设置相关 -->
            <p :class="{'unit-active':listUnit=='系统设置'}" @click="listUnit='系统设置';add('系统设置')">系统设置</p>
            <p :class="{'unit-active':listUnit=='系统消息'}" @click="listUnit='系统消息';add('系统消息')">系统消息</p>
         
            <p :class="{'unit-active':listUnit=='账号信息'}" @click="listUnit='账号信息';add('账号信息')">账号信息</p>
            <!-- 团队相关 -->
            <p :class="{'unit-active':listUnit=='团队设置'}" @click="listUnit='团队设置';add('团队设置')">团队设置</p>
            <p :class="{'unit-active':listUnit=='我的团队'}" @click="listUnit='我的团队';add('我的团队')">我的团队</p>
          </div>
          <!-- 数据统计 -->
          <div class="list-unit">
            <p @click="showDataMsg=!showDataMsg">
              数据统计
              <a-icon type="caret-down" class="arrow-icon" />
            </p>
            <ul v-show="showDataMsg==true">
              <li
                class="pl30"
                :class="{'unit-active':listUnit=='单量统计'}"
                @click="listUnit='单量统计';add('单量统计')"
              >单量统计</li>
              <li
                class="pl30"
                :class="{'unit-active':listUnit=='数据统计'}"
                @click="listUnit='数据统计';add('数据统计')"
              >数据统计</li>
              <li
                class="pl30"
                :class="{'unit-active':listUnit=='资金统计'}"
                @click="listUnit='资金统计';add('资金统计')"
              >资金统计</li>
              <li
                class="pl30"
                :class="{'unit-active':listUnit=='分站统计'}"
                @click="listUnit='分站统计';add('分站统计')"
              >分站统计</li>
            </ul>
          </div>
          <!-- 账号信息以及下面一级菜单 -->
          <div class="list-unit">
            <!-- 问题相关 -->
            <p :class="{'unit-active':listUnit=='骗子库'}" @click="listUnit='骗子库';add('骗子库')">骗子库</p>
            <p :class="{'unit-active':listUnit=='申诉中心'}" @click="listUnit='申诉中心';add('申诉中心')">申诉中心</p>
            <p :class="{'unit-active':listUnit=='黑名单管理'}"  @click="listUnit='黑名单管理';add('黑名单管理')">黑名单管理</p>
            <!-- 资金相关 -->
            <p :class="{'unit-active':listUnit=='提现管理'}" @click="listUnit='提现管理';add('提现管理')">提现管理</p>
            <p :class="{'unit-active':listUnit=='充值管理'}" @click="listUnit='充值管理';add('充值管理')">充值管理</p>
            <p :class="{'unit-active':listUnit=='银行管理'}" @click="listUnit='银行管理';add('银行管理')">银行管理</p>
            <p :class="{'unit-active':listUnit=='佣金明细管理'}"@click="listUnit='佣金明细管理';add('佣金明细管理')">佣金明细管理</p>
            <!-- 三方管理 -->
            <p :class="{'unit-active':listUnit=='卖家管理'}" @click="listUnit='卖家管理';add('卖家管理')">卖家管理</p>
            <p :class="{'unit-active':listUnit=='分站管理'}" @click="listUnit='分站管理';add('分站管理')">分站管理</p>
            <p :class="{'unit-active':listUnit=='店铺管理'}" @click="listUnit='店铺管理';add('店铺管理')">店铺管理</p>
            <p :class="{'unit-active':listUnit=='订单管理'}" @click="listUnit='订单管理';add('订单管理')">订单管理</p>
            <p :class="{'unit-active':listUnit=='任务管理'}" @click="listUnit='任务管理';add('任务管理')">任务管理</p>
            <p :class="{'unit-active':listUnit=='用户管理'}" @click="listUnit='用户管理';add('用户管理')">用户管理</p>
            <p :class="{'unit-active':listUnit=='APP版本控制'}" @click="listUnit='APP版本控制';add('APP版本控制')">APP版本控制</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-content">
      <a-tabs
        hideAdd
        v-model="activeKey"
        type="editable-card"
        @edit="onEdit"
        @change="callback"
        defaultActiveKey="1"
      >
        <a-tab-pane
          v-for="pane in panes"
          :tab="pane.title"
          :key="pane.key"
          :closable="pane.closable"
        >{{pane.content}}</a-tab-pane>
      </a-tabs>
      <div class="right-content2" v-show="activeKey=='首页'">
        <a-table :columns="indexColumns" :dataSource="indexData" rowKey="1" :pagination="false" />
      </div>
      <!-- 管理员 -->
      <administrators-data class="right-content2" v-if="activeKey=='管理员'"></administrators-data>
      <!-- 权限和菜单 -->
      <rolemanagement-data class="right-content2" v-if="activeKey=='角色管理'"></rolemanagement-data>
      <powermanagement-data class="right-content2" v-if="activeKey=='权限管理'"></powermanagement-data>
      <userpowermanagement-data class="right-content2" v-if="activeKey=='用户权限管理'"></userpowermanagement-data>
      <rolepowermanagement-data class="right-content2" v-if="activeKey=='角色权限管理'"></rolepowermanagement-data>
      <menumanagement-data class="right-content2" v-if="activeKey=='菜单管理'"></menumanagement-data>
      <!-- 代码 -->
      <codegeneration-data class="right-content2" v-if="activeKey=='代码生成'"></codegeneration-data>
      <!-- 系统设置相关 -->
      <systemsetting-data class="right-content2" v-if="activeKey=='系统设置'"></systemsetting-data>
      <systemmsg-data class="right-content2" v-if="activeKey=='系统消息'"></systemmsg-data>
      <accountinformation-data class="right-content2" v-if="activeKey=='账号信息'"></accountinformation-data>
      <!-- 团队相关 -->
      <teamsetting-data class="right-content2" v-if="activeKey=='团队设置'"></teamsetting-data>
      <myteam-data class="right-content2" v-if="activeKey=='我的团队'"></myteam-data>
      <!-- 问题相关 -->
      <liarstatistics-data class="right-content2" v-if="activeKey=='骗子库'"></liarstatistics-data>
      <appealcenter-data class="right-content2" v-if="activeKey=='申诉中心'"></appealcenter-data>
      <blacklist-data class="right-content2" v-if="activeKey=='黑名单管理'"></blacklist-data>
      <!-- 数据统计 -->
      <orderstatistics-data class="right-content2" v-if="activeKey=='单量统计'"></orderstatistics-data>
      <datastatistics-data class="right-content2" v-if="activeKey=='数据统计'"></datastatistics-data>
      <moneystatistics-data class="right-content2" v-if="activeKey=='资金统计'"></moneystatistics-data>
      <substationstatistics-data class="right-content2" v-if="activeKey=='分站统计'"></substationstatistics-data>
      <!-- 资金相关 -->
      <cashmanagement-data class="right-content2" v-if="activeKey=='提现管理'"></cashmanagement-data>
      <bankmanagement-data class="right-content2" v-if="activeKey=='银行管理'"></bankmanagement-data>
      <commissionmanagement-data class="right-content2" v-if="activeKey=='佣金明细管理'"></commissionmanagement-data>
      <rechargemanagement-data class="right-content2" v-if="activeKey=='充值管理'"></rechargemanagement-data>
      <!-- 三方管理 -->
      <substationmanagement-data class="right-content2" @childData="getMsgFormChild" v-if="activeKey=='分站管理'"></substationmanagement-data>
      <substationchildmanagement-data class="right-content2" v-if="activeKey=='分站价格区间管理'"></substationchildmanagement-data>
      <shopmanagement-data class="right-content2" v-if="activeKey=='店铺管理'"></shopmanagement-data>
      <ordermanagement-data class="right-content2" v-if="activeKey=='订单管理'"></ordermanagement-data>
      <sellermanagement-data class="right-content2" v-if="activeKey=='卖家管理'"></sellermanagement-data>
      <taskmanagement-data class="right-content2" v-if="activeKey=='任务管理'"></taskmanagement-data>
      <usermanagement-data class="right-content2" @childData="getMsgFormChild" v-if="activeKey=='用户管理'"></usermanagement-data>
      <userexamine-data class="right-content2" v-if="activeKey=='用户管理审核'"></userexamine-data>
      <editioncontrol-data class="right-content2" v-if="activeKey=='APP版本控制'"></editioncontrol-data>
      
    </div>
    <div class="bottom-content"></div>
  </div>
</template>

<script>
// 管理员
import administratorsData from "./admin/administrators";
//权限和菜单
import rolemanagementData from "./powerMenu/roleManagement";
import powermanagementData from "./powerMenu/powerManagement";
import userpowermanagementData from "./powerMenu/userPowerManagement";
import rolepowermanagementData from "./powerMenu/rolePowerManagement";
import menumanagementData from "./powerMenu/menuManagement";
//代码
import codegenerationData from "./code/codegeneration";
// 系统设置
import systemsettingData from "./systemSetting/systemSetting";
import systemmsgData from "./systemSetting/systemMsg";
import accountinformationData from "./systemSetting/accountInformation";
// 问题相关
import liarstatisticsData from "./problem/liarStatistics";
import appealcenterData from "./problem/appealCenter";
import blacklistData from "./problem/blacklist";
// 资金相关
import cashmanagementData from "./money/cashManagement";
import bankmanagementData from "./money/bankManagement";
import commissionmanagementData from "./money/commissionManagement";
import rechargemanagementData from "./money/rechargeManagement";
//团队相关
import teamsettingData from "./team/teamsetting";
import myteamData from "./team/myTeam";
// 数据统计
import orderstatisticsData from "./dataStatistics/orderStatistics";
import datastatisticsData from "./dataStatistics/dataStatistics";
import moneystatisticsData from "./dataStatistics/moneyStatistics";
import substationstatisticsData from "./dataStatistics/substationStatistics";

//三方管理
import sellermanagementData from "./threePartyManagement/sellerManagement";
import substationmanagementData from "./threePartyManagement/substationManagement";
import shopmanagementData from "./threePartyManagement/shopManagement";
import ordermanagementData from "./threePartyManagement/orderManagement";
import taskmanagementData from "./threePartyManagement/taskManagement";
import usermanagementData from "./threePartyManagement/userManagement";
import substationchildmanagementData from "./threePartyManagement/substationChildManagement";
import userexamineData from "./threePartyManagement/userExamine";
//版本控制
import editioncontrolData from "./APPEdition/editionControl";
export default {
  name: "index",
  data() {
    return {
      showMenu: false,
      showUser: false,
      showShop: false,
      showData: false,
      showSetting: false,
      showDataMsg: false,
      showQuanxian: false,
      listUnit: 1,
      listUnit1: 5,
      listUnit2: 7,
      data: [],
      targetKey: "首页",
      columns: [],
      activeKey: "首页",
      newTabIndex: 0,
      panes: [],
      indexColumns: [],
      indexData: [],
      childData:''
    };
  },
  components: {
    administratorsData,
    usermanagementData,
    rolemanagementData,
    powermanagementData,
    userpowermanagementData,
    rolepowermanagementData,
    menumanagementData,
    codegenerationData,
    systemsettingData,
    systemmsgData,
    cashmanagementData,
    sellermanagementData,
    blacklistData,
    teamsettingData,
    myteamData,
    orderstatisticsData,
    datastatisticsData,
    moneystatisticsData,
    substationstatisticsData,
    accountinformationData,
    liarstatisticsData,
    substationmanagementData,
    appealcenterData,
    bankmanagementData,
    commissionmanagementData,
    shopmanagementData,
    ordermanagementData,
    rechargemanagementData,
    taskmanagementData,
    substationchildmanagementData,
    userexamineData,
    editioncontrolData
  },
  mounted() {
    // 右侧菜单
    this.panes = [{ title: "首页", content: "", key: "首页", closable: false }];
    // 首页数据
    this.indexColumns = [
      {
        title: "系统信息",
        dataIndex: "1"
      },
      {
        title: "",
        dataIndex: "2"
      },
      {
        title: "",
        dataIndex: "3"
      },
      {
        title: "",
        dataIndex: "4"
      }
    ];
    this.indexData = [
      {
        1: "平台",
        2: "系统目录",
        3: "系统根目录",
        4: "硬盘使用情况"
      },
      {
        1: "Linux",
        2: "dhxtdhxtsrcassetsimgs",
        3: "/",
        4: "12.34GB/39.23GB 剩余26.03GB"
      }
    ];
  },
  methods: {
    showList(param) {
      if (param == "showUser") {
        this.showUser = !this.showUser;
      }
      if (param == "showShop") {
        this.showShop = !this.showShop;
      }
      if (param == "showData") {
        this.showData = !this.showData;
      }
    },
    callback(targetKey) {
      this.targetKey = targetKey;
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    add(title) {
      const panes = this.panes;
      var flag = 0;
      const activeKey = title;
      panes.forEach(item => {
        if (title === item.title) {
          flag++;
          this.activeKey = activeKey;
        }
      });
      if (flag == 0) {
        if (title == "用户管理") {
          panes.push({
            title: title,
            content: "",
            key: activeKey
          });
        } else {
          panes.push({
            title: title,
            content: "",
            key: activeKey
          });
        }
        this.panes = panes;
        this.activeKey = activeKey;
      }
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter(pane => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key;
        } else {
          activeKey = panes[0].key;
        }
      }
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    getMsgFormChild(data){
      this.childData = data
      this.add(data);
      this.activeKey = data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
