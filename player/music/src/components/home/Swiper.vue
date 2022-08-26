<template lang="">
    <div id='SwiperTop'>
        <!-- <van-button type="primary">主要按钮</van-button> -->
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>

    </div>
</template>

<script>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { getBanner } from "../../request/api/home";

export default {
    setup() {
    const state = reactive({
      images: [],
    });
    onMounted(async () => {
      // axios.get("http://localhost:3000/banner?type=1")
      // .then((res) => {
      //   console.log(res);
      //   state.images = res.data.banners;
      // });
      let res = await getBanner();
      state.images = res.data.banners;
    });
    return { state };
  },
/*   data() {
    return {
      swipeList: [],
    };
  },
  methods: {
    async getSwipeList() {
      let res = await getBanner();
      // console.log(res);
      this.swipeList = res.data.banners;
    },
  },
  mounted() {
    this.getSwipeList();
  }, */
};
</script>

<style lang="less" >
.van-swipe {
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  .van-swipe-item {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.4rem;
    }
  }
}
</style>