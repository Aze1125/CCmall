<template>
  <div class="param-info" v-if="Object.keys(itemParams).length !== 0">
    <!-- <div v-for="tables in itemParams.rule.tables"s> -->
      <table
        v-for="(table, index) in itemParams.rule.tables"
        class="info-size"
        :key="index"
      >
        <!--对应尺寸-->
        <tr v-for="(tr, indey) in table" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
        </tr>
      </table>
    <!-- </div> -->
    <table class="info-param">
      <!--图案、厂家.....-->
      <tr v-for="(item, index) in itemParams.info.set" :key="index">
        <td class="info-param-key">{{ item.key }}</td>
        <td class="param-value">{{ item.value }}</td>
      </tr>
    </table>
    <!-- 有图片就展示 -->
    <div class="info-img" v-if="itemParams.info.images">
      <img :src="itemParams.info.images[0]" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>
