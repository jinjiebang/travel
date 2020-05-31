<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_200x200_3110fb7b.jpg",
          title: "上海迪士尼乐园",
          desc: "全球最大的迪士尼城堡"
        },
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/2005/23/23c1b2b13230b966a3.water.jpg_200x200_f3a19805.jpg",
          title: "上海野生动物园",
          desc: "会跳芭蕾的小海狮们~"
        },
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/2005/9e/9e643f96c84b5c2ea3.water.jpg_200x200_2a3eef5b.jpg",
          title: "上海欢乐谷",
          desc: "敢上1200米长的木质过山车吗？"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "styles/varibles.scss";
.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
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
    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      border: 1px solid transparent;
      color: #fff;
      outline: none;
    }
  }
}
</style>
