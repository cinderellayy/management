<template>
  <div>
  
    <div class="guanliyuan-middle">
      <span>总计：{{data.length}}条记录</span>
      <div class="right">
        <a-button icon="folder-add">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-table
    
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="{ pageSize: 8 }"
      >
        <a slot="3" href="javascript:;">
          <span class="table-shenhe mr10">编辑</span>
          <span class="table-shenhe">删除</span>
        </a>
      
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "yinhangguanli",
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
        title: "银行ID",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "银行名称",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "操作",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 30; i++) {
      this.data.push({
        1: `1` + i + "",
        2:'中国光大银行'
      });
    }
  },

  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
