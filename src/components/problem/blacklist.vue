<template>
  <div class="tixian">
    <div class="guanliyuan-top">
      <table class="right-content2-top">
        <tr>
          <td>
            <span class="top-span">用户编号</span>
            <a-input />
          </td>
          <td>
            <span>
              <a-button type="primary" icon="search">搜索</a-button>
            </span>
          </td>
        </tr>
      </table>
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
          <a slot="6" href="javascript:;" class="table-shenhe" @click="showModal('删除')">删除</a>
        </a-table>
      </a-locale-provider>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal!='删除'">
            <div>
              <p>违规类别</p>
              <a-input />
            </div>
            <div>
              <p>拉黑原因</p>
              <a-input />
            </div>
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
  name: "blacklist",
  data() {
    return {
      zhCN,
      data: [],
      columns: [],
      modal: "编辑",
      visible: false,
      pagination: {
        pageIndex: 1,
        pageSize: 10, // 默认每页显示数量
        // showQuickJumper:true,
        showSizeChanger: true, // 显示可改变每页数量
        pageSizeOptions: ["10", "20", "30", "40"], // 每页数量选项
        showTotal: total => `共 ${total} 条数据 `, // 显示总数
        onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
      }
    };
  },
  mounted() {
    this.columns = [
      {
        title: "拉黑时间",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "截止时间",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "用户编号",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "违规类别",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "拉黑原因",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "操作",
        dataIndex: "6",
        scopedSlots: { customRender: "6" }
      }
    ];
    for (let i = 0; i < 30; i++) {
      this.data.push({
        1: "2019-10-09 14:21:22",
        2: "2019-10-09 14:21:22",
        3: "1563" + i + "1" + i,
        4: "一级",
        5: "违规"
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
