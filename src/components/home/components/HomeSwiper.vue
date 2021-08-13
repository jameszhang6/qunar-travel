<template>
<div>
  <div class="wrapper">
    <swiper :options="swiperOption" > <!-- ref="mySwiper" -->
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.url" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          "id": "0001",
          "url": "http://localhost/qunar/swiper/dc11f0bb94057224b104a2017f313e21.jpg_750x200_feee379d.jpg"
        },
        {
          "id": "0002",
          "url": "http://localhost/qunar/swiper/17e2352b857f66e9d2948e98dc483bc2.jpg_750x200_2857d0a3.jpg"
        },
        {
          "id": "0003",
          "url": "http://localhost/qunar/swiper/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
        },
        {
          "id": "0004",
          "url": "http://localhost/qunar/swiper/e5104d77fbfdb522bd4fe4f0451e517f.jpg_750x200_7d44f64b.jpg"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
/* fix swiper-pagination color */
/* 样式穿透 */
.wrapper >>> .swiper-pagination-bullet
  background: #fff !important
.wrapper
  overflow hidden
  width 100%
  height: 0
  padding-bottom 26.67%
  background: #eee;
  .swiper-img
    width 100%
</style>
