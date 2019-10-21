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
        <a-button icon="folder-add">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-table
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="{ pageSize: 8 }"
      >
        <img style="width:50px;heigth:50px" slot="11" slot-scope="data" :src="data" />
        <img style="width:50px;heigth:50px" slot="12" slot-scope="data" :src="data" />
        <a slot="13" class="table-shenhe mr10">分站价格区间管理</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "fenzhanguanli",
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
