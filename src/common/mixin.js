import { debounce } from "@/common/unils";
import BackTop from "@/components/content/BackTop/BackTop";

// 混入
// 代码复用(多次使用)
export const itemListenerMinxin = {
  data() {
    return {
      itemImageListener: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImageListener = () => {
      this.refresh();
    }
    this.$bus.$on("itemimageLoad", this.itemImageListener)
    // console.log('我是混入中的内容');
  },
}


// 回到顶部
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTop() {
      // ref="scroll"下的scroll(此处在scroll组件下data中的scroll)
      // scrollTo(x坐标,y坐标,时间参数-毫秒)
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      // 调用scroll下的scrollTo()方法
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenShowBackTop(position){
      this.isShowBackTop = -position.y > 1000;
    }
  }
}