<template>
  <div class="management">
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
              <li :class="{'unit-active':listUnit=='角色管理'}" class="pl30" @click="listUnit='角色管理';add('角色管理')">
                <a-icon type="team" />角色管理
              </li>
              <li  class="pl30" @click="showQuanxian=!showQuanxian">
                <a-icon type="appstore" />权限管理
                <a-icon type="caret-down" class="arrow-icon" />
              </li>
              <ul v-show="showQuanxian==true">
                <li :class="{'unit-active':listUnit=='权限管理'}" class="pl50" @click="listUnit='权限管理';add('权限管理')">权限管理</li>
                <li :class="{'unit-active':listUnit=='用户权限管理'}" class="pl50" @click="listUnit='用户权限管理';add('用户权限管理')">用户权限管理</li>
                <li :class="{'unit-active':listUnit=='角色权限管理'}" class="pl50" @click="listUnit='角色权限管理';add('角色权限管理')">角色权限管理</li>
              </ul>
              <li :class="{'unit-active':listUnit=='菜单管理'}" class="pl30" @click="listUnit='菜单管理';add('菜单管理')">
                <a-icon type="form" />菜单管理
              </li>
            </ul>
          </div>

          <!-- 代码生成以及下面一级菜单 -->
          <div class="list-unit">
            <p :class="{'unit-active':listUnit=='代码生成'}" @click="listUnit='代码生成';add('代码生成')">代码生成</p>
            <p :class="{'unit-active':listUnit=='提现管理'}" @click="listUnit='提现管理';add('提现管理')">提现管理</p>
            <p :class="{'unit-active':listUnit=='系统设置'}" @click="listUnit='系统设置';add('系统设置')">系统设置</p>
            <p :class="{'unit-active':listUnit=='系统消息'}" @click="listUnit='系统消息';add('系统消息')">系统消息</p>
            <p :class="{'unit-active':listUnit=='卖家管理'}" @click="listUnit='卖家管理';add('卖家管理')">卖家管理</p>
            <p
              :class="{'unit-active':listUnit=='黑名单管理'}"
              @click="listUnit='黑名单管理';add('黑名单管理')"
            >黑名单管理</p>
            <p :class="{'unit-active':listUnit=='团队设置'}" @click="listUnit='团队设置';add('团队设置')">团队设置</p>
            <p :class="{'unit-active':listUnit=='我的团队'}" @click="listUnit='我的团队';add('我的团队')">我的团队</p>
          </div>
          <!-- 数据统计 -->
          <div class="list-unit">
            <p  @click="showDataMsg=!showDataMsg">
             数据统计
              <a-icon type="caret-down" class="arrow-icon" />
            </p>
            <ul v-show="showDataMsg==true">
              <li  class="pl30"
                :class="{'unit-active':listUnit=='单量统计'}"
                @click="listUnit='单量统计';add('单量统计')"
              >单量统计</li>
              <li  class="pl30"
                :class="{'unit-active':listUnit=='数据统计'}"
                @click="listUnit='数据统计';add('数据统计')"
              >数据统计</li>
              <li  class="pl30"
                :class="{'unit-active':listUnit=='资金统计'}"
                @click="listUnit='资金统计';add('资金统计')"
              >资金统计</li>
              <li  class="pl30"
                :class="{'unit-active':listUnit=='分站统计'}"
                @click="listUnit='分站统计';add('分站统计')"
              >分站统计</li>
            </ul>
          </div>
          <!-- 账号信息以及下面一级菜单 -->
          <div class="list-unit">
            <p :class="{'unit-active':listUnit=='账号信息'}" @click="listUnit='账号信息';add('账号信息')">账号信息</p>
            <p :class="{'unit-active':listUnit=='骗子库'}" @click="listUnit='骗子库';add('骗子库')">骗子库</p>
            <p :class="{'unit-active':listUnit=='分站管理'}" @click="listUnit='分站管理';add('分站管理')">分站管理</p>
            <p :class="{'unit-active':listUnit=='申诉中心'}" @click="listUnit='申诉中心';add('申诉中心')">申诉中心</p>
            <p :class="{'unit-active':listUnit=='银行管理'}" @click="listUnit='银行管理';add('银行管理')">银行管理</p>
            <p
              :class="{'unit-active':listUnit=='佣金明细管理'}"
              @click="listUnit='佣金明细管理';add('佣金明细管理')"
            >佣金明细管理</p>
            <p :class="{'unit-active':listUnit=='店铺管理'}" @click="listUnit='店铺管理';add('店铺管理')">店铺管理</p>
            <p :class="{'unit-active':listUnit=='订单管理'}" @click="listUnit='订单管理';add('订单管理')">订单管理</p>
            <p :class="{'unit-active':listUnit=='充值管理'}" @click="listUnit='充值管理';add('充值管理')">充值管理</p>
            <p :class="{'unit-active':listUnit=='任务管理'}" @click="listUnit='任务管理';add('任务管理')">任务管理</p>
            <p :class="{'unit-active':listUnit=='用户管理'}" @click="listUnit='用户管理';add('用户管理')">用户管理</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-content">
      <a-tabs hideAdd v-model="activeKey" type="editable-card" @edit="onEdit" @change="callback" defaultActiveKey="1"> 
        <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">{{pane.content}}</a-tab-pane>
      </a-tabs>
      <div class="right-content2" v-show="activeKey=='首页'">
        <a-table :columns="indexColumns"  :dataSource="indexData"  rowKey="1" :pagination="false" />
      </div>
      <yonghuguanli-data class="right-content2" v-if="activeKey=='用户管理'"></yonghuguanli-data>
      <guanliyuan-data class="right-content2" v-if="activeKey=='管理员'"></guanliyuan-data>
      <jueseguanli-data class="right-content2" v-if="activeKey=='角色管理'"></jueseguanli-data>
      <quanxian-data class="right-content2" v-if="activeKey=='权限管理'"></quanxian-data>
      <quanxianyonghu-data class="right-content2" v-if="activeKey=='用户权限管理'"></quanxianyonghu-data>
      <quanxianjuese-data class="right-content2" v-if="activeKey=='角色权限管理'"></quanxianjuese-data>
      <caidanguanli-data class="right-content2" v-if="activeKey=='菜单管理'"></caidanguanli-data>
      <daima-data class="right-content2" v-if="activeKey=='代码生成'"></daima-data>
      <xitongsetting-data class="right-content2" v-if="activeKey=='系统设置'"></xitongsetting-data>
      <xitongmsg-data class="right-content2" v-if="activeKey=='系统消息'"></xitongmsg-data>
      <tixianguanli-data class="right-content2" v-if="activeKey=='提现管理'"></tixianguanli-data>
      <maijiaguanli-data class="right-content2" v-if="activeKey=='卖家管理'"></maijiaguanli-data>
      <heimingdanguanli-data class="right-content2" v-if="activeKey=='黑名单管理'"></heimingdanguanli-data>
      <tuanduishezhi-data class="right-content2" v-if="activeKey=='团队设置'"></tuanduishezhi-data>
      <mytuandui-data class="right-content2" v-if="activeKey=='我的团队'"></mytuandui-data>
      <danliangtongji-data class="right-content2" v-if="activeKey=='单量统计'"></danliangtongji-data>
      <shujvtongji-data class="right-content2" v-if="activeKey=='数据统计'"></shujvtongji-data>
      <zijintongji-data class="right-content2" v-if="activeKey=='资金统计'"></zijintongji-data>
      <fenzhantongji-data class="right-content2" v-if="activeKey=='分站统计'"></fenzhantongji-data>
      <zhanghaoxinxi-data class="right-content2" v-if="activeKey=='账号信息'"></zhanghaoxinxi-data>
      <pianziku-data class="right-content2" v-if="activeKey=='骗子库'"></pianziku-data>
      <fenzhanguanli-data class="right-content2" v-if="activeKey=='分站管理'"></fenzhanguanli-data>
      <shensuzhongxin-data class="right-content2" v-if="activeKey=='申诉中心'"></shensuzhongxin-data>
      <yinhangguanli-data class="right-content2" v-if="activeKey=='银行管理'"></yinhangguanli-data>
      <yongjinguanli-data class="right-content2" v-if="activeKey=='佣金明细管理'"></yongjinguanli-data>
      <dianpuguanli-data class="right-content2" v-if="activeKey=='店铺管理'"></dianpuguanli-data>
      <dingdanguanli-data class="right-content2" v-if="activeKey=='订单管理'"></dingdanguanli-data>
      <chongzhiguanli-data class="right-content2" v-if="activeKey=='充值管理'"></chongzhiguanli-data>
       <renwuguanli-data class="right-content2" v-if="activeKey=='任务管理'"></renwuguanli-data>
      
    </div>
    <div class="bottom-content"></div>
  </div>
</template>

<script>
import guanliyuanData from "./childComponents/guanliyuan";
import yonghuguanliData from "./childComponents/yonghuguanli";
import jueseguanliData from "./childComponents/jueseguanli";
import quanxianData from "./childComponents/quanxian";
import quanxianyonghuData from "./childComponents/quanxianYonghu";
import quanxianjueseData from "./childComponents/quanxianJuese";
import caidanguanliData from "./childComponents/caidanguanli";
import daimaData from "./childComponents/daima";
import xitongsettingData from "./childComponents/xitongSetting";
import xitongmsgData from "./childComponents/xitongMsg";
import tixianguanliData from "./childComponents/tixianguanli";
import maijiaguanliData from "./childComponents/maijiaguanli";
import heimingdanguanliData from "./childComponents/heimingdanguanli";
import tuanduishezhiData from "./childComponents/tuanduishezhi";
import mytuanduiData from "./childComponents/mytuandui";
import danliangtongjiData from "./childComponents/danliangtongji";
import shujvtongjiData from "./childComponents/shujvtongji";
import zijintongjiData from "./childComponents/zijintongji";
import fenzhantongjiData from "./childComponents/fenzhantongji";
import zhanghaoxinxiData from "./childComponents/zhanghaoxinxi";
import pianzikuData from "./childComponents/pianziku";
import fenzhanguanliData from "./childComponents/fenzhanguanli";
import shensuzhongxinData from "./childComponents/shensuzhongxin";
import yinhangguanliData from "./childComponents/yinhangguanli";
import yongjinguanliData from "./childComponents/yongjinguanli";
import dianpuguanliData from "./childComponents/dianpuguanli";
import dingdanguanliData from "./childComponents/dingdanguanli";
import chongzhiguanliData from "./childComponents/chongzhiguanli";
import renwuguanliData from "./childComponents/renwuguanli";

export default {
  name: "management",
  data() {
    return {
      showMenu: false,
      showUser: false,
      showShop: false,
      showData: false,
      showSetting: false,
      showDataMsg: false,
      showQuanxian:false,
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
      indexData: []
    };
  },
  components: {
    guanliyuanData,
    yonghuguanliData,
    jueseguanliData,
    quanxianData,
    quanxianyonghuData,
    quanxianjueseData,
    caidanguanliData,
    daimaData,
    xitongsettingData,
    xitongmsgData,
    tixianguanliData,
    maijiaguanliData,
    heimingdanguanliData,
    tuanduishezhiData,
    mytuanduiData,
    danliangtongjiData,
    shujvtongjiData,
    zijintongjiData,
    fenzhantongjiData,
    zhanghaoxinxiData,
    pianzikuData,
    fenzhanguanliData,
    shensuzhongxinData,
    yinhangguanliData,
    yongjinguanliData,
    dianpuguanliData,
    dingdanguanliData,
    chongzhiguanliData,
    renwuguanliData
  },
  mounted() {
    // 右侧菜单
    this.panes = [{ title: "首页", content: "", key: "首页", closable: false }];
    // 首页数据
    this.indexColumns = [
      {
        title: "系统信息",
        dataIndex: "1",
       
        
      },
      {
        title: "",
        dataIndex: "2",
      
      },
      {
        title: "",
        dataIndex: "3",
        
      },
      {
        title: "",
        dataIndex: "4",
       
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
