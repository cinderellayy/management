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
        <a-button icon="folder-add">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-table  :rowSelection="rowSelection" :columns="columns" :dataSource="data" bordered :pagination="{ pageSize: 10}">
        <a slot="4" href="javascript:;" class="table-shenhe">删除</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "tuanduishezhi",
  data() {
    return {
      data: [],
      columns: []
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
        1: "201234"+i,
        2: "后台管理",
        3: "高出平",
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
