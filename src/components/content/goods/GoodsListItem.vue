<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad"/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <div class="num-info">
        <span>价格</span>
        <span class="price">{{ goodsItem.price }}</span>
      </div>
      <div class="num-info">
        <span>收藏数</span>
        <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemimageLoad');
      // console.log(this.$bus);

    },
    itemClick(){
      this.$router.push('/detail' + this.goodsItem.iid)
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 60px;
  position: relative;
  width: 48%;
  /* height: 50px; */
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  bottom: 10px;
  left: 0px;
  right: 0px;
  /* padding: 10px 0 10px; */
  /* border: 1px solid red; */
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--mainColor);
  /* margin-right: 20px; */
}
.goods-info .collect {
  position: relative;
}

</style>