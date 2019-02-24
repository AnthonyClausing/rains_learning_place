<template>
  <div id="code-screen">
    <div class="stars">
      <h1 class="text">{{'*'.repeat(this.passcode.length)}}</h1>
    </div>
    <h1 class="text">Enter the Secret Code</h1>
    <div class="number-group">
      <div v-for="num in numberImages.slice(0,3)" :key="num.num" @click="numberClickHandler(num.num)">
        <img :src="num.img" class="number">
      </div>
    </div>
    <div class="number-group">
      <div v-for="num in numberImages.slice(3,6)" :key="num.num" @click="numberClickHandler(num.num)">
        <img :src="num.img" class="number">
      </div>
    </div>
    <div class="number-group">
      <div v-for="num in numberImages.slice(6,9)" :key="num.num" @click="numberClickHandler(num.num)">
        <img :src="num.img" class="number">
      </div>
    </div>
        <div class="number-group">
      <div v-for="num in numberImages.slice(9)" :key="num.num" @click="numberClickHandler(num.num)">
        <img :src="num.img" class="number">
      </div>
    </div>
  </div>
</template>

<script>
import constants from '../../constants.js'
import _ from 'lodash'

export default {
  name: "CodeScreen",
  data(){
    return {
      passcode: ''
    }
  },
  computed: {
    numberImages(){
      return _.get(constants,'numbers')
    }
  },
  methods: {
    numberClickHandler(e){
      this.passcode = this.passcode + e
    }
  },
  watch:{
    passcode: function(val){
      console.log(this.passcode)
      if(this.passcode.length === 6){
        console.log('hit the mark')
        this.passcode = ''
      }
    }
  }
}
</script>

<style lang="scss">
  #code-screen{
    width: 43%;
    margin: auto;
    
    .stars{
      height: 3rem;
      
      & > .text{
        font-family: 'Share Tech Mono';
        font-size: 3rem;
        letter-spacing: 1rem;
      }
    }
    .text{
      font-size: 3rem;
    }

    .number-group{
      display: flex;
      justify-content: space-evenly;
      height: auto;
      margin: 1rem;

      .number{
        height: 8rem;
        width: 8rem;
      }
    }
  }
</style>

