<template>
  <div class="tixian">
    <div class="guanliyuan-top">
      <table class="right-content2-top">
        <tr>
          <td>
            <span class="top-span">队员名称</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">日期范围</span>
            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
          <td width="140">
            <span  class="right">
              <a-button type="primary" icon="search">搜索</a-button>
            </span>
          </td>
        </tr>
      </table>
    </div>
    <div class="guanliyuan-middle">
      <span>垫付单量总计: 20 浏览单量总计: 20</span>
    </div>
    <div class="right-content2-detail">
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{ pageSize: 10}"></a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "mytuandui",
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
        title: "日期",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "队员名称",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "完成单量（垫付单）",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "完成单量（浏览单）",
        dataIndex: "4",

        scopedSlots: { customRender: "4" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 30; i++) {
      this.data.push({
        1: "2019-01-10",
        2: "高出平",
        3: "10" + i,
        4: "20" + i
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
