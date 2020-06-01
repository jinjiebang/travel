<template>
  <div class="header">
    <div class="headerLeft">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="headerInput">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="headerRight">
        {{ city }}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="scss" scoped>
@import "styles/varibles.scss";
.header {
  line-height: $headerHeight;
  display: flex;
  background: $bgColor;
  color: #fff;
  .headerLeft {
    width: 0.64rem;
    float: left;
    .back-icon {
      font-size: 0.4rem;
      text-align: center;
    }
  }
  .headerInput {
    flex: 1;
    background: #fff;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    border-radius: 0.1rem;
    color: #ccc;
  }
  .headerRight {
    width: 1.04rem;
    float: right;
    text-align: center;
    padding: 0 0.1rem;
    color: #fff;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
