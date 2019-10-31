<template>
  <div>
    <div class="guanliyuan-top mb20">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">选择一个表</span>
            <a-select defaultValue style="width: 120px" @change="handleChange">
              <a-select-option value>请选择</a-select-option>
              <a-select-option value="lucy">表一</a-select-option>
              <a-select-option value="Yiminghe">表二</a-select-option>
            </a-select>
          </td>
          <td>
            <span class="top-span">控制器</span>
            <a-input />
          </td>
          <td>
            <span class="top-span">控制器名称</span>
            <a-input />
          </td>
          <td>
            <a-checkbox></a-checkbox>
            <span class="top-span w100">创建权限节点</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="right-content2-detail">
        <a-table
          class="mb20"
          :columns="columns"
          :roeKey="0"
          :dataSource="data"
          bordered
          :pagination="false"
        >
          <template slot="title">
            <a-button type="primary">新增字段</a-button>
          </template>
          <a-input slot="1" />
          <a-input slot="2" />
          <a-input slot="3" />
          <a-input slot="4" />
          <a-checkbox slot="5"></a-checkbox>
          <a-input slot="6" />
          <a-checkbox slot="7"></a-checkbox>
          <a-input slot="8" />
          <a-checkbox slot="9"></a-checkbox>
          <a-checkbox slot="10"></a-checkbox>
          <span slot="11" class="table-shenhe" @click="showModal('删除')">删除</span>
        </a-table>
        <a-table :columns="columnsTwo" :roeKey="0" :dataSource="data" bordered :pagination="false">
          <template slot="title">
            <a-button type="primary">新增搜索字段</a-button>
          </template>
          <a-select slot="1" defaultValue style="width: 120px" @change="handleChange">
            <a-select-option value>请选择</a-select-option>
            <a-select-option value="lucy">表一</a-select-option>
            <a-select-option value="Yiminghe">表二</a-select-option>
          </a-select>
          <a-input slot="2" />
          <a-checkbox slot="3">模糊搜索</a-checkbox>
          <span slot="4" class="table-shenhe" @click="showModal('删除')">删除</span>
        </a-table>
    </div>
    <div>
        <a-modal :title="modal" v-model="visible" @ok="handleOk">
          <div v-show="modal=='删除'">
            <p>确定要删除吗（该操作无法恢复）？</p>
          </div>
        </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "codegeneration",
  data() {
    return {
      data: [],
      columns: [],
      columnsTwo: [],
      modal: "编辑",
      visible: false
    };
  },
  mounted() {
    this.columns = [
      {
        title: "字段名",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "表格组件",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "表格组件",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "显示名",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      },
      {
        title: "添加",
        dataIndex: "5",

        scopedSlots: { customRender: "5" }
      },
      {
        title: "添加规则",
        dataIndex: "6",

        scopedSlots: { customRender: "6" }
      },

      {
        title: "编辑",
        dataIndex: "7",

        scopedSlots: { customRender: "7" }
      },
      {
        title: "编辑规则",
        dataIndex: "8",
        scopedSlots: { customRender: "8" }
      },
      ,
      {
        title: "导出",
        dataIndex: "9",

        scopedSlots: { customRender: "9" }
      },

      {
        title: "导入",
        dataIndex: "10",
        scopedSlots: { customRender: "10" }
      },

      {
        title: "操作",
        dataIndex: "11",
        scopedSlots: { customRender: "11" }
      }
    ];
    this.columnsTwo = [
      {
        title: "字段名",
        dataIndex: "1",

        scopedSlots: { customRender: "1" }
      },
      {
        title: "组件名(类型)",
        dataIndex: "2",

        scopedSlots: { customRender: "2" }
      },
      {
        title: "模糊搜索",
        dataIndex: "3",

        scopedSlots: { customRender: "3" }
      },
      {
        title: "操作",
        dataIndex: "4",
        scopedSlots: { customRender: "4" }
      }
    ];
    for (let i = 0; i < 1; i++) {
      this.data.push({});
    }
  },

  methods: {
    handleChange(value) {},
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
