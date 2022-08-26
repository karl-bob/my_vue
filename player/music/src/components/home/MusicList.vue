<template >
  <div class="musicList">
    <div class="musicTop">
      <div class="title">歌单</div>
      <div class="more">查看更多</div>
    </div>

    <div class="musicContent">
      <!-- <van-swipe :loop="false" :width="140" :show-indicators="false">
        <van-swipe-item v-for="item in state.musicList" :key="item.id">
          <router-link :to="{ name: 'DetailsMusic', query: { id: item.id } }">
            <img :src="item.picUrl" />

            <div class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
              </svg>
              <span>{{ modCount(item.playCount) }}</span>
            </div>
            <p class="name">{{ item.name }}</p>
          </router-link>
        </van-swipe-item>
      </van-swipe> -->

      <div class="list">
        <div class="item" v-for="item in state.musicList" :key="item.id">
          <router-link :to="{ name: 'DetailsMusic', query: { id: item.id } }">
            <img :src="item.picUrl" />

            <div class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
              </svg>
              <span>{{ modCount(item.playCount) }}</span>
            </div>
            <p class="name">{{ item.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMusicList } from "../../request/api/home";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      musicList: [],
    });
    function modCount(num) {
      if (num >= 100000000) {
        return (
          (+(Math.round(num / 100000000 + "e2") + "e-2")).toFixed(1) + "亿"
        );
      } else if (num > 10000) {
        return (+(Math.round(num / 10000 + "e2") + "e-2")).toFixed(1) + "万";
      }
    }
    onMounted(async () => {
      let res = await getMusicList();
      state.musicList = res.data.result;
    });
    return { state, modCount };
  },
};
</script>
<style lang="less">
.musicList {
  width: 100%;
  .musicTop {
    margin-top: 0.8rem;
    width: 100%;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;

    align-items: center;
    .title {
      font-size: 0.6rem;
      font-weight: 900;
      line-height: 0.8rem;
    }
    .more {
      width: 2rem;
      height: 0.7rem;
      line-height: 0.7rem;

      // height: 0.7rem;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 0.4rem;

      font-size: 0.4rem;
      text-align: center;
    }
  }
  .musicContent {
    margin-top: 0.3rem;
    width: 100%;
    // height: 4.2rem;
    // background-color: rgb(255, 72, 0);
    // background-color: aqua;
    // display: flex;
    // align-items: center;
    .list {
      width: 100%;
      // height: 5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      // flex-direction: column;
      // background-color: rgb(132, 9, 255);
      // .item {
      //   margin: 0 0.1rem;
      //   position: relative;

      //   height: 3rem;
      //   // background-color: rgb(227, 127, 21);
      //   // position: relative;
      // .playCount {
      //   position: absolute;
      //   top: 0.1rem;
      //   left: 1.1rem;
      //   .icon {
      //     width: 0.5rem;
      //     height: 0.5rem;
      //   }
      //   span {
      //     font-size: 0.4rem;
      //     color: white;
      //   }
      // }
      // .name {
      //   width: 100%;
      //   height: 1.1rem;
      //   //   background-color: rgb(32, 167, 9);

      //   position: absolute;
      //   top: 2.7rem;

      //   overflow: hidden;
      //   text-overflow: ellipsis;

      //   display: -webkit-box;
      //   /*  -webkit-line-clamp 限制在一个块元素显示的文本的行数 */
      //   -webkit-line-clamp: 2;
      //   -webkit-box-orient: vertical;
      // }
      // }
      .item {
        width: 48%;
        position: relative;
        height: 5.5rem;
        // display: flex;
        // flex-wrap: wrap;
        // height: 2rem;
        // background-color: aqua;
        img {
          width: 100%;
          height: 80%;
        }
        .playCount {
          position: absolute;
          top: 0.1rem;
          left: 2.3rem;
          .icon {
            width: 0.5rem;
            height: 0.5rem;
          }
          span {
            font-size: 0.4rem;
            color: white;
          }
        }
        .name {
          width: 100%;
          height: 1.1rem;
            // background-color: rgb(32, 167, 9);

          position: absolute;
          top: 4rem;

          overflow: hidden;
          text-overflow: ellipsis;

          display: -webkit-box;
          /*  -webkit-line-clamp 限制在一个块元素显示的文本的行数 */
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>