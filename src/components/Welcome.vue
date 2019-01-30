<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name" v-if="feedback === null">Enter your Name</label>
          <label class="red-text" for="name" v-else>{{feedback}}</label>
          <input type="text" name="name" v-model="name">
          <button class="btn waves-effect waves-light">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: null,
      feedback: null
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat" , params: {name : this.name} })
      } else {
        this.feedback = "You must enter a name to join";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
</style>


