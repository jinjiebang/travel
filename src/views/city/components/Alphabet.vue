<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) of cities"
      :key="key"
      @click="handleClickLetter"
    >
      {{ key }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  methods: {
    handleClickLetter(e) {
      this.$emit("change", e.target.innerText);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "styles/varibles.scss";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
