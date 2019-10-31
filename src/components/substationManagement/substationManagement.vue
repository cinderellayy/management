<template>
  <div>
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">分站名</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">域名</span>
            <a-input />
          </td>
          <td width="140">
            <span class="right">
              <a-button type="primary" icon="search">搜索</a-button>
            </span>
          </td>
        </tr>
      </table>
    </div>
    <div class="guanliyuan-middle">
      <span>总计：{{data.length}}条记录</span>
      <div class="right">
        <a-button icon="folder-add" @click="showModal('添加')">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
        <a-table :columns="columns" :dataSource="data" bordered :pagination="pagination">
          <img 
            slot="11"
            slot-scope="data"
            :src="data"
             class="cell-img pointer"
            @click="showModal('查看大图')"
          />
          <img 
            slot="12"
            slot-scope="data"
            :src="data"
            class="cell-img pointer"
            @click="showModal('查看大图')"
          />
          <span slot="13" class="table-shenhe mr10" @click="toParent()">分站价格区间管理</span>
        </a-table>
    </div>
    <div>
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='添加'"> 
            <p>输入框</p>
            <a-input />
          </div>
          <img
            v-show="modal=='查看大图'"
            class="appeal-modal-img"
            src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg"
          />
        </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "substationmanagement",
  data() {
    return {
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
        title: "代理名称",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "创建时间",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "本金余额",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "商家数量",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "店铺数量",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "今天新增",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "域名到期时间",
        dataIndex: "7",

        scopedSlots: { customRender: "操作" }
      },
      {
        title: "域名",
        dataIndex: "8",

        scopedSlots: { customRender: "8" }
      },
      {
        title: "银行卡收款账号",
        dataIndex: "9",
        scopedSlots: { customRender: "9" }
      },
      {
        title: "银行卡名称",
        dataIndex: "10",

        scopedSlots: { customRender: "10" }
      },
      {
        title: "客服二维码",
        dataIndex: "11",

        scopedSlots: { customRender: "11" }
      },

      {
        title: "分站登录图",
        dataIndex: "12",

        scopedSlots: { customRender: "12" }
      },

      {
        title: "操作",
        dataIndex: "13",

        scopedSlots: { customRender: "13" }
      }
    ];
    this.data = [];
    // https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg"
    for (let i = 0; i < 40; i++) {
      this.data.push({
        1: "小马资源网 ",
        2: "2019-09-20 10:21:30",
        3: "商家数量",
        4: "店铺数量",
        5: "无",
        6: "无",
        7: "6222 6207 9000 8043 580 ",
        8: "交通银行",
        9: "任伟强",
        10: "管理员",
        11: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        12: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg"
      });
    }
  },
  methods: {
    toParent() {
       this.$emit('childData','substationchildmanagement',"分站价格区间管理");
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
