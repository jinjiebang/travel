<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="scss" scoped>
@import "styles/varibles.scss";
.header {
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  position: relative;
  text-align: center;
  .header-back {
    width: 0.64rem;
    font-size: 0.4rem;
    text-align: center;
    position: absolute;
    color: #fff;
    left: 0;
    top: 0;
  }
}
</style>
