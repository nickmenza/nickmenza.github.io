<template>
       <div>
        <div class="layout">
            <div class="d-flex flex-column">
                <div class="link-menu">
                <ul>
                    <li :class="[component_name == 'home' ? 'active' : '', '']">
                        <router-link to="/" class="">
                            <i class="fas fa-user"></i> 
                            PROFILE
                        </router-link>
                    </li>
                    <li :class="[component_name == 'resume' ? 'active' : '', '']">
                        <router-link to="/#resume" class="">
                            <i class="fas fa-camera-retro"></i>
                            RESUME
                        </router-link>
                    </li>
                    <li :class="[component_name == 'PORTFOLIO' ? 'active' : '', '']">
                        <router-link to="/#portfolio" class="">
                            <i class="fas fa-briefcase"></i>
                            PORTFOLIO
                        </router-link>
                    </li>
                    <li :class="[component_name == 'contact' ? 'active' : '', '']">
                        <router-link to="/#contact" class="">
                            <i class="fas fa-location-arrow"></i>
                            CONTACT
                        </router-link>
                    </li>
                </ul>
                </div>
                <component :is="currentTabComponent" ></component>
            </div>
            
        </div>

        </div>
        
</template>

<script>
export default {
    data() {
        return {
            nav_active : ''
        }
    },
    name: 'app',
    props: ['route_use','component','component_name'],
    methods: {
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
    background-image:  linear-gradient(#bdbdbd, white);
    font-family: 'Kanit', sans-serif !important;
}
.layout{
    margin-top: 20px;
    max-width: 900px;
    margin: auto;
    padding: 10px;
}
.link-menu{
}
.link-menu ul{
    display: flex;
    justify-content: center;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0
}

.link-menu ul li{
    background-color: white;
    padding: 10px;
    border : 1px solid;
    border-right : none;
    border-color: rgba(0, 0, 0, 0.5);
}

.link-menu ul li:last-child{
    border-right : 1px solid;
}
.link-menu ul li.active{
 border-color: red !important;
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

@media (min-width: 992px) { 
    .layout{
        
    }
    .link-menu ul{
        position: fixed;
        justify-content: center;
        flex-direction: column;
    }
    .link-menu ul li{
        border : 1px solid;
        border-bottom : none;
    }
    .link-menu ul li:last-child{
        border-bottom : 1px solid;
    }
}
</style>