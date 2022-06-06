<template>
  <div v-show="ShowPage" class="overlay">
    <form @submit="onSubmit">
      <i class="fa-solid fa-xmark" @click="exit"></i>
      <label for="money-bar">Send</label>
      <input
        type="text"
        name="money-bar"
        placeholder="Enter money here"
        v-model="amount"
        id="money-input"
      />
      <button type="submit" class="send-btn">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SendMoney",
  data() {
    return {
      amount: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.amount <= 200 && this.amount > 10) {
        this.$store.commit("sendMoney", this.amount);
      } else {
        alert("Failure, money can be send in 10 and 200 interval");
      }
      this.amount = "";
    },
    exit() {
      this.$store.commit("exit");
    },
  },
  computed: {
    ShowPage() {
      return this.$store.state.showPage;
    },
  },
};
</script>

<style scoped>
.overlay {
  background-color: rgba(204, 204, 204, 0.719);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: white;
  border-radius: 10px;
  padding: 10px;
  font-family: "Oswald", sans-serif;
}
label {
  font-size: 1.4em;
  color: black;
  margin-top: 5px;
  margin-bottom: 20px;
}
input {
  border: 1px solid rgb(128, 128, 128);
  border-radius: 10px;
  padding: 2px 10px;
  outline: none;
  font-size: 1.2em;
  margin-bottom: 18px;
  width: 80%;
}
i {
  position: relative;
  align-self: flex-end;
  color: rgb(238, 0, 0);
  font-size: 1.5em;
  cursor: pointer;
  margin: -3px 2px;
}
.send-btn {
  outline: none;
  border: none;
  background: transparent;
  font-size: 1.2em;
  padding: 4px 8px;
  border-radius: 10px;
  color: white;
  background-color: rgb(0, 162, 255);
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
</style>
