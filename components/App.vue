<template>
       <div>
        <!-- <nav class="navbar navbar-toggleable-md navbar-light bg-faded"> -->
            <!-- <div class="collapse navbar-collapse" id="navbarNav"> -->
            <ul class="navbar-nav">
                <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                <li class="nav-item"><router-link to="/#about" class="nav-link">About</router-link></li>
                <li class="nav-item"><router-link to="/#contact" class="nav-link">Contact</router-link></li>
            </ul>
            <!-- </div> -->
        <!-- </nav> -->
        <router-view class="view"></router-view>
        
        </div>
</template>

<script>


  export default {
        name: 'app',
        props: ['route_use'],
        created() {
            console.log('created App')
            console.log(this.$props.route_use)
        },
        watch: {
            'route_use' (to, from) {
                console.log('route_use')
            }
        },
  }
</script>