<template>
  <div>
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">类型</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">内容</span>
            <a-input />
          </td>

          <td>
            <span class="right">
              <a-button type="primary" icon="search">搜索</a-button>
              <a-button type="primary" icon="folder-add" @click="showModal('添加')">添加</a-button>
            </span>
          </td>
        </tr>
      </table>
    </div>
    <div class="guanliyuan-middle">
      <span>总计：{{data.length}}条记录</span>
      <div class="right">
        <a-button icon="upload">导入</a-button>
        <a-button icon="download">下载模板</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-locale-provider :locale="zhCN">
        <a-table :columns="columns" :dataSource="data" bordered :pagination="pagination"></a-table>
      </a-locale-provider>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div>
            <p>类型</p>
            <a-input />
          </div>
          <div>
            <p>内容</p>
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
  name: "liarstatistics",
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
        title: "创建时间",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "类型",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "内容",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 40; i++) {
      this.data.push({
        1: "2019-10-19 16:35:33",
        2: "身份证号",
        3: "QW"
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
    },
    upload(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} 上传失败`);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
