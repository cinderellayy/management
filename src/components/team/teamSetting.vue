<template>
  <div class="tixian">
    <div class="guanliyuan-top">
      <table class="right-content2-top">
        <tr>
          <td>
            <span class="top-span">分站名称</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">队员名称</span>
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
      <div class="right">
        <a-button icon="folder-add" @click="showModal('添加')">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-locale-provider :locale="zhCN">
        <a-table
          :rowSelection="rowSelection"
          :columns="columns"
          :dataSource="data"
          bordered
          :pagination="pagination"
        >
          <span slot="4" class="table-shenhe" @click="showModal('删除')">删除</span>
        </a-table>
      </a-locale-provider>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal!='删除'">
            <div>
              <p>分站名称</p>
              <a-select defaultValue="0" @change="handleChange" class="w01">
                <a-select-option value="0">请选择</a-select-option>
                <a-select-option value="1">小马资源网</a-select-option>
                <a-select-option value="2">大城堡</a-select-option>
                <a-select-option value="3">淡然</a-select-option>
              </a-select>
            </div>
            <div>
              <p>队员名称</p>
              <a-checkbox-group v-show="modal=='添加'" :options="plainOptions" v-model="checkedList" />
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
  name: "teamsetting",
  data() {
    return {
      zhCN,
      data: [],
      columns: [],
      modal: "编辑",
      visible: false,
      plainOptions: ["小马资源网", "大城堡", "淡然"],
      checkedList: [],
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
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "分站名称",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "队员名称",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "操作",
        dataIndex: "4",

        scopedSlots: { customRender: "4" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 30; i++) {
      this.data.push({
        1: "201234" + i,
        2: "后台管理",
        3: "高出平"
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
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
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
