<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_b.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/category.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/category_b.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/car">
        <img slot="item-icon" src="@/assets/img/tabbar/car.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/car_b.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my">
        <img slot="item-icon" src="@/assets/img/tabbar/my.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/my_b.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabber/tabbar";
import TabBarItem from "@/components/common/tabber/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>