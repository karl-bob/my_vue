<template>
  <div class="home">
    <TopNav />
    <Swiper />
    <IconList />
    <MusicList />
  </div>
  <!-- <Swiper/> -->
</template>

<script>
import Swiper from "../components/home/Swiper.vue";
import TopNav from "../components/home/TopNav.vue";
import IconList from "../components/home/iconList.vue";
import MusicList from "../components/home/MusicList.vue";

export default {
  name: "Home",
  components: {
    TopNav,
    Swiper,
    IconList,
    MusicList,
  },
};
</script>

<style lang="less">
.home {
  padding: 0 10px;
}
</style>