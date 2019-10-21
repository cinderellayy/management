<template>
  <div class="tixian">
    <div class="guanliyuan-top">
      <table class="right-content2-top">
        <tr>
          <td>
            <span class="top-span">用户编号</span>
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
      <span>总计：{{data.length}}条记录</span>
      <div class="right">
        <a-button icon="folder-add">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{ pageSize: 10}">
        <a slot="6" href="javascript:;" class="table-shenhe">删除</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "heimingdanguanli",
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
        title: "拉黑时间",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "截止时间",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "用户编号",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "违规类别",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "拉黑原因",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "操作",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 30; i++) {
      this.data.push({
        1: "2019-10-09 14:21:22",
        2: "2019-10-09 14:21:22",
        3: "1563" + i + "1" + i,
        4: "一级",
        5: "违规"
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
