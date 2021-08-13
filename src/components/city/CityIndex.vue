<template>
  <div class="city">
    <div class="city-header">
      <div class="header-title">
        <div><span class="iconfont icon-fanhui back-icon"></span></div>
        <div class="select-city-title">城市选择</div>
      </div>
      <div class="header-input-bar">
        <input type="text" class="header-input" placeholder="输入城市名或拼音">
      </div>
    </div>
    <h1 class="my-location-title">我的位置</h1>
    <div class="my-location-city">
      <div class="my-city">重庆</div>
    </div>
    <h1 class="my-hotcity-title">热门城市</h1>
    <div class="hot-cities">
      <div class="hot-city-list">
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
        <div class="hot-city">重庆</div>
      </div>
      <!-- 字母列表 -->
      <div class="letters">
        <!--<div>&nbsp;</div>-->
        <div>A</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>A</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
      </div>
    </div>
    <div style="clear: both;"></div>
    <!-- 字母列表城市 -->
    <div v-for="(letterCity,letter,index) in letterCitys" :key="index">
      <!-- 每个字母 -->
      <h1 class="letter-city">{{ letter }}</h1>
      <!-- 每个字母的城市列表 -->
      <ul style="background:#fff;" >
        <li v-for="city in letterCitys[letter]" :key="city.id" class="city-by-letter">{{ city.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      letterCitys: []
    }
  },
  mounted() {
    // 使用axios请求 mock（模拟） 数据
    this.axios.get(`/api/china_city_data.json`).then(response => { //成功的回调函数
      // response.data 表示返回的 Promise 对象的数据
       const cities = response.data.data.cities;
       this.letterCitys = cities;

    },err => { // 失败回调函数
      console.error(err);
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
@import "~styles/mixins.styl"
.city
  height 100%
  background #eaeaea
  .city-header
    display flex  // 弹性盒子模型
    flex-direction column //盒子内元素列排
    background: $bgColor
    color white
    .header-title
      display flex
      flex-direction row //盒子内元素行排（默认）
      justify-content center
      align-items center //盒子内元素垂直居中
      height 60px
      .back-icon
        font-size 20px
        padding-left 5px
      .select-city-title
        flex 1
        text-align center
        font-size 16px
        font-weight bold
    .header-input-bar
      display flex
      margin 5px
      .header-input
        flex 1
        border 0px
        height 30px
        border-radius 4px
        background: #fff;
        text-align center
        font-size 16px
  .my-location-title,.my-hotcity-title,.letter-city
    padding 10px
    font-size 18px
    color $descTextColor
  .letter-city
    height 18px
    line-height 18px
    vertical-align center
  .my-location-city /* 我的城市 */
    display flex
    align-items center
    height 50px
    background #fff
    .my-city
      width 100px
      height 25px
      line-height 25px
      margin-left 10px
      border 1px solid #d4d2d2
      border-radius 3px
      text-align center //文字水平居中
      vertical-align middle //文字垂直居中
      font-size 16px
      color $darkTextColor
  .hot-cities
    position relative
    float left
    width 100%
    background: #fff;
    .hot-city-list
      float left
      display grid
      grid-template-columns: repeat(3, 1fr); /* fr 单位是一个自适应单位*/
      grid-auto-rows: minmax(25px, auto);
      width 94%
      //border 1px solid red
      padding-top 4px
      padding-bottom 4px
      .hot-city
        city() // mixins.styl中定义的 stylus 函数
    .letters
      position fixed
      right 1px
      width 2%
      padding-right 10px
      padding-top 10px
      text-align right
      font-size 16px
      color $bgColor
    .letters > div
      height 20px
  .city-by-letter
    height 30px
    line-height 30px
    border-bottom 1px solid #eaeaea
    padding-left 15px
    font-size 16px
    color $darkTextColor
</style>
