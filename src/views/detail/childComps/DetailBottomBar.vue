<!--  -->
<template>
  <div class="bottom-bar">

    <div class="bar-item bar-left">
      <div>
        <!-- <i class="icon service"> -->
          <img class="icon shop" src="@/assets/img/detail/service.svg" style="height:25px ">
        <!-- </i> -->
        <span class="text">客服</span>
      </div>
      <div>
        <!-- <i class="icon shop"> -->
          <img class="icon shop" src="@/assets/img/detail/shop.svg" style="height:25px">
        <!-- </i> -->
        <span class="text">店铺</span>
      </div>
      <div>
        <!-- <i class="icon select"> -->
           <img class="icon shop" src="@/assets/img/detail/collect.svg" style="height:25px ">
        <!-- </i> -->
        <span class="text">收藏</span>
      </div>
    </div>

    <div class="bar-item bar-right">
      <div class="cart" >加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  methods:{
    // @click="addToCart"
    // addToCart(){
    //   this.$emit("addToCart")
    // }
  }
}
</script>

<style  scoped>
 /* .bottom-bar{ */
   /* width: 100%; */
   /* height: 58px;
   background-color:#fff;
   position: fixed; 相对自身原来位置
   bottom: 0px;
   z-index: 99;
   display: flex;
   text-align: center;
 } */
  .bottom-bar{
   height: 58px;
   background-color:#fff;

   position: relative; /*相对自身原来位置 */
   /* bottom: 58px; */
   z-index: 10;

   display: flex;
   text-align: center;
 }
 .bar-item{
   flex:1;
   display: flex;
 }
 .bar-item>div{
   flex:1;
 }
 .bar-left .text{
   font-size: 13px;
 }
 .bar-left .icon{
   display: block;
   width: 22px;
   height: 22px;
   margin: 4px auto 1px;
   /* background-color: red; */
 }
 /* .bar-left .service{
   background-position: 0 -54px;
 }
 .bar-left .shop{
    background-position: 0 -98px;
 } */
 .bar-right{
   font-size: 15px;
   color: #fff;
   line-height: 58px;
 }
 .bar-right .cart{
   background-color: var(--mainColor);
   color: #fff;
   width: 60%;
 }
 .bar-right .buy{
   background-color: rgb(230, 135, 135);
   width: 40%;
 }
</style>
