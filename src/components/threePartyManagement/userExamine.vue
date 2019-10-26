<template>
  <div>
    <div class="mb20"></div>
    <div class="right-content2-detail">
      <a-table :columns="columns" :dataSource="data" class="mb20" :pagination="false">
        <template slot="title">身份证</template>
        <div slot="7">
          <span class="table-shenhe" @click="showModal('审核通过')">审核通过</span>
          <span class="table-shenhe" @click="showModal('审核拒绝')">审核拒绝</span>
        </div>
      </a-table>
      <a-table :columns="bank" :dataSource="bankData" :pagination="false">
        <template slot="title">银行卡(淘宝账号审核(注册手机号: 13606652529) 手工检测 查看通讯录检测详情 )</template>
        <div slot="11">
          <span class="table-shenhe" @click="showModal('修改')">修改</span>
          <span class="table-shenhe" @click="showModal('审核通过')">审核通过</span>
          <span class="table-shenhe" @click="showModal('审核拒绝')">审核拒绝</span>
        </div>
      </a-table>
    </div>
    <div>
      <a-locale-provider :locale="zhCN">
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='审核通过'">
            <p>确定审核通过吗？</p>
          </div>

          <div v-show="modal=='审核拒绝'">
            <div>
              <p>请选择审核不通过原因</p>
              <a-button
                class="mr20 mb6"
                :class="{'ant-btn-primary':topTab==1}"
                @click="topTab=1"
              >账号未满三年或注册时间未达到一年</a-button>
              <a-button
                class="mr20 mb6"
                :class="{'ant-btn-primary':topTab==2}"
                @click="topTab=2"
              >图片上传不规范，要求：身份证正面照和本人手持身份证露脸照各一张</a-button>
              <a-button
                class="mr20 mb6"
                :class="{'ant-btn-primary':topTab==3}"
                @click="topTab=3"
              >账号违规</a-button>
              <a-button
                class="mr20 mb6"
                :class="{'ant-btn-primary':topTab==4}"
                @click="topTab=4"
              >年龄不符</a-button>
              <a-button
                class="mr20 mb6"
                :class="{'ant-btn-primary':topTab==5}"
                @click="topTab=5"
              >手持身份证模糊，请重新拍摄</a-button>
              <a-button
                class="mr20 mb6"
                :class="{'ant-btn-primary':topTab==6}"
                @click="topTab=6"
              >地址不详要精确到门牌号</a-button>
            </div>

            <div>
              <p>请输入审核不通过原因</p>
              <a-textarea />
            </div>
          </div>

          <div v-show="modal=='修改'">
            <div>
              <p>账号</p>
              <a-input />
            </div>
            <div>
              <p>收件人</p>
              <a-input />
            </div>
            <div>
              <p>收件人手机</p>
              <a-input />
            </div>
            <div>
              <p>城市</p>
              <a-input />
            </div>
            <div>
              <p>详细地址</p>
              <a-input />
            </div>
            <div>
              <p>是否开启花呗</p>
              <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">是</a-radio>
                <a-radio :value="2">否</a-radio>
              </a-radio-group>
            </div>
            <div>
              <p>性别</p>
              <a-radio-group name="radioGroup" :defaultValue="1">
                <a-radio :value="1">男</a-radio>
                <a-radio :value="2">女</a-radio>
              </a-radio-group>
            </div>
          </div>
        </a-modal>
      </a-locale-provider>
    </div>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN"; // 汉化
export default {
  name: "userexamine",
  data() {
    return {
      zhCN,
      data: [],
      bank: [],
      bankData: [],
      columns: [],
      dataModal: [],
      modal: "编辑",
      visible: false,
      topTab: ""
    };
  },
  mounted() {
    this.columns = [
      {
        title: "姓名",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "身份证号",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "审核原因",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "最后更新时间",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "截图",
        dataIndex: "5",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "审核状态",
        dataIndex: "6",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "操作",
        dataIndex: "7",
        scopedSlots: { customRender: "7" }
      }
    ];
    this.bank = [
      {
        title: "淘宝账号",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "收件人",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "收件人手机号",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "城市/详细地址",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "花呗",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "性别",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },
      {
        title: "淘气值",
        dataIndex: "7",
        scopedSlots: { customRender: "7" }
      },
      {
        title: "审核原因",
        dataIndex: "8",

        scopedSlots: { customRender: "8" }
      },
      {
        title: "最后更新时间",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },
      {
        title: "审核状态",
        dataIndex: "10",
        scopedSlots: { customRender: "10" }
      },
      {
        title: "操作",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      }
    ];

    for (let i = 0; i < 1; i++) {
      this.data.push({
        6: "审核通过"
      });
    }
    for (let i = 0; i < 1; i++) {
      this.bankData.push({
        1: "车车",
        2: "车车",
        3: "17512512314",
        4: "四川省-成都市-锦江区 测试地址 ",
        5: "开通",
        6: "未知 ",
        7: "63" + i,
        8: "",
        9: "2019-10-24 13:38:25",
        10: "审核通过 "
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
