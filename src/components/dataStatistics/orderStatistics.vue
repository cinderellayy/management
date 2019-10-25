<template>
  <div class="tixian">
    <div class="guanliyuan-top mb20">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">年月</span>
            <a-month-picker placeholder @change="selectMonth" class="w060" />
          </td>
          <td>
            <span class="top-span">卖家ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">总量区间</span>
            <div class="inline-block">
              <a-input class="w04" />-
              <a-input class="w04" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <span class="top-span">卖家来源</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">邀请人ID</span>
            <a-input />
          </td>

          <td class="textindent20">
            <span>
              <a-button type="primary" icon="search" class="mr10">搜索</a-button>
              <a-button type="primary" icon="download" class="mr10">导出</a-button>
              <a-button type="primary" icon="save" class="mr10">手工生成</a-button>
            </span>
          </td>
        </tr>
      </table>
    </div>
    <div class="guanliyuan-middle">
      <span>单量来源：提交订单号的单数（垫付加浏览）</span>
    </div>
    <div class="right-content2-detail">
      <a-locale-provider :locale="zhCN">
        <a-table
          :rowSelection="rowSelection"
          :columns="columns"
          :dataSource="data"
          bordered
          :pagination="pagination"
        >
          <template slot="title" class="tixian-title">
            <a-icon type="bars" />
            <a-icon type="folder-open" />
            <a-icon type="printer" />
          </template>
        </a-table>
      </a-locale-provider>
    </div>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN"; // 汉化
export default {
  name: "orderstatistics",
  data() {
    return {
      data: [],
      zhCN,
      columns: [],
      pagination: {
        pageIndex: 1,
        pageSize: 8, // 默认每页显示数量
        // showQuickJumper:true,
        showSizeChanger: true, // 显示可改变每页数量
        pageSizeOptions: ['8',"10", "20", "30", "40"], // 每页数量选项
        showTotal: total => `共 ${total} 条数据 `, // 显示总数
        onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
      }
    };
  },
  mounted() {
    // 用户管理内容
    this.columns = [
      {
        title: "年月",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "商家ID",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "邀请人ID",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "所属商家",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "卖家名称",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      }
    ];
    for (var i = 6; i < 37; i++) {
      this.columns.push({
        title: i - 5,
        dataIndex: i,
        scopedSlots: { customRender: i }
      });
    }
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        1: i + "20191009",
        2: `135` + i + "1267349",
        3: "1123512",
        5: "94563" + i + "1" + i,
        4: "13044312301"
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
