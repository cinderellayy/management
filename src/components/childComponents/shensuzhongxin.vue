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
      <a-table :columns="columns" :dataSource="data" bordered :pagination="{ pageSize: 8 }">
        <a slot="13" class="table-shenhe mr10">编辑</a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "shensuzhongxin",
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

        scopedSlots: { customRender: "操作" }
      },
      {
        title: "操作 ",
        dataIndex: "8",

        scopedSlots: { customRender: "8" }
      }
    ];
    this.data = [];
  
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
