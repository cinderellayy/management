<template>
  <div>
    <div class="guanliyuan-middle">
      <span>总计：{{data.length}}条记录</span>
      <div class="right">
        <a-button icon="folder-add" @click="showModal('添加')">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail relative">
      <a-locale-provider :locale="zhCN">
        <a-table :columns="columns" :dataSource="data" bordered :pagination="pagination">
          <div slot="7">
            <span class="table-shenhe mr10" @click="showModal('编辑')">编辑</span>
            <span class="table-shenhe" @click="showModal('删除')">删除</span>
          </div>
        </a-table>
      </a-locale-provider>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal!='删除'">
            <div>
              <p>ios版本号</p>
              <a-input />
            </div>
            <div>
              <p>android版本号</p>
              <a-input />
            </div>
            <div>
              <p>ios是否强制更新</p>
              <a-input />
            </div>
            <div>
              <p>android是否强制更新</p>
              <a-input />
            </div>
            <div>
              <p>ios载链接</p>
              <a-input />
            </div>
            <div>
              <p>android下载链接</p>
              <a-input />
            </div>
          </div>
          <div v-show="modal=='删除'">
            <p>确定要删除吗（该操作无法恢复）？</p>
          </div>
        </a-modal>
      </a-locale-provider>
    </div>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN"; // 汉化
export default {
  name: "editioncontrol",
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
    this.columns = [
      {
        title: "ID",
        dataIndex: "0",

        scopedSlots: { customRender: "0" }
      },
      {
        title: "ios版本号",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "android版本号",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "ios是否强制更新",
        dataIndex: "3",
        scopedSlots: { customRender: "3" }
      },
      {
        title: "android是否强制更新",
        dataIndex: "4",

        scopedSlots: { customRender: "4" }
      },
      {
        title: "ios载链接",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "android下载链接",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },
      {
        title: "操作",
        dataIndex: "7",
        scopedSlots: { customRender: "7" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 40; i++) {
      this.data.push({
        0: i + 1,
        1: "V1.0." + i,
        2: "V1.0.6" + i,
        3: "2",
        4: "2",
        5: "https://fir.im/r7na",
        6: "https://fir.im/r7na"
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
