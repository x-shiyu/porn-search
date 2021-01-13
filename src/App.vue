<template>
  <div>
    {{messages}}
    <h1>{{msgShow}}</h1>
    <button @click="showMsg">click</button>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
/* eslint-disable */
@Options({
  components:{

  }
})
export default class App extends Vue {
  messages = 'xxx'
  get msgShow(){
    return this.messages+'22222'
  }
  showMsg() {

    let name: string = `Gene`;
    this.messages = '11111'
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
