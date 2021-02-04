
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
     this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click:true,
            probeType:3,
            mouseWheel: true,
          })
          // console.log(this.scroll)
        }
      })
      // const bs = new BScroll('.wrapper', {
      //   click:true,
      //   probeType:3,
      //   mouseWheel: true,
      //   // scrollY:true,
      // })
  },
    updated(){
      const bs = new BScroll('.wrapper', {
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