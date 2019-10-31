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
        <p class="list-title" @click="showMenu=!showMenu">系统菜单<img src="../assets/img/menu.jpg" class="folder-icon right" /></p>
        <div v-show="showMenu==true">
          <!-- 用户中心 -->
          <div class="list-unit">
            <p @click="showUser=!showUser">用户中心<a-icon type="caret-down" class="arrow-icon" />
            </p>
            <div v-show="showUser==true">
              <p :class="{'unit-active':listUnit=='usermanagement'}"  class="pl30"  @click="listUnit='';add('usermanagement','用户管理')" >用户管理</p>
              <p :class="{'unit-active':listUnit=='blacklist'}" class="pl30" @click="listUnit='blacklist';add('blacklist','黑名单管理')" >黑名单管理</p>
              <p :class="{'unit-active':listUnit=='liarstatistics'}" class="pl30"  @click="listUnit='liarstatistics';add('liarstatistics','骗子库')">骗子库</p>
            </div>
            <!-- 三方管理 -->
            <p :class="{'unit-active':listUnit=='sellermanagement'}" @click="listUnit='sellermanagement';add('sellermanagement','卖家管理')">卖家管理</p>
            <p :class="{'unit-active':listUnit=='shopmanagement'}" @click="listUnit='shopmanagement';add('shopmanagement','店铺管理')">店铺管理</p>
            <p :class="{'unit-active':listUnit=='taskmanagement'}" @click="listUnit='taskmanagement';add('taskmanagement','任务管理')">任务管理</p>
            <p :class="{'unit-active':listUnit=='ordermanagement'}" @click="listUnit='ordermanagement';add('ordermanagement','订单管理')">订单管理</p>
            <p :class="{'unit-active':listUnit=='rechargemanagement'}" @click="listUnit='rechargemanagement';add('rechargemanagement','充值管理')">充值管理</p>
          </div>
          <!-- 提现管理 -->
          <div class="list-unit">
            <p @click="showCash=!showCash">提现管理<a-icon type="caret-down" class="arrow-icon" /></p>
            <div v-show="showCash==true">
              <p :class="{'unit-active':listUnit=='cashmanagement'}" class="pl30"  @click="listUnit='cashmanagement';add('cashmanagement','提现管理')">提现管理</p>
            </div>
          </div>
          <!-- 分站管理 -->
          <div class="list-unit">
            <p @click="showSubstation=!showSubstation"> 分站管理 <a-icon type="caret-down" class="arrow-icon" /> </p>
            <div v-show="showSubstation==true">
              <p :class="{'unit-active':listUnit=='substationmanagement'}"  class="pl30" @click="listUnit='substationmanagement';add('substationmanagement','分站管理')">分站管理</p>
              <p :class="{'unit-active':listUnit=='myteam'}"  class="pl30"  @click="listUnit='myteam';add('myteam','我的团队')">我的团队</p>
              <p :class="{'unit-active':listUnit=='teamsetting'}" class="pl30"  @click="listUnit='teamsetting';add('teamsetting','团队设置')">团队设置</p>
            </div>
          </div>
          <!-- 数据统计 -->
          <div class="list-unit">
            <p @click="showDataMsg=!showDataMsg">数据统计<a-icon type="caret-down" class="arrow-icon" /></p>
            <ul v-show="showDataMsg==true">
              <li  class="pl30" :class="{'unit-active':listUnit=='orderstatistics'}" @click="listUnit='orderstatistics';add('orderstatistics','单量统计')">单量统计</li>
              <li  class="pl30" :class="{'unit-active':listUnit=='statistics'}" @click="listUnit='statistics';add('statistics','数据统计')">数据统计</li>
              <li  class="pl30" :class="{'unit-active':listUnit=='moneystatistics'}" @click="listUnit='moneystatistics';add('moneystatistics','资金统计')">资金统计</li>
              <li  class="pl30" :class="{'unit-active':listUnit=='substationstatistics'}" @click="listUnit='substationstatistics';add('substationstatistics','分站统计')">分站统计</li>
            </ul>
          </div>
          <!-- 系统设置 -->
          <div class="list-unit">
            <p :class="{'unit-active':listUnit=='systemmsg'}" @click="listUnit='systemmsg';add('systemmsg','系统消息')">系统消息</p>
            <p :class="{'unit-active':listUnit=='appealcenter'}" @click="listUnit='appealcenter';add('appealcenter','申诉中心')">申诉中心</p>
          </div>
          <div class="list-unit">
            <p @click="systemSetting=!systemSetting">系统设置 <a-icon type="caret-down" class="arrow-icon"/></p>
            <div v-show="systemSetting==true">
              <p  :class="{'unit-active':listUnit=='systemsetting'}" class="pl30"  @click="listUnit='systemsetting';add('systemsetting','系统设置')">系统设置</p>
              <p  :class="{'unit-active':listUnit=='bankmanagement'}" class="pl30"  @click="listUnit='bankmanagement';add('bankmanagement','银行管理')">银行管理</p>
              <p  :class="{'unit-active':listUnit=='editioncontrol'}" class="pl30"  @click="listUnit='editioncontrol';add('editioncontrol','APP版本控制')">APP版本控制</p>
            </div>
          </div>
          <!-- 首页管理员 -->
          <div class="list-unit">
            <!-- <p :class="{'unit-active':listUnit=='index'}" @click="listUnit='index';add('首页')">
              <a-icon type="home" />首页
            </p>-->
            <p :class="{'unit-active':listUnit=='administrators'}" @click="listUnit='administrators';add('administrators','管理员')">管理员</p>
          </div>
          <!-- 权限和菜单 -->
          <div class="list-unit">
            <p @click="showSetting=!showSetting">权限和菜单<a-icon type="caret-down" class="arrow-icon" /></p>
            <ul v-show="showSetting==true">
              <li  :class="{'unit-active':listUnit=='rolemanagement'}"  class="pl30" @click="listUnit='rolemanagement';add('rolemanagement','角色管理')">
                <a-icon type="team" />角色管理
              </li>
              <li class="pl30" @click="showQuanxian=!showQuanxian">
                <a-icon type="appstore" />权限管理
                <a-icon type="caret-down" class="arrow-icon" />
              </li>
              <ul v-show="showQuanxian==true">
                <li :class="{'unit-active':listUnit=='powermanagement'}"  class="pl50"  @click="listUnit='powermanagement';add('powermanagement','权限管理')">权限管理</li>
                <li :class="{'unit-active':listUnit=='userpowermanagement'}" class="pl50"  @click="listUnit='userpowermanagement';add('userpowermanagement','用户权限管理')">用户权限管理</li>
                <li :class="{'unit-active':listUnit=='rolepowermanagement'}" class="pl50" @click="listUnit='rolepowermanagement';add('rolepowermanagement','角色权限管理')">角色权限管理</li>
              </ul>
              <li  :class="{'unit-active':listUnit=='menumanagement'}" class="pl30"  @click="listUnit='menumanagement';add('menumanagement','菜单管理')">  <a-icon type="form"/>菜单管理</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="right-content">
      <a-tabs   hideAdd  v-model="activeKey"   type="editable-card" @edit="onEdit"  @change="callback"  defaultActiveKey="1">
        <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">{{pane.content}}</a-tab-pane>
      </a-tabs>
      <div class="right-content2">
          <router-view  @childData="getMsgFormChild"></router-view>
      </div>
    </div>
    <div class="bottom-content"></div>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      showMenu: false,
      showUser: false,
      showSubstation: false,
      showCash: false,
      showSetting: false,
      systemSetting: false,
      showDataMsg: false,
      showQuanxian: false,
      listUnit: "usermanagement",
      targetKey: "usermanagement",
      activeKey: "usermanagement",
      panes: [],
      childData: "",
      path:''
    };
  },
  mounted() {
    // 右侧菜单
    this.panes = [
      { title: "用户管理", content: "", key: "usermanagement", closable: false }
    ];
  },
  methods: {
    callback(targetKey) {
      this.$router.push({
        path:'/'+ targetKey
      });
    },
    add(path,title) {
      this.path = path;
      this.$router.push({
        path: '/'+path
      });
      const panes = this.panes;
      var flag = 0;
      const activeKey = path;
      panes.forEach(item => {
        if (title === item.title) {
          flag++;
          this.activeKey = activeKey;
        }
      });
      if (flag == 0) {
        if (path == "usermanagement") {
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
    onEdit(targetKey, action) {
      this[action](targetKey);
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
      // if (activeKey == "黑名单管理") {
      //   this.path = "/blacklist";
      // } else if (activeKey == "用户管理") {
      //   this.path = "/usermanagement";
      // }
      this.$router.push({
        path:'/'+this.activeKey
      });
    },
    getMsgFormChild(path,title) {
      this.add(path,title);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
