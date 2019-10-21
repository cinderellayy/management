<template>
  <div class="tixian">
    <div class="guanliyuan-top mb20">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">用户手机号</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">QQ</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">商户ID</span>
            <a-input />
          </td>
         
        </tr>
        <tr>
             <td>
            <span class="top-span">卖家来源</span>
            <a-input />
          </td>
        
          <td>
            <span class="top-span">商户邀请人ID</span>
            <a-input />
          </td>
            <td >
            <span class="top-span">注册时间</span>

            <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
          </td>
           <td >
            <span >
              <a-button type="primary" icon="search">搜索</a-button>
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div class="right-content2-detail">
      <a-table
     
        :columns="columns"
        :dataSource="data"
        bordered
        :pagination="{ pageSize: 8}"
      >
        <a slot="1"  href="javascript:;" >已下架 <span class="table-shenhe">开启</span> </a>
        <a slot="11"  href="javascript:;" class="table-shenhe">更多</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "maijiaguanli",
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
        title: "自动下架状态",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "ID",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "添加时间",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "手机号",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "本金",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "QQ",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "卖家来源",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "邀请人ID",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      ,
      {
        title: "所属分站域名",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },
      {
        title: "冻结金额",
        dataIndex: "10",
        scopedSlots: { customRender: "10" }
      },
      {
        title: "操作",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        1: i + "20191009",
        2: `135` + i + "1267349",
        3:  "2019-10-09 14:21:22",
        5: "94563" + i + "1" + i,
        4: "13044312301",
        6: "13044312301",
        7: "1062" + i ,
        8: i+"202394",
        9: "审核",
        10: "220309",
        11: "2019-10-09 14:21:22",
        
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
