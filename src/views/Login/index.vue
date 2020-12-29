<template>
<div>
<Login v-if="isShow" @forgetPass='forgetPass'></Login>
<Forget v-else @forgetLogin='forgetLogin'></Forget>
</div>
</template>

<script>
import Login from '@/views/Login/component/login/index.vue'
import Forget from '@/views/Login/component/forgetPass/index.vue'
export default {
  components:{
    Login,
    Forget
  },
  props:{},
  data(){
    return {
      isShow:true,
    }
  },
methods:{
  forgetPass(){
    this.isShow=!this.isShow
  },
  forgetLogin(){
    this.isShow=!this.isShow
  }
},
created() {
  console.log( document.body.clientHeight)
},
}
</script>
<style scoped>
</style>