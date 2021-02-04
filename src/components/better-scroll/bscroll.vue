
<template>
   <div>
     <div class="wrapper" ref="wrapper">
       <div class="content">
         <slot></slot>
       </div>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
   components: {},
   props: {},
   data() {
       return {};
   },
   methods: {

   },
   created(){
     
   },
   mounted() {
      const bs = new BScroll('.wrapper', {
        // pullUpLoad: true,
        // pullDownRefresh: true,
        click:true,
        probeType:3,
        mouseWheel: true,
        scrollY:true,
      })
    }
}

</script>
<style scoped>
.wrapper{
  height: 750px;
  overflow: hidden;
}
</style>