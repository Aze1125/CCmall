<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <!--  -->
      <tab-control
        ref="tabControl1"
        :titles="['流行', '新款', '精选']"
        calss="tab-control1"
        @tabClick="tabClick"
        v-show="isTabFixed"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollLog"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <home-swiper
        class="home-swiper"
        :banners="banners"
        @swiperimageload="swiperimageload"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <tab-control
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- native监听组件根元素的原生事件 -->
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { debounce } from "@/common/unils";
import { itemListenerMinxin,backTopMixin } from "@/common/mixin";

// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";

// common公共组件
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

// content组件
import TabControl from "@/components/content/tabControl/tabControl";
import GoodsList from "@/components/content/Goods/GoodsList";
import BackTop from "@/components/content/BackTop/BackTop";

// 接口
import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  mixins:[itemListenerMinxin,backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY:0,

    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  destroyed(){
    // console.log(11);
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh(); 
  },
  deactivated(){
    // 保存y值
    this.saveY = this.$refs.scroll.getScrollY();
    // 取消岁全局事件的监听
    this.$bus.$off("itemimageLoad",this.itemImageListener)
  },

  created() {
    // 1请求多个数据
    this.getHomeMultidata();
    // 2请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // //监听item图片加载完成后刷新
    // const refresh = debounce(this.$refs.scroll.refresh);
    // this.itemImageListener =() => {
    //   refresh();
    // }
    // this.$bus.$on("itemimageLoad",this.itemImageListener)
  },
  methods: {
    // 事件监听

    // 中间小标题tab-control的点击
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 回到顶部小icon

    // 监听滚定坐标
    scrollLog(position) {
      // 判断backTop是否显示
      // this.isShowBackTop = -position.y > 1000;
      this.listenShowBackTop(position);
      // 决定tabControl是否吸顶
      this.isTabFixed = (-position.y) >this.tabOffsetTop;
    },
    //上拉加载更多
    loadmore() {
      this.getHomeGoods(this.currentType);
      // 刷新高度
      // this.$reds.scroll.scroll.refresh()
    },
    // 获取tabControl的OffsetTop
    // $el获取组件中的元素的
    // this.tabOffsetTop = this.$refs.tabControl
    swiperimageload() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
/* scoped 作用域仅限此页面*/
#home {
  /* padding-top: 44px; */
  /* vh 视口 */
  height: 100vh;
  position: relative;
}
.home-nav {
  color: #fff;
  background-color: var(--mainColor);
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5; */
}
/* .home-swiper{
} */

.content {
  overflow: hidden;
  position: absolute;
  top: 46px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control{
  position: relative;
}
</style>