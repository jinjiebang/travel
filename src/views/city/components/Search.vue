<template>
  <div>
    <div class="search">
      <input
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          @click="handleCityClick(item.name)"
          :key="item.id"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (!this.keyword) {
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.list = [];
      setTimeout(() => {
        for (let key in this.cities) {
          this.cities[key].forEach(item => {
            if (
              item.name.includes(this.keyword) ||
              item.spell.includes(this.keyword)
            ) {
              this.list.push(item);
            }
          });
        }
      }, 16);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    });
  }
};
</script>
<style lang="scss" scoped>
@import "styles/varibles.scss";
.search {
  height: 0.72rem;
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
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>
