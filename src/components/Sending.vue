<template>
  <div class="app-wraper">
    <Contacts />
    <SendMoney />
  </div>
</template>

<script>
import Contacts from "./Contacts.vue";
import SendMoney from "./SendMoney.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sending",
  components: {
    Contacts,
    SendMoney,
  },
};
</script>

<style>
.app-wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
