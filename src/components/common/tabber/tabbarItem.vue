<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#0eb6ff",
    },
  },
  data() {
    return {
      // isActive:true,
    };
  },
  computed: {
    isActive() {
      // == -1 表示没有找到 ， ！表示非
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((err) => {
        err;
      });
      // console.log(this.path);
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px; /* 一般tabbar为49px */
  font-size: 14px;
}
.tabbar-item img {
  width: 25px;
  height: 25px;
  margin-top: 3px;
  vertical-align: middle;
}
/* .active {
  color: #0eb6ff;
} */
</style>