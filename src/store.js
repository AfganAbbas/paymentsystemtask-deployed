import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    contacts: [
      { id: 1, name: "Akif", balance: 0 },
      { id: 2, name: "Anar", balance: 0 },
      { id: 3, name: "Fuad", balance: 0 },
      { id: 4, name: "Murad", balance: 0 },
      { id: 5, name: "Tural", balance: 0 },
    ],
    history: [],
    myBalance: 1000,
    showPage: false,
    lastPersonId: "",
  },
  getters: {
    getBalance(state) {
      return state.myBalance;
    },
    getContacts(state) {
      return state.contacts;
    },
    getHistory(state) {
      return state.history;
    },
  },
  mutations: {
    openMoneyInput(state, id) {
      state.lastPersonId = id;
      state.showPage = true;
    },
    exit(state) {
      state.showPage = false;
    },
    sendMoney(state, amount) {
      if (state.myBalance - amount >= 0) {
        state.contacts = state.contacts.map((contact) => {
          if (contact.id == state.lastPersonId) {
            if (
              contact.balance + Number(amount) <= 200 &&
              contact.balance + Number(amount) >= 10
            ) {
              contact.balance = contact.balance + Number(amount);
              state.myBalance = state.myBalance - amount;
              var today = new Date();
              state.history.unshift({
                ...contact,
                date:
                  today.getHours() +
                  ":" +
                  today.getMinutes() +
                  ":" +
                  today.getSeconds(),
                amount: amount,
              });
              alert("Success");
              state.showPage = false;
            } else {
              alert("Failure, Limit exceeded");
            }
          }
          return contact;
        });
      } else {
        alert("Failure, not enough money");
      }
    },
  },
  actions: {},
});
