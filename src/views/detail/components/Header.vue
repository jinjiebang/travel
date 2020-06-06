<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      let top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = Math.min(1, top / 140);
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "styles/varibles.scss";
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 0.8rem;
  .header-abs-back {
    color: #ffffff;
  }
}
.header-fixed {
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  .header-fixed-back {
    width: 0.64rem;
    font-size: 0.4rem;
    text-align: center;
    position: absolute;
    color: #fff;
    left: 0;
    top: 0;
  }
}
.content {
  height: 50rem;
}
</style>
