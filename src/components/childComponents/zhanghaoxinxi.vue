<template>
  <div class="tixian">
 
    <div class="guanliyuan-middle">
      <span class="mr10">累计收入: 3.4  </span>
      <span>当前余额: 47.60</span>
    </div>
    <div class="right-content2-detail">
      <a-table
     
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="false"
      >
       
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "zhanghaoxinxi",
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
        title: "时间",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "收支",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "金额",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "余额",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      }
    ];

    this.data = [];
    for (let i = 0; i < 1; i++) {
      this.data.push({
        1: '2019-10-14 14:05:25',
        2: '收入',
        3: "3.40",
        4: "98741.10"
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
