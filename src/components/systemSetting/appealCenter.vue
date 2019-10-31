<template>
  <div>
    <div class="guanliyuan-top mb20">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">编号ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">申诉人ID</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">被申诉人ID</span>
            <a-input />
          </td>
        </tr>
        <tr>
          <td>
            <span class="top-span">介入状态</span>
            <a-select defaultValue="0">
              <a-select-option value="0">--默认--</a-select-option>
              <a-select-option value="1">待处理</a-select-option>
              <a-select-option value="2">平台介入</a-select-option>
              <a-select-option value="3">平台不介入</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">申诉状态</span>
            <a-select defaultValue="0">
              <a-select-option value="0">--默认--</a-select-option>
              <a-select-option value="1">进行中</a-select-option>
              <a-select-option value="2">完成</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">申诉类型</span>
            <a-select defaultValue="0">
              <a-select-option value="0">--默认--</a-select-option>
              <a-select-option value="1">任务问题</a-select-option>
              <a-select-option value="2">超时未返款</a-select-option>
              <a-select-option value="3">金额填错</a-select-option>
            </a-select>
          </td>
          <td width="140">
            <span class="right">
              <a-button type="primary" icon="search">搜索</a-button>
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div class="right-content2-detail">
        <a-table  :rowSelection="rowSelection" :columns="columns" :dataSource="data" bordered :pagination="pagination">
          <div slot="8"> 
            <span class="table-shenhe mr10"  @click="showModal('查看进度')">查看进度</span> 
            <span class="table-shenhe"  @click="showModal('被申诉统计')">被申诉统计</span> 
          </div>
        </a-table>
    </div>
    <div>
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='查看进度'">
          <div class="mb20">
            <p>申诉内容：客服不在等了10分钟都没回复</p>
            <img
              src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4b1e0ff44da98226accc2375ebebd264/faf2b2119313b07e6a5add8902d7912396dd8c48.jpg"
              class="appeal-modal-img"
            />
          </div>
          <div>
            <a-timeline>
              <a-timeline-item>
                <p>2019-09-01 12:12</p>
                <p>平台介入好的</p>
              </a-timeline-item>
              <a-timeline-item>
                <p>2019-09-01 12:30</p>
                <p>平台介入 完成申诉</p>
              </a-timeline-item>
            </a-timeline>
          </div>
          </div>
          <div v-show="modal=='被申诉统计'">
            <a-table  :columns="columnsModal" :dataSource="dataModal" bordered :pagination="false"> </a-table>
          </div>
        </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "appealcenter",
  data() {
    return {
      data: [],
      dataModal:[],
      columns: [],
      columnsModal:[],
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
        title: "申诉时间",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "申诉类型 ",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "任务编号",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "申诉人ID ",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "被申诉人ID ",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "状态 ",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "平台接入状态 ",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "操作 ",
        dataIndex: "8",

        scopedSlots: { customRender: "8" }
      }
    ];
    this.columnsModal = [
      {
        title: "任务问题",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "超时未返款 ",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "金额填错",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "少返款 ",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "快递问题 ",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "其他问题 ",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      }
    ];
    for (let i = 0; i < 40; i++) {
      this.data.push({
        1: "2019-03-12 12:02:20",
        2: "申诉类型",
        3: "13",
        4: "game",
        5: "354611（商家）",
        6: "完成",
        7: "默认"
      });
    }
    this.dataModal.push({
        1: "1",
        2: "0",
        3: "0",
        4: "0",
        5: "0",
        6: "0",
      });
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
