<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      list: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
          title: "上海必打卡",
          desc: "中西合璧，现代和传统各有各的精彩"
        },
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg",
          title: "周末亲子爱玩",
          desc:
            "走进自然或玩转乐园，感知大千世界，游乐项目惊险刺激，特色表演异彩纷呈，等你们~"
        },
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg",
          title: "情迷博物馆",
          desc:
            "走进艺术殿堂，电影博物馆生动演绎着电影人和电影背后的故事，你不想知道吗~"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "styles/varibles.scss";
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;
  .item-img {
    width: 100%;
  }
}
.item-info {
  padding: 0.1rem;
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    @include ellipsis;
  }
  .item-desc {
    color: #ccc;
    line-height: 0.4rem;
    @include ellipsis;
  }
}
</style>
