<template>
  <div class="header">
    <h2>MONEY: {{ getBalance }} AZN</h2>
    <nav>
      <ul>
        <li>
          <router-link class="link" to="/">Send</router-link>
        </li>
        <li><router-link class="link" to="/history">History</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  computed: {
    ...mapGetters(["getBalance"]),
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 162, 255);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.header h2 {
  font-size: 2em;
  color: rgb(0, 162, 255);
  background-color: white;
  padding: 2px 8px;
  border-radius: 6px;
}
.header ul {
  list-style: none;
}
.header li {
  float: left;
  margin-right: 15px;
}
.link {
  text-decoration: none;
  color: white;
  font-size: 1.5em;
}
@media (max-width: 560px) {
  .header h2 {
    font-size: 1.5em;
  }
  .link {
    font-size: 1.2em;
  }
}
</style>
