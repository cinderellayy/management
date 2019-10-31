<template>
  <div>
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">角色名</span>
            <a-input />
          </td>
          <td width="140">
            <span class="right">
              <a-button type="primary" icon="search">搜索</a-button>
            </span>
          </td>
        </tr>
      </table>
    </div>
    <div class="guanliyuan-middle">
      <span>总计：{{data.length}}条记录</span>
      <div class="right">
        <a-button icon="download">导出</a-button>
        <a-button icon="folder-add" @click="showModal('添加')">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail relative">
        <a-table
          :rowSelection="rowSelection"
          :columns="columns"
          :dataSource="data"
          bordered
          :pagination="pagination"
        >
          <div slot="操作">
            <span class="table-shenhe mr10" @click="showModal('编辑')">编辑</span>
            <span class="table-shenhe" @click="showModal('删除')">删除</span>
          </div>
          <img class="cell-img" slot="4" slot-scope="data" :src="data" />
        </a-table>
      <a-button type="danger" class="juese-delete">删除所选</a-button>
    </div>
    <div>
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='编辑'">
            ID
            <a-input />
          </div>
          <div v-show="modal!='删除'">
            角色名
            <a-input />
          </div>
          <div v-show="modal=='编辑'">
            创建时间
            <a-input />
          </div>
          <div v-show="modal=='删除'">
            <p>确定要删除吗（该操作无法恢复）？</p>
          </div>
        </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "rolemanagement",
  data() {
    return {
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
    // 用户管理内容
    this.columns = [
      {
        title: "ID",
        dataIndex: "0",

        scopedSlots: { customRender: "0" }
      },
      {
        title: "角色名",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "创建时间",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "用户数量",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "操作",
        dataIndex: "4",
        scopedSlots: { customRender: "操作" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 40; i++) {
      this.data.push({
        0: i + 1,
        1: "丽萍",
        2: "2019-03-12 12:02:20",
        3: "5" + i + "2679"
      });
    }
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        onChange: (selectedRowKeys, selectedRows) => {},
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name
          }
        })
      };
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
