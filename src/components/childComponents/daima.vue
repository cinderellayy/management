<template>
  <div>
    <div class="guanliyuan-top">
      <table class="right-content2-top w01">
        <tr>
          <td>
            <span class="top-span">选择一个表</span>
          </td>
        </tr>
        <tr>
          <td>
            <a-select defaultValue="" style="width: 120px" @change="handleChange">
              <a-select-option value="">请选择</a-select-option>
              <a-select-option value="lucy">表一</a-select-option>
              <a-select-option value="Yiminghe">表二</a-select-option>
            </a-select>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "daima",
  data() {
    return {
      data: [],
      columns: []
    };
  },
  mounted() {
    
  },
 
  methods: {
   handleChange(value) {
        console.log(`selected ${value}`);
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
