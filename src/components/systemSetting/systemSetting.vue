<template>
  <div>
    <div class="right-content2-detail relative">
        <a-table :columns="columns" :dataSource="data" bordered :pagination="pagination">
          <div slot="操作">
            <span class="table-shenhe mr10" @click="showModal('编辑')">编辑</span>
          </div>
        </a-table>
    </div>
    <div>
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div>
            <p>功能</p>
            <a-input />
          </div>
          <div>
            <p>值</p>
            <a-input />
          </div>
        </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "systemsetting",
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
        title: "功能",
        dataIndex: "0",

        scopedSlots: { customRender: "0" }
      },
      {
        title: "值",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "操作",
        dataIndex: "4",
        scopedSlots: { customRender: "操作" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 20; i++) {
      this.data.push({
        0: "app客服二维码",
        1: "50元"
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
