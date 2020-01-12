<template>
  <div>
    <div class="mb-2">
      เว็บไซด์ mahidol ทำระบบเกี่ยว นัดหมายผู้ป่วย นัดหมายโครงการ บันทึกฟอร์มต่างๆ ใบเสร็จ ปริ้นฟอร์ม ปริ้นใบเสร็จ ฯลฯ
    </div>
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
            img : '/components/mahidol/medical-index1.png',
            detail : 'เวชระเบียนสามารถค้นหา ส่งตัว เพิ่มนัดหมาย ยกเลิกนัดหมาย เลื่อนนัดหมาย'
          },
          {
            img : '/components/mahidol/medical-appointment.png',
            detail : 'หน้าเพื่มนัดหมาย สามารถเลือกวันเวลา ห้อง และ นักกายภาพ'
          },
          {
            img : '/components/mahidol/pt-index.png',
            detail : 'หน้าตารางนัดหมายของ PT สามารถรับตัว จัดการนัดหมายผู้ป่วย ส่งตัวการเงิน ออกใบรับรอง'
          },
          {
            img : '/components/mahidol/pt-medical.png',
            detail : 'หน้าตารางนัดหมายของ PT สามารถรับตัว จัดการนัดหมายผู้ป่วย ส่งตัวการเงิน ออกใบรับรอง'
          },
          {
            img : '/components/mahidol/account-index.png',
            detail : 'หน้าของ Account ค้นหา ส่งกลับแก้ไขค่ารักษา ออกใบเสร็จ'
          },
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
