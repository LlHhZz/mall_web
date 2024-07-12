<template>
  <router-view/>
</template>

<script>
// import axios from 'axios';
// import $ from 'jquery';

export default {
  setup() {
    // login test
    /*
    axios.post("http://127.0.0.1:3000/user/account/token/", {
      username: "lhz",
      password: "lhz",
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(resp => {
        if(resp.data.error_message === 'success') {
          console.log(resp.data.token)
        }
      })
      .catch(error => {
        console.log(error);
        console.log("用户名或密码错误")
      })
      .finally(() => {
      });
    */

    /*
    $.ajax({
      url: "http://127.0.0.1:3000/user/account/token/",
      type: "POST",
      data: {
          username: 'lhz',
          password: 'lhz',
      },
      success(resp) {
          console.log(resp);
          if(resp.error_message === "success") {
              console.log(resp.token)
          } else {
              console.log(222)
          }
      },
      error(resp) {
          console.log(resp)
      }
    });
    */
  }
}
</script>

<style lang="scss">
html {
  background-color: #f1f2f5;
}
</style>
