<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "my-bullet-active"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper && this.$refs.mySwiper.$swiper;
    },
    showSwiper() {
      return this.list.length > 0;
    }
  },
  mounted() {
    if (this.swiper) {
      console.log("Current Swiper instance object", this.swiper);
      this.swiper.slideTo(3, 1000, false);
    }
  }
};
</script>
<style lang="scss">
.my-bullet-active {
  background: #fff !important;
  opacity: 0.8 !important;
}
</style>
<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  .swiper-img {
    width: 100%;
    height: 31.25vw;
  }
}
</style>
