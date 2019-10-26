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
        <a-button icon="folder-add" @click="showModal('添加')">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-locale-provider :locale="zhCN">
        <a-table
          :rowSelection="rowSelection"
          :columns="columns"
          :dataSource="data"
          bordered
          :pagination="pagination"
          rowKey="2"
        >
          <div slot="操作">
            <span class="table-shenhe mr10" @click="showModal('编辑')">编辑</span>
            <span class="table-shenhe" @click="showModal('删除')">删除</span>
          </div>
          <img style="width:50px;heigth:50px" slot="4" class="pointer" slot-scope="data" :src="data" @click="showModal('查看大图')"/>
        </a-table>
      </a-locale-provider>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='编辑' || modal=='添加'">
            <div>
              昵称
              <a-input />
            </div>
            <div>
              用户名
              <a-input />
              <span>用户名将作为你登陆系统的账号</span>
            </div>
            <div>
              密码
              <a-input />
              <span>无需修改的话, 请勿填写!</span>
            </div>
            <div>
              头像
              <p class="mb-20">
                <a-upload
                  class="inline-block"
                  name="picture"
                  :multiple="false"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  @change="upload"
                >
                  <a-button>
                    <a-icon type="upload" />点击上传头像
                  </a-button>
                </a-upload>
              </p>
              <span>选择图片上传, 支持多图上传, 支持 jpg, gif, png 等格式</span>
            </div>
            <div>
              手机号码
              <a-input />
            </div>
            <div>
              角色
              <a-input />
            </div>
          </div>
          <div v-show="modal=='删除'">
            <p>确定要删除吗（该操作无法恢复）？</p>
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
  name: "administrators",
  data() {
    return {
      zhCN,
      visible: false,
      modal: "编辑",
      data: [],
      columns: [],
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
    for (let i = 0; i < 30; i++) {
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
    upload(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} 上传失败`);
      }
    },
    showModal(param) {
      this.modal = param;
      this.visible = true;
    },
    handleOk(e) {
      this.visible = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
