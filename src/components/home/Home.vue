<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue';
import { mapGetters } from "vuex";

export default {
  name: ' Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  computed: {
     city: function() {
      console.log('本地存储城市：', localStorage.getItem('myCity'))
      return localStorage.getItem('myCity') || '北京'
    },
    ...mapGetters(['recommendList','weekendList'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
