<template>
  <div>
    <div class="guanliyuan-top mb20">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">审核状态</span>
            <a-select defaultValue="0" @change="handleChange">
              <a-select-option value="0">--请选择--</a-select-option>
              <a-select-option value="1">未审核</a-select-option>
              <a-select-option value="2">通过</a-select-option>
              <a-select-option value="3">未通过</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">商户ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">创建时间</span>
            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
        </tr>
        <tr>
          <td>
            <span class="top-span">店铺名称</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">商家手机号</span>
            <a-input />
          </td>

          <td>
            <span class="right mr07">
              <a-button type="primary" icon="search">搜索</a-button>
            </span>
          </td>
        </tr>
      </table>
    </div>
    <div class="right-content2-detail">
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{ pageSize: 10 }">
        <a slot="11" href="javascript:;">
          <span class="table-shenhe">审核</span>
          <span class="table-shenhe">拒绝</span>
          <span class="table-shenhe">编辑</span>
          <span class="table-shenhe">转移</span>
          <span class="table-shenhe">删除</span>
        </a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopmanagement",
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
        title: "创建时间",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "商家手机号",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "店铺手机号 ",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "店铺状态",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "店铺名称",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "店铺旺旺",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "商家ID",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "店铺网址",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      ,
      {
        title: "省份 市 县 ",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },
      { title: "备注", dataIndex: "10", scopedSlots: { customRender: "10" } },

      {
        title: "操作",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        1: "2019-10-09 14:21:22",
        2: `135` + i + "1267349",
        3: `158` + i + "1267349",
        4: "审核通过",
        5: "456123sadasdds",
        6: "彭惠州",
        7: "1000001",
        8: "王爽",
        9: "1000001",
        10: "北京市",
        11: "2019-10-09 14:21:22"
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
