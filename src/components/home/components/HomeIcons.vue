<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- 第一页的图标 -->
      <swiper-slide v-for="(slidePage, index) in pages" :key="index">
        <!-- 每一个图标 -->
        <div class="icon" v-for="item of slidePage" :key="item.id">
          <div class="icon-img"><!-- 每一个图标布局 -->
            <img class="icon-content" :src="item.url" :alt="item.desc">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        // autoplay: 2000,
        pagination: '.swiper-pagination',
        loop: false
      },
      iconList: [
        {
          "id": "0001",
          "url": "http://localhost/qunar/icons/f3dd6c383aeb3b02.png",
          "desc": "热门景点"
        },
        {
          "id": "0002",
          "url": "http://localhost/qunar/icons/f0f00d6dfe038c044dbc9a437f58b0eb.png",
          "desc": "北京一日游"
        },
        {
          "id": "0003",
          "url": "http://localhost/qunar/icons/fdf170ee89594b02.png",
          "desc": "北京必游"
        },
        {
          "id": "0004",
          "url": "http://localhost/qunar/icons/c2b659e048b11602.png",
          "desc": "溜娃儿"
        },
        {
          "id": "0005",
          "url": "http://localhost/qunar/icons/0334cf5430b9b5505fd79e2b8d7e8670.png",
          "desc": "爬长城"
        },
        {
          "id": "0006",
          "url": "http://localhost/qunar/icons/9e54a8540fee0102.png",
          "desc": "故宫"
        },
        {
          "id": "0007",
          "url": "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          "desc": "动植物园 "
        },
        {
          "id": "0008",
          "url": "http://localhost/qunar/icons/35d83bb968d80d54926f30cfb92cb6ff.png",
          "desc": "每周好货"
        },
        {
          "id": "0009",
          "url": "http://localhost/qunar/icons/b4511345827006994aa1980a3886f0ac.png",
          "desc": "北京世园会"
        },
        {
          "id": "0010",
          "url": "http://localhost/qunar/icons/338c5b924c5809e8c7b14f60a953c3e2.png",
          "desc": "北京欢乐谷"
        }
      ]
    }
  },
  computed: {
    pages() {
      // 存放swiper每页的数据
      const pages = []

      this.iconList.forEach((item, index) => {
        // 计算swiper 显示数据的页码
        const page = Math.floor(index / 8) // 0, 1

        // 当swiper 对应页无显示的数据时初始化一个空数组来存放数据
        if (!pages[page]) {
          // pages[0] = [1~8张图片对象]
          // pages[1] = [9～10张图片对象]
          pages[page] = [] // 每个元素又是一个数组
        }
        pages[page].push(item)
      })
      return pages
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
@import "~styles/mixins.styl"
.icons >>> .swiper-container /* 样式穿透，.swiper-container为 swiper 组件的容器样式 */
  width 100%
  height 0
  padding-bottom 50%
.icons
  margin-top 5px
  .icon
    position: relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position: absolute
      top: 0
      right 0
      left 0
      bottom: 22px
      box-sizing border-box
      padding: 5px
      .icon-content
        display block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      right 0
      left 0
      bottom: 0
      line-height 22px
      height 22px
      text-align center
      color $darkTextColor
      ellipsis()
</style>
