<template>
  <div>
    <div class="left">
      <ul class="side_nav">
        <li class="side_nav_list" v-for="item in SideNav" :key="item.index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      
    },
    props: {
      SideNav:Array
    },
    data() {
      return {
        
      };
    },
    methods: {},
  }
</script>
<style>
</style>