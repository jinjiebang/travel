<template>
  <div class="icons">
    <swiper>
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
  data() {
    return {
      iconList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "热门景点"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
          desc: "东方明珠"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",
          desc: "上海迪士尼"
        },
        {
          id: "004",
          imgUrl:
            "https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png",
          desc: "上海海昌"
        },
        {
          id: "005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "热门景点"
        },
        {
          id: "006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
          desc: "东方明珠"
        },
        {
          id: "007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",
          desc: "上海迪士尼"
        },
        {
          id: "008",
          imgUrl:
            "https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png",
          desc: "上海海昌"
        },
        {
          id: "009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",
          desc: "上海迪士尼"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
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
</style>
