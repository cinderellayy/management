<template>
  <div>
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">用户名</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">昵称</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">手机号码</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">角色</span>
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
        <a-upload
          class="inline-block"
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        
          @change="upload"
        >
          <a-button>
            <a-icon type="upload" />点击上传文件
          </a-button>
        </a-upload>
        <a-button icon="download">导出</a-button>
        <a-button icon="folder-add">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-table
        :rowSelection="rowSelection"
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="{ pageSize: 8 }"
      >
        <a slot="操作" href="javascript:;">
          <span class="table-shenhe mr10">编辑</span>
          <span class="table-shenhe">删除</span>
        </a>
        <img style="width:50px;heigth:50px" slot="4" slot-scope="data" :src="data" />
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "guanliyuan",
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
        title: "ID",
        dataIndex: "0",

        scopedSlots: { customRender: "0" }
      },
      {
        title: "昵称",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "用户名",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "手机号码",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "头像",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "注册时间",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "角色",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "操作",
        dataIndex: "7",

        scopedSlots: { customRender: "操作" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 40; i++) {
      this.data.push({
        0: i + 1,
        1: "丽萍",
        2: `135` + i + "1267349",
        3: "135" + i + "1267349",
        4: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        5: "2019-03-12 12:02:20",
        6: "管理员"
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
