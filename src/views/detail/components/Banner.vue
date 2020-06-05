<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="banner-img">
        <img
          src="//img1.qunarzz.com/sight/p0/2005/82/8253605ce47e06eba3.water.jpg_600x330_dd0e3a16.jpg"
          alt
        />
      </div>
      <div class="banner-info">
        <div class="banner-title">上海海昌海洋公园</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe616;</span>102
        </div>
      </div>
    </div>
    <gallery
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></gallery>
  </div>
</template>

<script>
import Gallery from "@/components/gallery";
export default {
  name: "DetailBanner",
  data() {
    return {
      imgs: [
        "http://img1.qunarzz.com/sight/p0/2005/82/8253605ce47e06eba3.water.jpg_r_800x800_4f0c207c.jpg",
        "http://img1.qunarzz.com/sight/p0/2003/7d/7d9779fadf1a9750a3.water.jpg_r_800x800_71fe9069.jpg"
      ],
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    Gallery
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
