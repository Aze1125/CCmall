<template>
  <swiper class="detail-swiper" >
    <swiper-item class="swiper-item" v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  components: {
    SwiperItem,
    Swiper,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.detail-swiper{
  height: 250px;
  overflow: hidden;
}
</style>