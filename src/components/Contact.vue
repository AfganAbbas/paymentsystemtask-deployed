<template>
  <div class="contact">
    <h2>{{ contact.name }}</h2>
    <button class="btn" @click="openMoneyInput(contact.id)">Select</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  props: {
    contact: Object,
  },
  methods: {
    openMoneyInput(id) {
      this.$store.commit("openMoneyInput", id);
    },
  },
};
</script>

<style scoped>
.contact {
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(139, 139, 139);
  padding: 10px 14px;
  border-radius: 30px;
  background: white;
  margin-top: 1em;
}
.btn {
  outline: none;
  border: none;
  background: transparent;
  font-size: 1.2em;
  padding: 4px 8px;
  border-radius: 20px;
  color: white;
  background-color: rgb(0, 162, 255);
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
}
@media (max-width: 560px) {
  .contact {
    padding: 6px 10px;
    font-size: 0.9em;
  }
}
</style>
