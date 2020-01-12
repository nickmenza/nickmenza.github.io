<template>

<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" :data-slide-to="index" v-for="(item,index) in list_data" v-bind:key="index" :class="[active == index ? 'active' : '', '']"
        v-on:click="change(index)"
    ></li>
    </ol>
    <div class="carousel-inner">
    <div class="carousel-item" v-for="(item,index) in list_data" v-bind:key="index" :class="[active == index ? 'active' : '', '']">
        <img :src="item.img" class="d-block w-100">
        <div class="carousel-caption d-none d-md-block">
            {{item.detail}}
        </div>
    </div>
    </div>
    <a class="carousel-control-prev" role="button" data-slide="prev" v-on:click="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" role="button" data-slide="next" v-on:click="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

</template>

<script>
import Vue from 'vue';
export default {
    name : 'Carousel',
    data() {
        return {
            active : 0,
            interval_slide : setInterval(() => {
                this.next()
            }, 5000)
        }
    },
    props : ['list_data','slide'],
    methods: {
        change(index){
            this.active = index
            clearInterval(this.interval_slide)
            this.interval_slide = setInterval(() => {
                this.next()
            }, 5000)
        },
        next(){
            if(this.list_data.length > 0){
                let len = this.list_data.length -1
                if(this.active < len){
                    this.active++
                }else{
                    this.active = 0
                }
                clearInterval(this.interval_slide)
                this.interval_slide = setInterval(() => {
                    this.next()
                }, 5000)
            }
        },
        prev(){
            if(this.list_data.length > 0){
                let len = this.list_data.length -1
                if(this.active == 0){
                    this.active = len
                }else{
                    this.active--

                }
                clearInterval(this.interval_slide)
                this.interval_slide = setInterval(() => {
                    this.next()
                }, 5000)
            }
        }
    },
    created() {
        let self = this
        console.log('created Carousel',this.list_data)
        if(this.slide){
            this.interval_slide
        }
    },
}
</script>