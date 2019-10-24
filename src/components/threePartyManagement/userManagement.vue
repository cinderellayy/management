<template>
  <div>
     <div class="guanliyuan-top mb20">
    <table class="right-content2-top">
      <tr>
        <td>
          <span class="top-span">手机号</span>
          <a-input />
        </td>
        <td>
          <span class="top-span">邀请人ID</span>
          <a-input />
        </td>
        <td>
          <span class="top-span">客户编号</span>
          <a-input />
        </td>
        <td>
          <span class="top-span">客户姓名</span>
          <a-input />
        </td>
        <td>
          <span class="top-span">身份证号</span>
          <a-input />
        </td>
        <td>
          <span class="top-span">银行卡号</span>
          <a-input />
        </td>
        <td>
          <span class="top-span">旺旺号</span>
          <a-input />
        </td>
      </tr>
      <tr>
        <td>
          <span class="top-span">QQ</span>
          <a-input />
        </td>
        <td>
          <span class="top-span">客户等级</span>
          <a-select defaultValue="0" @change="handleChange">
            <a-select-option value="0">--全部--</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </td>
        <td>
          <span class="top-span">是否审核</span>
          <a-select defaultValue="0" @change="handleChange">
            <a-select-option value="0">--待审核--</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </td>
        <td>
          <span class="top-span">业务员</span>
          <a-select defaultValue="0" @change="handleChange">
            <a-select-option value="0">--全部--</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </td>

        <td>
          <span class="top-span">是否冻结</span>
          <a-select defaultValue="0" @change="handleChange">
            <a-select-option value="0">--全部--</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </td>
        <td>
          <span class="top-span">账号审核</span>
          <a-select defaultValue="0" @change="handleChange">
            <a-select-option value="0">--全部--</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </td>
        <td>
          <span class="top-span w100">15天内未接单</span>
          <a-checkbox></a-checkbox>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <span class="top-span">注册时间</span>
          <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
        </td>
        <td colspan="2">
          <span class="top-span">更新时间</span>
          <a-range-picker format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
        </td>
        <td>
          <span class="right">
            <a-button type="primary" icon="search">搜索</a-button>
            <a-button type="primary" icon="download">导出</a-button>
          </span>
        </td>
      </tr>
    </table>
     </div>
    <div class="right-content2-detail">
      <a-table :columns="columns" :roeKey="0" :dataSource="data" bordered :pagination="{ pageSize: 10 }">
        <a slot="审核"  href="javascript:;" class="table-shenhe">审核</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "usermanagement",
  data() {
    return {
      data: [],
      columns: [],
    };
  },
  mounted() {
    // 用户管理内容
    this.columns = [
      {
        title: "",
        dataIndex: "0",

        scopedSlots: { customRender: "0" }
      },
      {
        title: "创建时间",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "手机号",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "用户编号",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "邀请人编号",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "等级",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "通过状态",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "审核状态",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "姓名",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      ,
      {
        title: "身份证号",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },
      { title: "操作", dataIndex: "10", scopedSlots: { customRender: "审核" } },
      {
        title: "最后更新时间",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      },
      {
        title: "操作记录",
        dataIndex: "12",
        scopedSlots: { customRender: "12" }
      }
    ];
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        0: i + 1,
        1: "2019-10-09 14:21:22",
        2: `135` + i + "1267349",
        3: "11723" + i,
        4: "94563" + i + "1" + i,
        5: "LV0",
        6: "未通过",
        7: "待审核",
        8: "王爽",
        9: "220304387249879579",
        10: "审核",
        11: "2019-10-09 14:21:22"
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
