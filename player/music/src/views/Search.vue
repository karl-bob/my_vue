<template>
  <div class="box">
    <div class="searchTop">
      <svg class="icon liebiao" @click="$router.go(-1)" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>

      <input
        type="text"
        placeholder="周杰伦"
        v-model="state.searchKey"
        @keydown.enter="enter"
      />
    </div>

    <div class="searchHistory" v-show="state.keyWordList.length">
      <span
        v-for="item in state.keyWordList"
        :key="item"
        @click="searchHistory(item)"
      >
        {{ item }}
      </span>
      <svg class="icon" aria-hidden="true" @click="delHistory">
        <use xlink:href="#icon-lajitong"></use>
      </svg>
    </div>

    <div class="musicList">
      <div class="itemListContent">
        <!-- @click="playMusic(i)" -->
        <div class="itemList" v-for="(item, i) in state.searchList" :key="i">
          <div class="listLeft" @click="updateIndex(item)">
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
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { getSearchMusic } from "../request/api/home";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      keyWordList: [],
      searchKey: "",
      searchList: [],
    });
    onMounted(() => {
      state.keyWordList = JSON.parse(localStorage.getItem("keyWordList")) || [];
    });
    return { state };
  },
  methods: {
    ...mapMutations([
      "pushPlayList",
      "updatePlayList",
      "updatePlayListIndex",
      "updatePlayAll",
    ]),

    async enter() {
      if (this.state.searchKey) {
        let res = await getSearchMusic(this.state.searchKey);
        this.state.searchList = res.data.result.songs;

        this.state.keyWordList.unshift(this.state.searchKey.trim());
        this.state.searchKey = "";
        this.state.keyWordList = [...new Set(this.state.keyWordList)];

        if (this.state.keyWordList.length > 5) {
          this.state.keyWordList.pop();
        }
        localStorage.setItem(
          "keyWordList",
          JSON.stringify(this.state.keyWordList)
        );
      }
    },
    async searchHistory(item) {
      let res = await getSearchMusic(item);
      this.state.searchList = res.data.result.songs;
    },
    playMusic(i) {
      this.updatePlayList(this.state.searchMusicList);
      this.updatePlayListIndex(i);
      // this.updatePlayAll();
    },
    delHistory() {
      localStorage.removeItem("keyWordList");
      this.state.keyWordList = [];
      console.log(this.state.keyWordList);
    },
    updateIndex(item) {
      this.$store.commit("pushPlayList", item);
      this.$store.commit(
        "updatePlayListIndex",
        this.$store.state.playList.length - 1
      );
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  padding: 0 0.2rem;
  .searchTop {
    // width: 100%;
    height: 1rem;
    // background-color: aqua;
    display: flex;
    align-items: center;
    input {
      width: 70%;
      height: 0.8rem;
      margin-left: 1rem;
      border: none;
      border-bottom: solid rgb(111, 111, 111) 1px;
    }
  }
  .searchHistory {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    // margin-top: 0.2rem;
    position: relative;
    span {
      margin: 0.2rem;
      background-color: rgb(192, 192, 192);
      padding: 0.05rem 0.2rem;
      border-radius: 0.4rem;
    }
    .icon {
      position: absolute;
      left: 8.5rem;
      width: 0.7rem;
      height: 0.7rem;
    }
  }
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
}
</style>