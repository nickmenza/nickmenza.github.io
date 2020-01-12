<template>
  <div>
    เว็บไซด์ mahidol ทำระบบเกี่ยว นัดหมายผู้ป่วย บันทึกฟอร์มต่างๆ ใบเสร็จ ปริ้นฟอร์ม ปริ้นใบเสร็จ ฯลฯ<br>
    <Carousel :list_data="list_data" :slide="true"></Carousel>
</div>
</template>

<script>
  import Carousel from '../Carousel.vue'
  export default {
    name : 'mahidol',
    components :{
      Carousel
    },
    data() {
      return {
        list_data : [
          {
            img : '/components/mahidol/medical-index.png'
          },
          {
            img : '/components/mahidol/medical-index1.png'

          }
        ],
        active : 0
      }
    },
  }
</script>

<style>
.carousel-caption{
  background-color: rgba(0,0,0,0.4);
}
/* .carousel-control-next span{
  background-color: rgba(0,0,0,0.8);
} */
</style>
