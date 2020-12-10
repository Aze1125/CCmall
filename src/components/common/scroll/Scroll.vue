<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      // 使用时需要传入参数3才可以监听滚动
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 2监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // 要打印的界面使用scroll创建监听事件 如： @scroll="scrollLog"
        this.$emit("scroll", position);
      });
    }
    // 监听滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 加载更多
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 刷新
    refresh() {
      // console.log('--------');
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  top:44px;
  bottom: 49px;
  /* border: 3px solid red; */
}
</style>