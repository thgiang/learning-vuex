<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increaseHitCount()">Click here to increase hit count on VueX store</button>
    <p>Your hit count is: {{this.$store.state.count}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    increaseHitCount () {
      this.$store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
