<template>
  <div class="tixian">
    <div class="guanliyuan-top mb20">
      <div class="right-content2-top">
        <a-button class="mr20" :class="{'ant-btn-primary':topTab==1}" @click="topTab=1">手机淘宝</a-button>
        <a-button class="mr20" :class="{'ant-btn-primary':topTab==2}" @click="topTab=2">手机浏览</a-button>
        <a-button class="mr20" :class="{'ant-btn-primary':topTab==3}" @click="topTab=3">预售任务</a-button>
        <div class="right">
          <span>
            <a-button type="primary" icon="search">搜索</a-button>
          </span>
        </div>
      </div>
    </div>
    <div class="guanliyuan-middle">
      <span>总计：{{data.length}}条记录</span>
      <div class="right">
        <a-button icon="folder-add" @click="showModal('添加')">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-locale-provider :locale="zhCN">
        <a-table :columns="columns" :dataSource="data" bordered :pagination="pagination">
          <span slot="4" slot-scope="text">
            {{text}}
            <span class="table-shenhe" @click="showModal('平台佣金')">修改</span>
          </span>
          <span slot="5" slot-scope="text">
            {{text}}
            <span class="table-shenhe" @click="showModal('用户佣金')">修改</span>
          </span>
          <span slot="6" slot-scope="text">
            {{text}}
            <span class="table-shenhe" @click="showModal('分站代理底价')">修改</span>
          </span>
          <span class="table-shenhe" slot="9"  @click="showModal('删除')">删除</span>
        </a-table>
      </a-locale-provider>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='添加'">
            <p>最低区间值</p>
            <a-input />
          </div>
          <div v-show="modal=='添加'">
            <p>最高区间值</p>
            <a-input />
          </div>
          <div v-show="modal=='添加'">
            <p>平台佣金</p>
            <a-input />
          </div>
          <div v-show="modal=='添加'">
            <p>分站代理底价</p>
            <a-input />
          </div>
          <div v-show="modal=='添加'">
            <p>用户佣金</p>
            <a-input />
          </div>
          <div v-show="modal!='添加' && modal!='删除'">
            <p>请输入修改后金额</p>
            <a-input />
          </div>
          <div v-show="modal=='删除'">
            <p>确定要删除吗（该操作无法恢复）？</p>
          </div>
        </a-modal>
      </a-locale-provider>
    </div>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN"; // 汉化
export default {
  name: "substationchildmanagement",
  data() {
    return {
      zhCN,
      data: [],
      columns: [],
      columnsModal: [],
      dataModal: [],
      modal: "编辑",
      visible: false,
      topTab: 1,
      pagination: {
        pageIndex: 1,
        pageSize: 8, // 默认每页显示数量
        // showQuickJumper:true,
        showSizeChanger: true, // 显示可改变每页数量
        pageSizeOptions: ["8", "10", "20", "30", "40"], // 每页数量选项
        showTotal: total => `共 ${total} 条数据 `, // 显示总数
        onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
      }
    };
  },

  mounted() {
    // 用户管理内容
    this.columns = [
      {
        title: "ID",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "最低区间值",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "最高区间值",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "平台佣金",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "用户佣金",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "分站代理底价",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },
      {
        title: "任务类型",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "添加时间",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      {
        title: "操作",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        1: i + "209",
        2: `1` + i,
        3: "100.00",
        4: "10.00",
        5: "3.00",
        6: "12.00",
        7: "手机淘宝",
        8: "2019-10-10 12:3" + i
      });
    }
  },

  methods: {
    showModal(param) {
      this.modal = param;
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
