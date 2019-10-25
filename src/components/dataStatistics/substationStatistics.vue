<template>
  <div class="tixian">
    <div class="guanliyuan-top mb20">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">日期</span>
            <div class="inline-block">
              <a-input class="w04" />-
              <a-input class="w04" />
            </div>
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
          <div slot="10" class="table-shenhe" @click="showModal('信息')">提现</div>
        </a-table>
      </a-locale-provider>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div>
            <p>分站名</p>
            <a-input />
          </div>
          <div>
            <p>金额</p>
            <a-input />
          </div>
          <div>
            <p>备注</p>
            <a-input />
          </div>
        </a-modal>
      </a-locale-provider>
    </div>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN"; // 汉化
export default {
  name: "substationstatistics",
  data() {
    return {
      zhCN,
      data: [],
      columns: [],
      modal: "编辑",
      visible: false,
      pagination: {
        pageIndex: 1,
        pageSize: 10, // 默认每页显示数量
        // showQuickJumper:true,
        showSizeChanger: true, // 显示可改变每页数量
        pageSizeOptions: ["10", "20", "30", "40"], // 每页数量选项
        showTotal: total => `共 ${total} 条数据 `, // 显示总数
        onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
      }
    };
  },
  mounted() {
    // 用户管理内容
    this.columns = [
      {
        title: "分站名称 ",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "日期",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "本金余额",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "商家数",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "店铺数",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "今日新增店铺数",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },
      {
        title: "今日完成单数（垫付单）",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "今日完成单数（浏览单）",
        dataIndex: "8",

        scopedSlots: { customRender: "8" }
      },
      {
        title: "域名",
        dataIndex: "9",
        scopedSlots: { customRender: "9" }
      },
      {
        title: "操作",
        dataIndex: "10",

        scopedSlots: { customRender: "10" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 30; i++) {
      this.data.push({
        1: "分站名称",
        2: "2019-10-09 14:21:22",
        3: "5234" + i,
        4: "94563" + i + "1" + i,
        5: "94563" + i + "1" + i,
        4: "12301",
        6: "2301",
        7: "1062" + i,
        8: i + "202394",
        9: "审核"
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
    showModal(param) {
      this.modal = param;
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
