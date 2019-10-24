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
        
          <td >
            <span class="right">
              <a-button type="primary" icon="search">搜索</a-button>
              <a-button type="primary" icon="folder-add">添加</a-button>
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
      <a-table
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="{ pageSize: 8 }"
      >
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "liarstatistics",
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
        2: '身份证号',
        3: "QW",
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
