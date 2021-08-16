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
      <!-- 使用 <li>来生成 router-link 的跳转链接 -->
      <router-link tag="li" class="item border-bottom" 
                   v-for="item in list" :key="item.id"
                   :to="{name: 'DetailIndex', params: {id: item.id}}">
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
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
    }
  },
  props: {
    list: Array
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
