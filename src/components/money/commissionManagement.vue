<template>
  <div>
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">自增ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">用户名称</span>
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
          <span slot="6" class="table-shenhe mr10" @click="showModal('编辑')">编辑</span>
        </a-table>
    </div>
    <div>
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div>
            <p>佣金金额</p>
            <a-input />
          </div>
          <div>
            <p>总金额</p>
            <a-input />
          </div>
          <div>
            <p>用户名称</p>
            <a-input />
          </div>
        </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "commissionmanagement",
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
    this.columns = [
      {
        title: "自增ID",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "佣金金额",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "总金额",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "用户名称",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "创建时间",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "操作",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 40; i++) {
      this.data.push({
        1: "12233920" + i,
        2: "-20.00",
        3: "80.00",
        4: "张松",
        5: "2019-01-12 20:12"
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
