<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "my-bullet-active"
        }
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_600x330_1abc2773.jpg"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1910/6a/6a22d154133b1422a3.water.jpg_600x330_d383ab63.jpg"
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
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
