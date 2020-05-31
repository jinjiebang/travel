<template>
  <div class="icons">
    <swiper v-if="showSwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
    showSwiper() {
      return this.list.length > 0;
    }
  }
};
</script>
<style lang="scss">
.icons {
  .swiper-container {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
  }
}
</style>
<style lang="scss" scoped>
@import "styles/varibles.scss";
.icons {
  margin-top: 0.1rem;
  .icon {
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      text-align: center;
      .icon-img-content {
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      margin: 0;
      color: $darkTextColor;
      @include ellipsis;
    }
  }
}
</style>
