<template>
<div>
  <div class="weekend">周末去哪儿</div>
  <div class="weekend-list" v-for="item in weekendList" :key="item.id">
    <div class="weekend-list-img">
      <img :src="item.url">
    </div>
    <div class="weekend-list-title">{{ item.title }}</div>
    <div class="weekend-list-desc">{{ item.desc }}</div>
  </div>
</div>
</template>

<script>
export default {
    name: "HomeWeekend",
  data() {
    return {
      weekendList: [
        {
          "id": "0001",
          "url": "http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          "title": "北京赏花好地方",
          "desc": "乱花渐欲迷人眼，京城赏花大搜索",
          "price": 90
        },
        {
          "id": "0002",
          "url": "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          "title": "京城周末撒欢",
          "desc": "在帝都过周末，不仅仅是城中游！",
          "price": 78
        },
        {
          "id": "0003",
          "url": "http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg",
          "title": "京城溜娃必去",
          "desc": "【德智体美劳全面发展的亲子日，这些地方该去看看…",
          "price": 55
        },
        {
          "id": "0004",
          "url": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
          "title": "帝都必打卡",
          "desc": "来北京必去的景点非这些地方莫属",
          "price": 188
        },
        {
          "id": "0005",
          "url": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          "title": "寻找北京的皇城范儿",
          "desc": "数百年的宫廷庙宇，至今依旧威严霸气",
          "price": 88
        }]
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.weekend
  background: #ccc;
  height 20px
  padding 5px
.weekend-list
  position relative
  //.weekend-list-img
  .weekend-list-title
    position relative
    top 5px
    left 5px
    padding-bottom 5px
    font-size 13px
    color $darkTextColor
    //font-weight bold
  .weekend-list-desc
    position relative
    top 5px
    left 5px
    padding-bottom 10px
    color $descTextColor
</style>
