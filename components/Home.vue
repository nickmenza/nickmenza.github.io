<template>
  <div class="profile">
      <div class="my-profile">
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
      <hr>
      <div class="mt-4">
        <div class="paragrah">
        ประสบการณ์พัฒนาเว็บไซต์ประมาณ 3 ปีเท่ากับประสบการณ์ทำงาน มีความเชี่ยวชาญ ReactJs, VueJs, Javasrcipt, Node, Laravel(PHP), Css, Sass, Bootstrap, Html, Docker, Line Notify, Google Login, Google Calendar, Facebook Login
        สามารถทำได้ทั้ง Frontend และ Backend เรียนรู้ได้เร็วและปรับตัวได้เก่งกับสถานการณ์ต่างๆ ตัวอย่างเว็บไซต์ที่เคยทำ ได้แก่ 
        </div>
        <ul>
          <li>
            <a href="https://www.kodanmal.com" target="_blank">
              https://www.kodanmal.com
            </a>
          </li>
          <li>
            <a href="https://zengroup.co.th" target="_blank">
              https://zengroup.co.th
            </a>
          </li>
          <li>
            <a href="https://tr.my-fashioncard.com" target="_blank">
              https://tr.my-fashioncard.com
            </a>
          </li>
          <li>
            <a href="https://www.rakluke.com" target="_blank">
              https://www.rakluke.com
            </a>
          </li>
          <li>
            <a href="https://www.rdkaset.com" target="_blank">
              https://www.rdkaset.com
            </a>
          </li>
        </ul>
        <div class="mt-2 mb-1">
          * บางเว็บไซด์ที่ไม่ได้เอามาลงเป็นระบบปิดไม่สามารถเข้าไปดูได้ แต่จะยกตัวอย่างโดยการถ่ายรูปมาให้ดูครับ
        </div>
        <hr>
        <ul class="list-web">
          <li>
            <a v-on:click="changeTab('mahidol')">
              Mahidol
            </a>
          </li>
          <li>
            <a v-on:click="changeTab('pkpt')">
              PKPT
            </a>
          </li>
        </ul>
        <component :is="webTabComponent" ></component>
      </div>
  </div>
</template>

<script>
  import Mahidol from './mahidol/Mahidol.vue'
  import Pkpt from './pkpt/Pkpt.vue'

  export default {
    name: 'home',
    data() {
      return {
        nameTab : 'mahidol'
      }
    },
    methods: {
      changeTab(nameTab){
        console.log('changeTab')
        this.nameTab = nameTab;
      }
    },
    created() {
      console.log('Home')
    },
    computed :{
      webTabComponent(){
        console.log('webTabComponent')
        if(this.nameTab == 'mahidol'){
          return Mahidol
        }else{
          return Pkpt;
        }
      }
    }
  }
</script>

<style>
.img-profile{
  width: 200px;
  border-radius: 100%;
}
.profile{
  max-width: 671px;
  margin: auto;
  margin-bottom: 40px;
  background-color: white;
  padding: 10px;
  z-index: 1;
  border-radius: 6px;
}
.my-profile{
  display: flex;
  justify-content: center;
}
.profile-detail{
  padding-left: 20px;
}
.profile-title{
  color: #007bff;
}
.list-web{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin-bottom: 20px;
}
.list-web a{
  padding: 10px;
  border : 1px solid black;
  border-bottom: unset;
}
.paragrah{
  text-indent: 1.5em;
}
</style>

