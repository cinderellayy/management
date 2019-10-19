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
        <a-button icon="folder-add">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail relative">
      <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data"  bordered  :pagination="{ pageSize: 10 }" >
        <a slot="操作" href="javascript:;">
          <span class="table-shenhe mr10">编辑</span>
          <span class="table-shenhe">删除</span>
        </a>
      </a-table>
    <a-button  type="danger" class="juese-delete">删除所选</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "quanxian",
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
        dataIndex: "0",

        scopedSlots: { customRender: "0" }
      },
      {
        title: "模块",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "控制器",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "方法",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "创建时间",
        dataIndex: "4",

        scopedSlots: { customRender: "4" }
      },
      {
        title: "操作",
        dataIndex: "5",
        scopedSlots: { customRender: "操作" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 40; i++) {
      this.data.push({
        0: i + 1,
        1: "admin",
        2:'Rejio',
        3:'exaer',
        4: "2019-03-12 12:02:20",
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
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
