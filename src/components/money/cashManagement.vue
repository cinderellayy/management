<template>
  <div class="tixian">
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">提现状态</span>
            <a-select defaultValue="0" @change="handleChange">
              <a-select-option value="0">申请提现</a-select-option>
              <a-select-option value="1">预处理中</a-select-option>
              <a-select-option value="2">提现成功</a-select-option>
              <a-select-option value="3">提现失败</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">用户编号</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">银行名称</span>
            <a-select defaultValue="0" @change="handleChange">
              <a-select-option value="0">请选择</a-select-option>
              <a-select-option value="1">中国银行</a-select-option>
              <a-select-option value="2">工商银行</a-select-option>
              <a-select-option value="3">交通银行</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">打款账号</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">申请时间</span>

            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
        </tr>
        <tr>
          <td>
            <span class="top-span">客户名称</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">账号</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">是否有说明</span>
            <a-select defaultValue="0" @change="handleChange">
              <a-select-option value="0">请选择</a-select-option>
              <a-select-option value="1">有选择</a-select-option>
              <a-select-option value="2">无选择</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">实际金额</span>
            <a-input />
          </td>

          <td>
            <span class="top-span">处理时间</span>
            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
        </tr>
      </table>
    </div>
    <div class="guanliyuan-middle">
      <div class="right">
        <a-button>搜索</a-button>
        <a-button>预处理导出</a-button>
        <a-button>预处理</a-button>
        <a-button>预处理成功</a-button>
        <a-button>导出</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-table
        :rowSelection="rowSelection"
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="{ pageSize: 8}"
      >
        <template slot="title" class="tixian-title">
          <a-icon type="bars" />
          <a-icon type="folder-open" />
          <a-icon type="printer" />
        </template>
        <a slot="审核"  href="javascript:;" class="table-shenhe">审核</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "cashmanagement",
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
        title: "账号",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "客户",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "银行名称",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "实际金额",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "客户编号",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "客户手机号",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "交易金额",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "申请时间",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      ,
      {
        title: "状态",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },
      {
        title: "打款账号",
        dataIndex: "10",
        scopedSlots: { customRender: "10" }
      },
      {
        title: "处理时间",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      },
      {
        title: "说明",
        dataIndex: "12",
        scopedSlots: { customRender: "12" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        1: i + "20191009",
        2: `135` + i + "1267349",
        3: "11723" + i,
        4: "94563" + i + "1" + i,
        5: "13044312301",
        6: "13044312301",
        7: "1062" + i + "元",
        8: "2019-10-09 14:21:22",
        9: "审核",
        10: "220304387249879579",
        11: "2019-10-09 14:21:22",
        12: ""
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
