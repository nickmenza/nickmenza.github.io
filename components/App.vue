<template>
       <div>
        <!-- <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <ul class="navbar-nav">
                <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                <li class="nav-item"><router-link to="/#about" class="nav-link">About</router-link></li>
                <li class="nav-item"><router-link to="/#contact" class="nav-link">Contact</router-link></li>
            </ul>
        </nav> -->
        <div class="container layout">
            <h4 class="title mb-4">
                Welcome My Profile By Nick
            </h4>
            <div class="link-menu">
                <ul>
                    <li>
                        <router-link to="/" class="">
                            <i class="fas fa-user"></i> 
                            PROFILE
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/#resume" class="">
                            <i class="fas fa-camera-retro"></i>
                            RESUME
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/#portfolio" class="">
                            <i class="fas fa-briefcase"></i>
                            PORTFOLIO
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/#contact" class="">
                            <i class="fas fa-location-arrow"></i>
                            CONTACT
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <component :is="currentTabComponent" ></component>

        </div>
        
</template>

<script>
export default {
    data() {
        return {
        }
    },
    name: 'app',
    props: ['route_use','component','component_name'],
    methods: {
        change : () => {
            console.log('change1')
            this.component_name = 'about';

        }
    },
    created() {
    },
    computed: {
        currentTabComponent () {
            return this.component
        },
    },
}
  
</script>

<style>
body{
    background-image:  linear-gradient(#00abf0, white);
    font-family: 'Kanit', sans-serif !important;
}
.layout{
    margin-top: 20px;
}
.link-menu{
    margin-bottom: 20px;
}
.link-menu ul{
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0
}
.link-menu ul li{
    padding: 10px;
    border : 1px solid black;
    border-right : none;
}
.link-menu ul li:last-child{
    border-right : 1px solid black;
}
.link-menu ul li a{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 17px;
}
.link-menu ul li a i{
    font-size: 30px;
}

.title{
    text-align: center
}
</style>