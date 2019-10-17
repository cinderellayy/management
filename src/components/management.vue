<template>
  <div class="management">
    <div class="top">
      <p class="top-title color-title">系统后台</p>
      <p class="right">
        <span class="color-blue mr8">取消审核提醒</span>
        <span class="color-blue mr8">修改密码</span>
        <span class="color-blue mr8">退出</span>
        <span>欢迎您!</span>
      </p>
    </div>
    <div class="left-content">
      <div class="left-title">功能菜单</div>
      <div class="left-detail">
        <p class="list-title">系统菜单</p>
        <div class="list-unit">
          <p>
            <img src="../assets/folder1.jpg" class="folder-icon" /> 用户中心
          </p>
          <ul>
            <li class="unit-active">
              <img src="../assets/document_note.png" class="document-icon" /> 用户管理
            </li>
            <li>
              <img src="../assets/document_note.png" class="document-icon" /> 卖家管理
            </li>
            <li>
              <img src="../assets/document_note.png" class="document-icon" /> 商铺管理
            </li>
            <li>
              <img src="../assets/document_note.png" class="document-icon" /> 任务审核
            </li>
          </ul>
        </div>
        <div class="list-unit">
          <p>
            <img src="../assets/folder1.jpg" class="folder-icon" /> 商家辅助
          </p>
          <ul>
            <li>
              <img src="../assets/document_note.png" class="document-icon" /> 未接监控
            </li>
            <li>
              <img src="../assets/document_note.png" class="document-icon" /> 未接跟踪
            </li>
          </ul>
        </div>
        <div class="list-unit">
          <p>
            <img src="../assets/folder1.jpg" class="folder-icon" /> 数据分析
          </p>
          <ul>
            <li>
              <img src="../assets/document_note.png" class="document-icon" /> 单量日报
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right-content">
      <a-tabs @change="callback" type="card" defaultActiveKey="2">
        <a-tab-pane tab="公告" key="1">公告</a-tab-pane>
        <a-tab-pane tab="用户管理" key="2">
          <div class="right-content2">
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
                  <span class>
                    <a-button type="primary" icon="search">搜索</a-button>
                    <a-button type="primary" icon="search">导出</a-button>
                  </span>
                </td>
              </tr>
            </table>
            <div class="right-content2-detail">
              <a-table
                :columns="columns"
                :dataSource="data"
                bordered
                :pagination="{ pageSize: 12 }"
              >
                <a slot="审核" slot-scope="text" href="javascript:;" class="table-shenhe">审核</a>

                <template
                  v-for="col in ['1', '2', '3','4','5','6','7','8','9','10','11','12']"
                  :slot="col"
                  slot-scope="text, record, index"
                >
                  <div :key="col">
                    <a-input
                      v-if="record.editable"
                      style="margin: -5px 0"
                      :value="text"
                      @change="e => handleChange(e.target.value, record.key, col)"
                    />
                    <template v-else>{{text}}</template>
                  </div>
                </template>
                <template slot="operation" slot-scope="text, record, index">
                  <div class="editable-row-operations">
                    <span v-if="record.editable">
                      <a @click="() => save(record.key)">Save</a>
                      <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                        <a>Cancel</a>
                      </a-popconfirm>
                    </span>
                    <span v-else>
                      <a @click="() => edit(record.key)">Edit</a>
                    </span>
                  </div>
                </template>
              </a-table>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="bottom-content"></div>
  </div>
</template>

<script>
export default {
  name: "management",
  data() {
    return {
      data: [],
      columns: []
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
    this.cacheData = this.data.map(item => ({ ...item }));
  },
  methods: {
    callback(key) {
      console.log(key);
    },
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
.management {
  /* margin: 0 20px; */
  height: 100%;
  border-bottom: 1px solid #8ab3e1;
}
.top {
  margin: 20px;
  overflow: hidden;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
}
.top-title {
  float: left;
  font-size: 26px;
  font-weight: 600;
}
/* .folder-icon {
  width: 16px;
} */
.document-icon {
  width: 10px;
}
.left-content {
  float: left;
  width: 180px;
  text-indent: 6px;
  /* border-right: 1px solid #bdd7f9; */
  height: 100%;
}
.left-title {
  background: #e5f0fe;
  height: 40px;
  line-height: 40px;
}
.left-content .list-title {
  background: #ffe398;
  height: 34px;
  line-height: 34px;
  border-bottom: 0;
}

.list-unit li {
  padding-left: 20px;
}
.left-detail p,
.left-detail li {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px dashed #8ab3e1;
}
li.unit-active {
  padding-left: 24px;
  background: #ffe398;
}
.right-content2-top td {
  padding-bottom: 10px;
}
.right-content2-top .top-span {
  text-align: right;
  width: 60px;
  display: inline-block;
  margin-right: 4px;
}
.ant-tabs-bar {
  background: #e5f0fe !important;
  border-bottom: 1px solid #ceddef;
  margin-bottom: 0 !important;
  padding: 8px 0 0 0;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
  margin-left: 10px;
}
.ant-input-affix-wrapper,
.ant-select {
  width: 60% !important;
}
.right-content {
  border-left: 1px solid #bdd7f9;
  margin-left: 180px;
}
.right-content2 {
  background-color: #f4f4f4;
  padding: 14px 20px;
}
.ant-table-wrapper {
  background-color: #fff;
}
.ant-calendar-picker {
  width: 80%;
}
.ant-table-thead > tr > th,
.ant-table-tbody > tr > td {
  padding: 8px 16px !important;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container {
  height: 32px !important;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
  line-height: 30px !important;
}
.table-shenhe {
  color: #18aeff;
  border-bottom: 1px solid #18aeff;
}
.ant-btn-primary {
  margin-right: 20px;
  background-color: #319eeb !important;
  border-color: #319eeb !important;
}
</style>
