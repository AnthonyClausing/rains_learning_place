<template>
  <div id="code-screen">
    <div class="number-group">
    	<div v-for="num in numbersArray(1,2,3)" :key="num">
        	<img :src="`@/src/assets/number${num}`"/>
      	</div>
    </div>
    <div class="number-group">
    	<div v-for="num in numbersArray(4,5,6)" :key="num">
        	<img :src="`@/src/assets/number${num}`"/>
      	</div>
    </div>
    <div class="number-group">
      	<div v-for="num in numbersArray(7,8,9)" :key="num">
        	<img :src="`@/src/assets/number${num}`"/>
      	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeScreen",
  methods: {

    numbersArray : (num1, num2, num3) => [num1,num2,num3]
    
  }
}
</script>

<style lang="scss">

</style>

