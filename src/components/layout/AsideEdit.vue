<template>
  <aside>
    <div class="aside_edit_container">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect x="0" y="0" fill="#000" width="100" height="100" /></svg>
      <div class="aside_edit_nav">
        <div class="aside_edit_nav_box">
          <ul>
            <li v-for="(item,ind) in aside_nav_arr" :key="ind">
              <i class="icon_svg" v-html="item.svg"></i>
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>

</template>

<script>
  export default {
    data(){
      return{
        aside_nav_arr:[
          {name:'模板',svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M19.5 10V5a.5.5 0 0 0-.5-.5h-4.5V10h5zm0 1.5h-5v8H19a.5.5 0 0 0 .5-.5v-7.5zm-6.5-7H5a.5.5 0 0 0-.5.5v14c0 .28.22.5.5.5h8v-15zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2z"></path></svg>'},
          {name:'上传',svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12.75 13.81v7.44a.75.75 0 1 1-1.5 0v-7.4L9.49 15.6a.75.75 0 1 1-1.06-1.06l2.35-2.36c.68-.68 1.8-.68 2.48 0l2.35 2.36a.75.75 0 1 1-1.06 1.06l-1.8-1.8zM9 18v1.5H6.75v-.01A5.63 5.63 0 0 1 5.01 8.66a6 6 0 0 1 11.94-.4 5.63 5.63 0 0 1 .3 11.23v.01H15V18h1.88a4.12 4.12 0 1 0-1.5-7.97A4.51 4.51 0 0 0 11 4.5a4.5 4.5 0 0 0-4.43 5.29 4.13 4.13 0 0 0 .68 8.2V18H9z"></path></svg>'}
        ]
      }
    }
  };
</script>

<style scoped="scoped" lang="scss">
  .aside_edit_nav_box{
    position: fixed;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background-color: #0e1318;
    ul{
      li{
        display: block;
        span{
          color: #fff;
        }
        i{
          vertical-align: middle;
          color: #fff;
        }
      }
    }
  }
</style>
