<template>
  <div class="tixian">
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">订单状态</span>
            <a-select defaultValue="0" @change="handleChange">
              <a-select-option value="0">申请订单</a-select-option>
              <a-select-option value="1">预处理中</a-select-option>
              <a-select-option value="2">订单成功</a-select-option>
              <a-select-option value="3">订单失败</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">任务编号</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">任务类型</span>
            <a-select defaultValue="0" @change="handleChange">
              <a-select-option value="0">请选择</a-select-option>
              <a-select-option value="1">浏览单</a-select-option>
              <a-select-option value="2">垫付单</a-select-option>
              <a-select-option value="3">预售单</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">订单唯一号</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">接单时间</span>

            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
        </tr>
        <tr>
          <td>
            <span class="top-span">商户ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">商家手机号</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">店铺名</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">买手ID</span>
            <a-input />
          </td>

          <td>
            <span class="top-span">发布时间</span>
            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
        </tr>
        <tr>
          <td>
            <span class="top-span">买家旺旺</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">淘宝订单号</span>
            <a-input />
          </td>
          <td  class="right mr010">
            <a-button type="primary" icon="search">搜索</a-button>
            <a-button type="primary" icon="download">导出</a-button>
          </td>
        </tr>
      </table>
    </div>
    <div class="guanliyuan-middle">
      <div class="right">
        <a-button>未接单批量撤买</a-button>
        <a-button>待操作批量撤买</a-button>
        <a-button>批量解冻</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-table
        :rowSelection="rowSelection"
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="{pageSize: 6}"
      >
        <img style="width:50px;heigth:50px" slot="16" slot-scope="data" :src="data" />
        <img style="width:50px;heigth:50px" slot="17" slot-scope="data" :src="data" />
        <img style="width:50px;heigth:50px" slot="18" slot-scope="data" :src="data" />
        <img style="width:50px;heigth:50px" slot="19" slot-scope="data" :src="data" />
        <img style="width:50px;heigth:50px" slot="20" slot-scope="data" :src="data" />
        <img style="width:50px;heigth:50px" slot="21" slot-scope="data" :src="data" />
        <img style="width:50px;heigth:50px" slot="22" slot-scope="data" :src="data" />
        <a slot="25" class="table-shenhe mr10">撤买</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "dingdanguanli",
  data() {
    return {
      data: [],
      columns: []
    };
  },
  mounted() {
    this.columns = [
      {
        title: "任务唯一号",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "商户ID",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "任务编号",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "任务类型",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "任务店铺名",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "发布时间",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "接单时间",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "买手ID",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      ,
      {
        title: "买手旺旺",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },
      {
        title: "订单状态",
        dataIndex: "10",
        scopedSlots: { customRender: "10" }
      },
      {
        title: "淘宝订单号",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      },
      {
        title: "垫付金额",
        dataIndex: "12",
        scopedSlots: { customRender: "12" }
      },
      {
        title: "用户实付金额",
        dataIndex: "13",

        scopedSlots: { customRender: "13" }
      },
      {
        title: "订单类型",
        dataIndex: "14",
        scopedSlots: { customRender: "14" }
      },
      {
        title: "搜索关键字",
        dataIndex: "15",

        scopedSlots: { customRender: "15" }
      },
      {
        title: "付款截图",
        dataIndex: "16",

        scopedSlots: { customRender: "16" }
      },

      {
        title: "评论截图",
        dataIndex: "17",

        scopedSlots: { customRender: "17" }
      },
      {
        title: "收藏截图",
        dataIndex: "18",
        scopedSlots: { customRender: "18" }
      },
      ,
      {
        title: "加购截图",
        dataIndex: "19",

        scopedSlots: { customRender: "19" }
      },
      {
        title: "关注截图",
        dataIndex: "20",
        scopedSlots: { customRender: "20" }
      },
      {
        title: "浏览任务收藏图片",
        dataIndex: "21",
        scopedSlots: { customRender: "21" }
      },
      {
        title: "浏览任务购物车截图",
        dataIndex: "22",
        scopedSlots: { customRender: "22" }
      },
      {
        title: "撤销详情",
        dataIndex: "23",

        scopedSlots: { customRender: "23" }
      },
      {
        title: "创建时间",
        dataIndex: "24",
        scopedSlots: { customRender: "24" }
      },
      {
        title: "操作",
        dataIndex: "25",
        scopedSlots: { customRender: "25" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        1: i + "20191009",
        2: "11723" + i,
        3: "11723" + i,
        4: "垫付单",
        5: "阿拉斯加 ",
        6: "2019-10-21 19:43:55",
        7: "2019-10-21 19:43:55",
        8: "46265",
        9: "46265",
        10: "未选择",
        11: "46265",
        12: "12.00",
        13: "12.00",
        14: "关键字",
        15: "阿拉斯加 ",
        16: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        17: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        18: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        19: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",      
        20: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        21: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        22: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        23:"撤销详情",
        24:"2019-10-21 19:43:55"
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
