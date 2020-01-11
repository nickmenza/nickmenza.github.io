<template>
  <div class="profile">
      <img src="/images/my-profile.jpg" class="img-profile">
      <div class="profile-detail">
        <div class="profile-title">
          Name :
        </div>
        <div>
          Worament Weeramongkhonlert
        </div>
        <div class="profile-title">
          Phone :
        </div>
        <div class="">
          080-4629132
        </div>
        <div class="profile-title">
          Email :
        </div>
        <div class="">
          woramath.nick@gmail.com
        </div>
         <div class="profile-title">
          Date of Birth : 
        </div>
        <div class="">
          January 22, 1994
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
      }
    },
    created() {
      console.log('Home')
    },
  }
</script>

<style>
.img-profile{
  width: 200px;
}
.profile{
  display: flex;
  justify-content: center;
}
.profile-detail{
  padding-left: 20px;
}
.profile-title{
  color: #007bff;
}
</style>

