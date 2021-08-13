<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!--<router-link tag="li"
                   class="item border-bottom"
                   v-for="item in list"
                   :key="item.id"
                   :to="`/detail/${item.id}`"
      >-->
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">
            ￥{{item.price}} <span class="item-min-price">起</span>
            <span class="item-location">{{item.location}}</span>
          </p>
        </div>
      </li>
<!--      </router-link>-->
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
          "id": "0001",
          "url": "http://localhost/qunar/recommend/84696f368bbec10da3.img.jpg_200x200_50323152.jpg",
          "title": "北京世界园艺博览会",
          "desc": "浪漫世界大都市，绚丽的世界的园艺博览会",
          "price": 108,
          "location": "延庆县"
        },
        {
          "id": "0002",
          "url": "http://localhost/qunar/recommend/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg",
          "title": "八达岭长城",
          "desc": "八达岭长城八达岭长城成人票+梦幻球幕影院+长城礼物（3选1）",
          "price": 30,
          "location": "延庆县"
        },
        {
          "id": "0003",
          "url": "http://localhost/qunar/recommend/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          "title": "故宫",
          "desc": "【上午场】故宫成人票凭身份证快速入园（旺季）",
          "price": 60,
          "location": "东城区"
        },
        {
          "id": "0004",
          "url": "http://localhost/qunar/recommend/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
          "title": "北京欢乐谷",
          "desc": "北京欢乐谷（全天）门票成人票(重游畅玩全天票)",
          "price": 195,
          "location": "朝阳区"
        },
        {
          "id": "0005",
          "url": "http://localhost/qunar/recommend/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg",
          "title": "北京野生动物园",
          "desc": "[平日]北京野生动物园成人票",
          "price": 122,
          "location": "大兴区"
        },
        {
          "id": "0006",
          "url": "http://localhost/qunar/recommend/85c883189bf7293390.water.jpg_200x200_3165123d.jpg",
          "title": "什刹海",
          "desc": "【成人-刷证件入园】恭王府门票+手机电子讲解",
          "price": 9.9,
          "location": "西城区"
        }
      ]
    }
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
@import "~styles/variables.styl"
.title
  margin-top 10px
  line-height 30px
  background: #ccc
  text-indent 10px /* 文字缩进 */
.item
  overflow hidden
  display flex
  height 95px
  .item-img
    width 85px
    height 85px
    padding 5px
  .item-info
    flex 1
    padding 5px
    min-width 0
    font-size 14px
    .item-title
      line-height 27px
      font-size 16px
      ellipsis()
    .item-desc
      line-height 20px
      color: $descTextColor
      ellipsis()
    .item-price
      line-height 22px
      margin-top 10px
      color #ff8c12
      font-size 20px
      .item-min-price
        color #616161
        font-size 12px
      .item-location
        display inline-block
        float right
        right 20px
        bottom 5px
        color #616161
        font-size 12px
</style>
