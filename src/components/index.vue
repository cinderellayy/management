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
              <p :class="{'unit-active':listUnit=='用户管理'}" class="pl30"  @click="listUnit='用户管理';add('用户管理','/usermanagement')" >用户管理</p>
              <p :class="{'unit-active':listUnit=='黑名单管理'}" class="pl30" @click="listUnit='黑名单管理';add('黑名单管理','/blacklist')">黑名单管理</p>
             
            </div>
          
          </div>

        </div>
      </div>
    </div>
    <div class="right-content">
      <a-tabs hideAdd v-model="activeKey" type="editable-card"   @edit="onEdit"  @change="callback"  defaultActiveKey="1"  >
        <a-tab-pane
          v-for="pane in panes"
          :tab="pane.title"
          :key="pane.key"
          :closable="pane.closable"
        >{{pane.content}}</a-tab-pane>
      </a-tabs>
      <div class="right-content2">
          <router-view></router-view>
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
      listUnit: "用户管理",
      data: [],
      targetKey: "用户管理",
      columns: [],
      activeKey: "用户管理",
      panes: [],
      indexColumns: [],
      indexData: [],
      childData: "",
      path:''
    };
  },

  mounted() {
    // 右侧菜单
    this.panes = [
      // { title: "用户管理", content: "", key: "用户管理", closable: false }
    ];
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
    callback(targetKey) {
      var _this = this;
       this.targetKey = targetKey;
      if(targetKey=='黑名单管理'){
        this.path='/blacklist'
      }else if(targetKey=='用户管理'){
         this.path='/usermanagement'
      }
      this.$router.push({
        path:_this.path
      })
    },
    add(title,path) {
      this.path = path;
      this.$router.push({
        path:path
      })
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
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    getMsgFormChild(data) {
      this.childData = data;
      this.add(data);
      this.activeKey = data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
