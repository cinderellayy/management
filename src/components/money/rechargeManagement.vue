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
      <a-locale-provider :locale="zhCN">
        <a-table :columns="columns" :dataSource="data" bordered :pagination="pagination">
          <img style="width:50px;heigth:50px" slot="6" slot-scope="data" :src="data" class="pointer" @click="showModal('查看大图')" />
          <a slot="11" class="table-shenhe mr10" @click="showModal('操作')">操作</a>
        </a-table>
      </a-locale-provider>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='操作'">
            <p>是否通过</p> 
            <a-radio-group name="radioGroup" :defaultValue="1">
              <a-radio :value="1">通过</a-radio>
              <a-radio :value="2">不通过</a-radio>
            </a-radio-group>
          </div>
          <div v-show="modal=='操作'">
            <p>备注</p>
            <a-select defaultValue="0" @change="handleChange" class="w01">
              <a-select-option value="0">请选择</a-select-option>
              <a-select-option value="1">浏览单</a-select-option>
              <a-select-option value="2">垫付单</a-select-option>
              <a-select-option value="3">预售单</a-select-option>
            </a-select>
          </div>
          <img  class="appeal-modal-img" src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg" v-show="modal=='查看大图'">
        </a-modal>
      </a-locale-provider>
    </div>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN"; // 汉化
export default {
  name: "rechargemanagement",
  data() {
    return {
      zhCN,
      data: [],
      columns: [],
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
    },
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
