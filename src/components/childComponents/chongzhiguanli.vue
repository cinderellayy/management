<template>
  <div class="tixian">
    <div class="guanliyuan-top mb20">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">审核状态</span>
            <a-select defaultValue="0" @change="handleChange">
              <a-select-option value="0">--请选择--</a-select-option>
              <a-select-option value="1">审核通过</a-select-option>
              <a-select-option value="2">未通过</a-select-option>
              <a-select-option value="3">未审核</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">商家手机号</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">创建时间</span>
            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
          <td>
            <span class="top-span">商家编号</span>
            <a-input />
          </td>
        </tr>
        <tr>
          <td>
            <span class="top-span">转账人姓名</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">充值金额</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">审核时间</span>
            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
          <td class="right mr014">
            <a-button type="primary" icon="search">搜索</a-button>
            <a-button type="primary" icon="download">导出</a-button>
          </td>
        </tr>
      </table>
    </div>

    <div class="right-content2-detail">
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{pageSize: 8}">
        <img style="width:50px;heigth:50px" slot="6" slot-scope="data" :src="data" />
        <a slot="11" class="table-shenhe mr10">操作</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "chongzhiguanli",
  data() {
    return {
      data: [],
      columns: []
    };
  },
  mounted() {
    this.columns = [
      {
        title: "ID",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "商户ID",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "充值金额",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "转账人名称",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "商家手机号",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "截图",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "审核状态",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "提交时间",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      ,
      {
        title: "操作人",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },
      {
        title: "审核时间",
        dataIndex: "10",
        scopedSlots: { customRender: "10" }
      },
      {
        title: "操作",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        1: i + "20191009",
        2: "11723" + i,
        3: "11.00",
        4: "Classification",
        5: "17596902373 ",
        6: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        7: "未审核",
        8: "2019-10-20 00:15:47",
        9: "张行",
        10: "2019-10-20 00:15:47"
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
