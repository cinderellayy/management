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
        <a-table
          :columns="columns"
          :roeKey="0"
          :dataSource="data"
          bordered
          :pagination="pagination"
        >
          <div slot="01">
            <a-popover trigger="click" placement="topLeft">
              <template slot="content">
                <p class="pointer" @click="showModal('停用')">停用</p>
                <p class="pointer" @click="showModal('启用')">启用</p>
                <p class="pointer" @click="showModal('系统转账')">系统转账</p>
                <p class="pointer" @click="showModal('资金明细')">资金明细</p>
                <p class="pointer" @click="showModal('拉黑名单')">拉黑名单</p>
                <p class="pointer" @click="showModal('清空设备')">清空设备</p>
              </template>
              <a-button>更多</a-button>
            </a-popover>
            <a-button class="ant-btn"  @click="toParent()">审核</a-button>
          </div>
        </a-table>
  
    </div>
    <div>
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='停用'">
            <p>确定要停用该用户么，请填写备注</p>
            <a-textarea :rows="6" />
          </div>
          <div v-show="modal=='启用' ">
            <p>确定要启用该用户吗？</p>
          </div>
          <div v-show="modal=='系统转账'">
            <p>对方账户类型</p>
            <a-radio-group name="radioGroup" :defaultValue="1">
              <a-radio :value="1">商家账户</a-radio>
              <a-radio :value="2">用户账户</a-radio>
              <a-radio :value="3">系统账户</a-radio>
            </a-radio-group>
            <div>
              <p>账户</p>
              <a-input />
            </div>
            <div>
              <p>金额</p>
              <a-input />
            </div>
          </div>
          <div v-show="modal=='资金明细'">
            <div>
              <span class="top-span">冻结资金</span>
              <a-input />
            </div>
            <div>
              <span class="top-span">订单编号</span>
              <a-input />
            </div>
            <div>
              <p class="top-span">操作时间</p>
              <a-range-picker class="w01" format="YYYY-MM-DD" :placeholder="['开始时间', '结束时间']" />
            </div>
            <span class="right mb20">
              <a-button type="primary" class="mr0" icon="search">搜索</a-button>
            </span>
              <a-table :columns="columnsModal" :dataSource="dataModal" bordered :pagination="false"></a-table>
          </div>
          <div v-show="modal=='拉黑名单' ">
            <div>
              <p>用户编号</p>
              <a-input />
            </div>
            <div>
              <p>违规类别</p>
              <a-select defaultValue style="width: 120px" @change="handleChange">
                <a-select-option value>请选择</a-select-option>
                <a-select-option value="1">一类</a-select-option>
                <a-select-option value="2">二类</a-select-option>
              </a-select>
            </div>
            <div>
              <p>截止时间</p>
              <a-input />
            </div>
            <div>
              <p>备注</p>
              <a-textarea :rows="6" />
            </div>
          </div>
           <div v-show="modal=='清空设备' ">
            <p>确定要清空用户设备码吗？</p>
          </div>
        </a-modal>
     
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
      columnsModal: [],
      dataModal: [],
      modal: "编辑",
      visible: false,
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
        title: "",
        dataIndex: "0",

        scopedSlots: { customRender: "0" }
      },
      {
        title: "操作",
        dataIndex: "01",

        scopedSlots: { customRender: "01" }
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

      {
        title: "最后更新时间",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      }
    ];
      this.columnsModal = [
      {
        title: "ID",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "时间",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "收支",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "金额",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "余额",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "类型",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },
      {
        title: "内容",
        dataIndex: "7",
        scopedSlots: { customRender: "7" }
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
    toParent() {
       this.$emit('childData','userexamine',"用户管理审核");
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
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
