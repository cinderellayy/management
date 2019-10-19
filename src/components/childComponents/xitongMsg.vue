<template>
  <div>
 
    <div class="guanliyuan-middle">
      <span>总计：{{data.length}}条记录</span>
      <div class="right">
      
        <a-button icon="folder-add">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail relative">
      <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data"  bordered  :pagination="{ pageSize: 10 }" >
        <a slot="操作" href="javascript:;">
          <span class="table-shenhe mr10">编辑</span>
          <span class="table-shenhe">删除</span>
        </a>
        <img style="width:50px;heigth:50px" slot="4" slot-scope="data" :src="data" />
         
      </a-table>
    <a-button  type="danger" class="juese-delete">删除所选</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "xitongmsg",
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
        title: "消息内容",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "消息名称",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
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
        2: "5" + i + "2679",
      
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
