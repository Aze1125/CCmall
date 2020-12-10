<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
    overflow-x: scroll;
  text-align: center;
  font-size: 15px;
  padding: 15px 0 15px;
  border-bottom: 10 px solid #eee;
}
.recommend-item {
  flex: 1;

}
.recommend-item img {
  width: 80%;
}
a {
  color: black;
  text-decoration: none;
}
</style>