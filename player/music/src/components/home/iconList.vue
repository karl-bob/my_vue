<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-kuaisutuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangqi-bofangxiaodianshi"></use>
      </svg>
      <span>私人FM</span>

    </div>

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paixingbang"></use>
      </svg>
      <span>歌单</span>

    </div>

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinle"></use>
      </svg>
      <span>排行榜</span>

    </div>
  </div>
</template>

<style lang="less">
.iconList {
  width: 100%;
  margin-top: .8rem;
  display: flex;
  justify-content: space-around;
  .iconItem {
    align-items: center;
    display: flex;
    flex-direction: column;
    .icon{
        width: 1.4rem;
        height: 1.4rem;
    }
    span{
        font-size: .5rem;
    }

  }
}
</style>