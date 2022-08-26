<template>
  <div class="musicList">
    <div class="title">
      <div class="titleLeft">
        <svg class="icon" aria-hidden="true" @click="playMusic(0)">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span
          >播放全部<span>(共{{ songs.length }}首)</span></span
        >
      </div>
      <div class="titleRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jia"></use>
        </svg>
        <span>收藏({{ subscribedCount }})</span>
      </div>
    </div>

    <div class="itemListContent">
      <!-- @click="playMusic(i)" -->
      <div class="itemList" v-for="(item, i) in songs" :key="i">
        <div class="listLeft" @click="playMusic(i)">
          <span class="index">{{ i + 1 }}</span>
          <div class="content">
            <p>{{ item.name }}</p>
            <p class="author">
              <span v-for="(ar, index) in item.ar" :key="index">
                {{ ar.name }} <span v-if="!ar.name"></span>
              </span>
            </p>
          </div>
        </div>
        <div class="listRight">
          <svg class="icon" aria-hidden="true" v-show="item.mv != 0">
            <use xlink:href="#icon-shipinbofang"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-31liebiao"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  setup(props) {
    // console.log(props);
  },
  methods: {
    ...mapMutations(["updatePlayList","updatePlayListIndex"]),
    playMusic(i) {
      this.updatePlayList(this.songs);
    this.updatePlayListIndex(i)
    },
  },
  props: ["songs", "subscribedCount"],
};
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  // height: 1rem;
  background: rgb(255, 255, 255);

  border-radius: 0.4rem 0.4rem 0 0;
  .title {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0 .2rem;
    // padding-top: .2rem;
    .titleLeft {
      // background-color: rgb(0, 42, 255);
      width: 4rem;
      // background-color: aqua;
      // height: 100%;
      height: 0.8rem;
      margin-left: 0.2rem;
      display: flex;
      //   justify-content: space-between;
      align-items: center;
      .icon {
        width: 0.55rem;
        height: 0.55rem;
        stroke: #333333;
        // stroke-width: 20;
      }
      span {
        font-weight: 700;
        span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
      }
    }
    .titleRight {
      width: 2.6rem;
      height: 0.8rem;
      display: flex;
      align-items: center;
      background: red;
      margin-right: 0.2rem;
      // padding: 0 0.2rem;
      border-radius: 0.4rem;
      color: #fff;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.1rem;
        // background-color: aqua;
      }
      span {
        font-size: 0.2rem;
      }
    }
  }

  .itemListContent {
    width: 100%;
    background: #fff;
    .itemList {
      width: 100%;
      height: 1.4rem;
      // padding: 0 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .listLeft {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        // background-color: aqua;
        .index {
          display: inline-block;
          width: 0.4rem;
          // background-color: rgb(13, 60, 231);
          text-align: center;
        }
        .content {
          width: 100%;
          height: 1.4rem;
          position: relative;

          // background-color: rgb(255, 106, 0);
          p {
            // background-color: rgb(249, 255, 127);
            // width: 100%;
            height: 0.6rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          .author {
            position: absolute;
            top: 0.8rem;
            // background-color: rgb(100, 235, 28);
            font-weight: 400;
            font-size: 0.24rem;
            color: #999;
            // margin-top: 0rem;
          }
          margin-left: 0.3rem;
        }
      }
      .listRight {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        margin-right: 0.4rem;
        .icon {
          position: absolute;
          // z-index: 2;
          fill: #999;
        }
        .liebiao {
          position: absolute;
          right: 0;
        }
      }
    }
    .itemList:hover {
      background: #ddd;
    }
  }
}
</style>
