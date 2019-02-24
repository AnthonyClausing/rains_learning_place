<template>
  <div class="home">
    <CodeScreen/>
  </div>
</template>

<script>
// @ is an alias to /src
import CodeScreen from '@/components/CodeScreen.vue'
export default {
  name: 'home',
  components: {
    CodeScreen,
  },
};
</script>
