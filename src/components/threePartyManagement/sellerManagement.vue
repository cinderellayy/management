<template>
  <div class="tixian">
    <div class="guanliyuan-top mb20">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">用户手机号</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">QQ</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">商户ID</span>
            <a-input />
          </td>
        </tr>
        <tr>
          <td>
            <span class="top-span">卖家来源</span>
            <a-input />
          </td>

          <td>
            <span class="top-span">商户邀请人ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">注册时间</span>

            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
          <td>
            <span>
              <a-button type="primary" icon="search">搜索</a-button>
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
          <span slot="1">
            已下架
            <span class="table-shenhe" @click="showModal('开启')">开启</span>
          </span>
          <span slot="5" slot-scope="text">
            {{text}}
            <span class="table-shenhe" @click="showModal('给卖家充值')">本金充值</span>
          </span>
          <span slot="6" slot-scope="text">
            {{text}}
            <span class="table-shenhe" @click="showModal('金币扣除')">金币扣除</span>
          </span>
          <span class="table-shenhe" slot="9" @click="showModal('卖家来源')" slot-scope="text">{{text}}</span>
          <a-popover trigger="click" placement="topLeft" slot="13">
            <template slot="content">
              <p class="pointer">停用</p>
              <p class="pointer" @click="showModal('系统转账')">系统转账</p>
              <p class="pointer" @click="showModal('资金明细')">资金明细</p>
            </template>
            <a-button>更多</a-button>
          </a-popover>
        </a-table>
      </a-locale-provider>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='开启'">
            <p>确定要开启自动下架功能吗？</p>
          </div>
          <div v-show="modal=='系统转账'">
            <p>对方账户类型</p>
            <a-radio-group name="radioGroup" :defaultValue="1">
              <a-radio :value="1">商家账户</a-radio>
              <a-radio :value="2">用户账户</a-radio>
              <a-radio :value="3">系统账户</a-radio>
            </a-radio-group>
          </div>
          <div v-show="modal=='系统转账'">
            <p>账户</p>
            <a-input />
          </div>
          <div v-show="modal=='系统转账' || modal=='金币扣除' || modal=='给卖家充值' ">
            <p>金额</p>
            <a-input />
          </div>
          <div v-show="modal=='系统转账' || modal=='金币扣除' || modal=='给卖家充值' ">
            <p>备注</p>
            <a-textarea :rows="4" />
          </div>
          <div v-show="modal=='卖家来源'">
            <p>确定要修改卖家来源么，请填写分站名称</p>
            <a-textarea :rows="4" />
          </div>
          <div v-show="modal=='资金明细'">
            <div>
              <span class="top-span">冻结资金</span>
              <a-input />
            </div>
            <div>
              <span class="top-span">订单编号</span>
              <a-input />
            </div>
            <div>
              <p class="top-span">操作时间</p>
              <a-range-picker  class="w01" format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
            </div>
            <span class="right mb20">
              <a-button type="primary" class="mr0" icon="search">搜索</a-button>
            </span>
            <a-locale-provider :locale="zhCN">
              <a-table :columns="columnsModal" :dataSource="dataModal" bordered :pagination="false"></a-table>
            </a-locale-provider>
          </div>
        </a-modal>
      </a-locale-provider>
    </div>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN"; // 汉化
export default {
  name: "sellermanagement",
  data() {
    return {
      zhCN,
      data: [],
      columns: [],
      columnsModal: [],
      dataModal: [],
      modal: "编辑",
      visible: false,
      pagination: {
        pageIndex: 1,
        pageSize: 8, // 默认每页显示数量
        // showQuickJumper:true,
        showSizeChanger: true, // 显示可改变每页数量
        pageSizeOptions: ["8", "10", "20", "30", "40"], // 每页数量选项
        showTotal: total => `共 ${total} 条数据 `, // 显示总数
        onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
      }
    };
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
  mounted() {
    // 用户管理内容
    this.columns = [
      {
        title: "自动下架状态",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "ID",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "添加时间",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "手机号",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "本金",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "金币",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },
      {
        title: "QQ",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "接单",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      {
        title: "卖家来源",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },
      {
        title: "邀请人ID",
        dataIndex: "10",
        scopedSlots: { customRender: "10" }
      },
      {
        title: "所属分站域名",
        dataIndex: "11",

        scopedSlots: { customRender: "11" }
      },
      {
        title: "冻结金额",
        dataIndex: "12",
        scopedSlots: { customRender: "12" }
      },
      {
        title: "操作",
        dataIndex: "13",
        scopedSlots: { customRender: "13" }
      }
    ];
    this.columnsModal = [
      {
        title: "ID",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "时间",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "收支",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "金额",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "余额",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "类型",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },
      {
        title: "内容",
        dataIndex: "7",
        scopedSlots: { customRender: "7" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        1: i + "20191009",
        2: `135` + i + "1267349",
        3: "2019-10-09 14:21:22",
        4: "13044312301",
        5: "63" + i,
        6: "12.00",
        7: "",
        8: "5" + i,
        9: "聚英网" + i,
        10: i + "202394",
        11: "http://www.ifg.com",
        12: "220309"
      });
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
