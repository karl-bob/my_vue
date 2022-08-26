<template>
  <div id="top">
    <div class="topNav">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>

      <div class="topContent">
        <span>我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
      </div>

      <div class="topRight">
        <svg class="icon" aria-hidden="true" @click="$router.push('/Search')">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
#top {
  // padding: 10px;
  .topNav {
    width: 100%;
    display: flex;
    justify-content: space-between;

.icon{
  fill: rgb(60, 161, 255);
}
    .topContent {
      width: 60%;
      display: flex;
      justify-content: space-around;
      font-size: 0.6rem;
      align-items: center;
      color: rgb(62, 83, 87);
      .active {
        font-weight: 600;
      }
    }
  }
}
</style>