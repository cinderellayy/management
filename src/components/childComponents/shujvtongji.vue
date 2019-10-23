<template>
  <div class="tixian">
    <div class="guanliyuan-top mb20">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">日期</span>
            <div class="inline-block">
              <a-input class="w04" /> -
              <a-input class="w04" />
            </div>
          </td>
          
          <td class="textindent20">
            <span>
              <a-button  type="primary" icon="search" class="mr10">搜索</a-button>
              <a-button  type="primary" icon="download" class="mr10">导出</a-button>
              <a-button  type="primary" icon="save" class="mr10">手工生成</a-button>
            </span>
          </td>
        </tr>
  
      </table>
    </div>
 
    <div class="right-content2-detail">
      <a-table
        :rowSelection="rowSelection"
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="{ pageSize: 10}"
      >
        <template slot="title" class="tixian-title">
          <a-icon type="bars" />
          <a-icon type="folder-open" />
          <a-icon type="printer" />
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "shujvtongji",
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
        title: "更新时间",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "充值笔数",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "手工充值",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "充值",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },  {
        title: "充值总数",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },
      {
        title: "发放订单数（垫付加浏览）",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "提交订单数（垫付加浏览）",
        dataIndex: "8",

        scopedSlots: { customRender: "8" }
      },
      {
        title: "新增卖家",
        dataIndex: "9",
        scopedSlots: { customRender: "9" }
      },
      {
        title: "新增买家",
        dataIndex: "10",

        scopedSlots: { customRender: "10" }
      },
      {
        title: "新增店铺",
        dataIndex: "11",

        scopedSlots: { customRender: "11" }
      },
      {
        title: "今日提现本金",
        dataIndex: "12",

        scopedSlots: { customRender: "12" }
      },
      {
        title: "今日提现人数",
        dataIndex: "13",
        scopedSlots: { customRender: "13" }
      },
      {
        title: "今日做单人数",
        dataIndex: "14",

        scopedSlots: { customRender: "14" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 30; i++) {
      this.data.push({
        1: "2019-10-09 14:21:22",
        3: "5234"+i,
        2:  "2019-10-09 14:21:22",
        4: "94563" + i + "1" + i,
        5: "94563" + i + "1" + i,
        4: "12301",
        6: "2301",
        7: "1062" + i ,
        8: i+"202394",
        9: "审核",
        10: "220309",
        11: "2019-10-09 14:21:22",
         12: i+"202394",
        13: "审核",
       14: "220309",
       
       
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
    selectMonth(date, dateString) {},
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
