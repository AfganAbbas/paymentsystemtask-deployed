<template>
  <div class="contact-list">
    <h2 class="heading">Select contact for sending money</h2>
    <div :key="cont.id" v-for="cont in getContacts">
      <Contact :contact="cont" />
    </div>
  </div>
</template>

<script>
import Contact from "./Contact.vue";
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contacts",
  computed: mapGetters(["getContacts"]),
  components: {
    Contact,
  },
};
</script>

<style>
.heading {
  font-size: 1.5em;
  border-bottom: 1px solid rgb(139, 139, 139);
  padding: 2px;
}
.contact-list {
  margin-top: 40px;
  padding: 20px;
  width: 80%;
  color: black;
  box-shadow: 15px 15px 30px rgba(128, 128, 128, 0.692);
}
@media (max-width: 560px) {
  .heading {
    font-size: 1.3em;
  }
}
</style>
