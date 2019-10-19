<template>
  <div>
    <div class="right-content2-detail relative">
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{ pageSize: 10 }">
        <a slot="操作" href="javascript:;">
          <span class="table-shenhe mr10">编辑</span>
        </a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "xitongsetting",
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
        title: "功能",
        dataIndex: "0",

        scopedSlots: { customRender: "0" }
      },
      {
        title: "值",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "操作",
        dataIndex: "4",
        scopedSlots: { customRender: "操作" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 20; i++) {
      this.data.push({
        0: "app客服二维码",
        1: "50元"
      });
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
