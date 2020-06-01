<template>
  <ul class="list" ref="current">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleClickLetter"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      itemHeight: 0,
      offsetTop: 0,
      timer: 0
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
    this.itemHeight = this.$refs["A"][0].offsetHeight;
    this.offsetTop = this.$refs["current"].offsetTop;
  },
  computed: {
    letters() {
      return Object.keys(this.cities);
    }
  },
  methods: {
    handleClickLetter(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        setTimeout(() => {
          const touchY = e.touches[0].clientY - this.offsetTop;
          const index = Math.floor((touchY - this.startY) / this.itemHeight);
          if (index > 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
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
