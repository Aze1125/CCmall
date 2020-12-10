<template >
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >

      <detail-swiper
        v-if="topImages !== 0"
        :top-images="topImages"
      ></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :item-params="itemParams" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" />

    </scroll>
    <detail-bottom-bar @addToCart="addToCart" class="bottom-bar"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isShowBackTop" ></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import GoodsList from "@/components/content/Goods/GoodsList";

import { debounce } from "@/common/unils";
import { itemListenerMinxin, backTopMixin } from "@/common/mixin";
import Scroll from "@/components/common/scroll/Scroll";
import { getDetail, Goods, Shop, getRecommend } from "@/network/detail";
export default {
  name: "Detail",
  components: {
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
  },
  mixins: [itemListenerMinxin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themTopYs: [],
      getThemTopY: null,
      currentIndex: 0,
    };
  },
  created() {
    // 保存传入的id
    this.iid = this.$route.params.iid;
    // 详情页数据开始
    getDetail(this.iid).then((res) => {
      console.log(res);
      // 1.轮播图数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 2商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3店铺信息
      this.shop = new Shop(data.shopInfo);
      // 4商品详情
      this.detailInfo = data.detailInfo;
      // 5 取出参数信息
      this.itemParams = data.itemParams;
      // 6评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 详情页参数评论推荐 d的防抖操作
      this.getThemTopY = debounce(() => {
        // 拿到详情页参数评论推荐的位置
        this.themTopYs = [];
        this.themTopYs.push(0),
          this.themTopYs.push(this.$refs.params.$el.offsetTop);
        this.themTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themTopYs);
      });
    });
    // 详情页数据结束
    // 推荐数据开始
    getRecommend().then((res) => {
      this.recommends = res.data.list;
      // console.log("aaa", res);
    });
    // 推荐数据结束
  },

  methods: {
    // 图片加载
    imageLoad() {
      this.refresh();
      // this.$refs.scroll.refresh();
      this.getThemTopY();
    },

    // 点击详情页导航栏
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themTopYs[index] + 44, 300);
    },

    // 获取顶部参数所在的滚动位置
    contentScroll(position) {
      // 回到顶部
      this.listenShowBackTop(position);
      // 获取y值
      const positionY = -position.y;
      // positionY的值和主题中值进行对比
      let lenght = this.themTopYs.length;
      for (let i = 0; i < lenght; i++) {
        // i为srt。转换为数值// parseInt(i);
        if (
          this.currentIndex !== i &&
          ((i < lenght - 1 &&
            positionY >= this.themTopYs[i] &&
            positionY < this.themTopYs[i + 1]) ||
            (i === lenght - 1 && positionY >= this.themTopYs[i]))
        ) {
          this.currentIndex = i;
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // console.log(position);
    },

    // 加入购物车
    addToCart() {
      // 1获取购物车需要展示的信息
      const product = {};
      product.images = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;
      this.$store.commit('addCart',product)
    },
  },
  mounted() {},
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 100;
  background-color: #fff;
  height: 100vh;
  /* bottom: 100px; */
}

.content {
  height: calc(100%-102px) !important;
  bottom: 49px;
}
/* 导航栏 */
.detail-nav {
  position: relative;
  z-index: 100;
  background-color: #fff;
}
</style>