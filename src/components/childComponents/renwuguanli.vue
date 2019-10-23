<template>
  <div class="tixian">
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">自增ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">店铺ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">商户ID</span>
            <a-input />
          </td>
        
        </tr>
        <tr>
          <td>
            <span class="top-span">任务类型</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">商家手机号</span>
            <a-input />
          </td>
         
          <td class="right mr023">
            <a-button type="primary" icon="search">搜索</a-button>
           
          </td>
        </tr>
      </table>
    </div>
    <div class="guanliyuan-middle">
      <div class="right">
     <a-button icon="folder-add">添加</a-button>
      </div>
    </div>
    <div class="right-content2-detail">
      <a-table
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="{pageSize: 7}"
      >
        <img style="width:50px;heigth:50px" slot="7" slot-scope="data" :src="data" />
        <img style="width:50px;heigth:50px" slot="21" slot-scope="data" :src="data" />
        <a slot="40" class="table-shenhe mr10">操作</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "renwuguanli",
  data() {
    return {
      data: [],
      columns: []
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
        title: "店铺ID",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "商户ID",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "任务类型",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "返款模式",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "商品名称",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "商品图片",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "商品链接",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      ,
      {
        title: "真实价格",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },
      {
        title: "展示价格",
        dataIndex: "10",
        scopedSlots: { customRender: "10" }
      },
      {
        title: "每单数量",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      },
      {
        title: "是否关键字",
        dataIndex: "12",
        scopedSlots: { customRender: "12" }
      },
      {
        title: "关键词",
        dataIndex: "13",

        scopedSlots: { customRender: "13" }
      },
      {
        title: "是否淘口令",
        dataIndex: "14",
        scopedSlots: { customRender: "14" }
      },
      {
        title: "淘口令",
        dataIndex: "15",

        scopedSlots: { customRender: "15" }
      },
      {
        title: "淘口令单数",
        dataIndex: "16",

        scopedSlots: { customRender: "16" }
      },

      {
        title: "是否图片好评",
        dataIndex: "17",

        scopedSlots: { customRender: "17" }
      },
      {
        title: "图片好评关键字",
        dataIndex: "18",
        scopedSlots: { customRender: "18" }
      },
      ,
      {
        title: "图片好评单数",
        dataIndex: "19",

        scopedSlots: { customRender: "19" }
      },
      {
        title: "尺寸",
        dataIndex: "20",
        scopedSlots: { customRender: "20" }
      },
      {
        title: "图片好评图片",
        dataIndex: "21",
        scopedSlots: { customRender: "21" }
      },
      {
        title: "描述",
        dataIndex: "22",
        scopedSlots: { customRender: "22" }
      },
      {
        title: "是否文字好评",
        dataIndex: "23",

        scopedSlots: { customRender: "23" }
      },
      {
        title: "文字好评关键字",
        dataIndex: "24",
        scopedSlots: { customRender: "24" }
      },,
      {
        title: "文字好评单数",
        dataIndex: "25",
        scopedSlots: { customRender: "25" }
      },
      {
        title: "指定的文字好评",
        dataIndex: "26",
        scopedSlots: { customRender: "26" }
      },
      {
        title: "是否设置时间",
        dataIndex: "27",

        scopedSlots: { customRender: "27" }
      },
      {
        title: "发布日期",
        dataIndex: "28",
        scopedSlots: { customRender: "28" }
      },,
      {
        title: "赏金",
        dataIndex: "29",
        scopedSlots: { customRender: "29" }
      },
      {
        title: "是否设置性别",
        dataIndex: "30",

        scopedSlots: { customRender: "30" }
      },
      {
        title: "是否设置年龄",
        dataIndex: "31",
        scopedSlots: { customRender: "31" }
      },
      {
        title: "是否设置淘气值",
        dataIndex: "32",
        scopedSlots: { customRender: "32" }
      },
      {
        title: "是否聊天",
        dataIndex: "33",
        scopedSlots: { customRender: "33" }
      },
      {
        title: "商家额外描述",
        dataIndex: "34",

        scopedSlots: { customRender: "34" }
      },
      {
        title: "总金额",
        dataIndex: "35",
        scopedSlots: { customRender: "35" }
      },
      {
        title: "任务状态",
        dataIndex: "36",
        scopedSlots: { customRender: "36" }
      },
      {
        title: "是否设置预售",
        dataIndex: "37",
        scopedSlots: { customRender: "37" }
      },
      {
        title: "预售日期",
        dataIndex: "38",
        scopedSlots: { customRender: "38" }
      },
      {
        title: "预售时间",
        dataIndex: "39",

        scopedSlots: { customRender: "39" }
      },
    
      {
        title: "操作",
        dataIndex: "40",
        scopedSlots: { customRender: "40" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        1: i + "20191009",
        2: "11723" + i,
        3: "11723" + i,
        4: "手机淘宝",
        5: "平台返款模式 ",
        6:"商品"+i,
        7: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        8: "https://gss0.bdstatic.com",
        9: "35.12",
        10:  "35.12",
        11: "1",
        12: "未选择关键字",
        13: "关键字",
        14: "未选择淘口令",
        15: "",
        16: "0 ",
        17:"未选择图片好评",
        18: "",
        19: "",
        20: "",      
        21: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg",
        22: "",
        23:"选择文字好评",
        24:"重工晚礼服连衣裙气质绣花裙子",
        25:"2",
        26: "我是指定文字1,我是指定文字2",
        27: "",
        28: "2019-10-22",
        29: "0",
        30: "女",
        31: "未选择 ",
        32:"未设置",
        33: "不需聊天",
        34: "",
        35: "0.00",      
        36:"未付款",
        37: "未设置预售时间",
        38:"2019-10-22",
        39:"2019-10-22",
        
      });
    }
  },

  methods: {
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
