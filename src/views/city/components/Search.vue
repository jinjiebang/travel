<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音" />
  </div>
</template>
<script>
export default {
  name: "CitySearch"
};
</script>
<style lang="scss" scoped>
@import "styles/varibles.scss";
.search {
  line-height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0 0.1rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
</style>
