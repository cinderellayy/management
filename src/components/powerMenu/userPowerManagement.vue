<template>
  <div>
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">用户ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">用户名</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">权限ID</span>
            <a-input />
          </td>
          <td width="140"></td>
        </tr>
        <tr>
          <td>
            <span class="top-span">模块</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">控制器</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">方法</span>
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
          class="mxh414"
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
        </a-table>
      <a-button type="danger" class="juese-delete bottom-50">删除所选</a-button>
    </div>
    <div>
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal!='删除'">
            <div>
              用户ID
              <a-input />
            </div>
            <div>
              权限ID
              <a-input />
            </div>
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
  name: "userpowermanagement",
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
        title: "用户ID",
        dataIndex: "0",

        scopedSlots: { customRender: "0" }
      },
      {
        title: "用户名",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "权限ID",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "模块",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "控制器",
        dataIndex: "4",

        scopedSlots: { customRender: "4" }
      },
      {
        title: "方法",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "关联时间",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },
      {
        title: "操作",
        dataIndex: "7",
        scopedSlots: { customRender: "操作" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 40; i++) {
      this.data.push({
        0: i + 1,
        1: "admin",
        2: "34" + i,
        3: "admin",
        4: "game",
        5: "index",
        6: "2019-03-12 12:02:20"
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
