<template>
  <header>
    <div class="logo"></div>
    <nav>
      <ul>
        <li>
          <a
            ><div class="inner"><span>首页</span></div></a
          >
        </li>
        <li>
          <a
            ><div class="inner"><span>模板中心</span></div></a
          >
        </li>
        <li>
          <a
            ><div class="inner"><span>素材库</span></div></a
          >
        </li>
        <li>
          <a
            ><div class="inner"><span>玩转Canvas</span></div></a
          >
        </li>
        <li>
          <a
            ><div class="inner"><span>社区</span></div></a
          >
        </li>
        <li>
          <a
            ><div class="inner"><span>网址导航</span></div></a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
header {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid rgba(64, 87, 109, .07);
  display: flex;
  padding: .8rem 0;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  .logo{
    width: 80px;
    height: 40px;
    background: #ccc;
    display: inline-flex;
  }
  ul {
    display: inline-flex;
    li{
      .inner{
        padding: 0 10px;
      }
    }
  }
}
</style>
