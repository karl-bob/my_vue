<template>
  <div>
    <!-- <nav>
      <router-link to="/"></router-link> |
      <router-link to="/about"></router-link>
    </nav> -->
    <router-view></router-view>
    <FootMusic />
  </div>
</template>

<script>
// import Home from "./views/Home.vue";
import FootMusic from './components/DetailsMusic/FootMusic.vue';
export default {
  components:{
    FootMusic
  }
  // name: "Home",
  // components: {
  //   Home,
  // },
};
</script>

<style>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
a{
  color: black;
}
</style>