<template>
  <main>
    <div class="main_container">
      <div class="main_inner">
        <div class="main_header">
          <div class="main_picture">
            <div class="picture_img">
              <img
                src="https://inproductmarketing-static.canva.cn/featureBanners/20201127-DoubleTwelve_x2.jpg"
              />
            </div>
            <div class="picture_desc">
              <h2>创建精彩设计</h2>
              <a>
                <span>1212年末狂欢季，精选促销海报、传单、视频、banner模板</span>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M5 8.83L7.12 6.7a1 1 0 0 0 0-1.42L5 3.17"></path></svg></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
main {
  grid-column: 2/3;
  grid-row: 2/3;
  background:#fff;
  height: 1000px;
}
.main_container {
  padding: 62px 0 0 0;
}
.main_picture {
  position: relative;
  padding: 30px;
  .picture_img {
    width: 100%;
    height: 190px;
    overflow: hidden;
    border-radius: 6px;
    img {
      height: 100%;
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      align-self: flex-start;
      pointer-events: none;
    }
  }
  .picture_desc {
    position: absolute;
    top: 33%;
    left: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    h2 {
      color: inherit;
      font-size: 4.8rem;
    }
    a {
      width: 80%;
      margin: 15px auto 0 auto;
      display: block;
      color: inherit;
      span {
        color: inherit;
      }
      i {
        position: relative;
        top: 2px;
      }
      svg {
        path {
          color: #fff;
        }
      }
    }
    a:hover {
      span {
        text-decoration: underline;
      }
    }
  }
}
</style>