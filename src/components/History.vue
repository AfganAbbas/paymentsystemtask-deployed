/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div class="history-wraper">
    <div class="history">
      <h1>History</h1>
      <div v-if="getHistory.length">
        <div :key="i" v-for="(hist, i) in getHistory">
          <p>
            Sent {{ hist.amount }} AZN to {{ hist.name }} on {{ hist.date }}
          </p>
        </div>
      </div>
      <div v-else><p>Not any operation</p></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "History",
  methods: {},
  computed: mapGetters(["getHistory"]),
};
</script>

<style scoped>
* {
  color: black;
}
.history-wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.history {
  margin-top: 40px;
  box-shadow: 15px 15px 30px rgba(128, 128, 128, 0.692);
  width: 80%;
  padding: 20px;
}
.history h1 {
  border-bottom: 1px solid rgb(139, 139, 139);
  margin-bottom: 10px;
  font-size: 1.5em;
  padding: 2px;
}
.history div {
  font-size: 1.2em;
  padding: 5px;
}

@media (max-width: 560px) {
  .history h1 {
    font-size: 1.3em;
  }
  .history div {
    font-size: 1em;
  }
}
</style>
