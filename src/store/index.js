import { createStore } from "vuex";
import Mixins from "@/Mixins";

export default createStore({
  state() {
    return {
      duration: [10, 20],
      quad: "player1",
      rawContestants: "",
      contestants: [],
      showSettings: "hidden",
      showContestantsForm: true,
      showRaffle: false,
      winner: "",
      winners: [],
      winnerKey: 0,
      ticketsClass: "z0",
      droneClass: "z1",
      postRaffleClass: "z-1",
      customTheme: false,
      customBackground: "",
      customHeaderBackground: "",
      customHeaderColor: "",
      customTextColor: "",
      customButton: "",
      customButtonColor: "",
    };
  },
  getters: {},
  mutations: {
    toggleSettings(state) {
      state.showSettings = state.showSettings == "hidden" ? "show" : "hidden";
    },
    toggleContestantsForm(state) {
      state.showContestantsForm = !state.showContestantsForm;
    },
    toggleRaffle(state) {
      state.showRaffle = !state.showRaffle;
    },
    udpateDuration(state, duration) {
      if (duration.includes(",")) {
        duration = duration.replace(/\s/g, "");
        state.duration = duration.split(",");
      } else {
        state.duration = [duration];
      }
    },
    updateQuad(state, quad) {
      state.quad = quad;
    },
    contestantsInput(state, contestants) {
      state.rawContestants = contestants;
    },
    addContestants(state, contestants) {
      /*******
       * Add the contestants
       * Convert string of contestants
       * to an array and add to state.contestants.
       */
      var contestantArray = contestants.split("\n").filter((n) => n);
      state.contestants = contestantArray;
    },
    emptyContestants(state) {
      /*******
       * Empty all the contestants.
       */
      state.contestants = [];
      state.rawContestants = "";
      state.ticketsClass = "z0";
      state.droneClass = "z1";
      state.postRaffleClass = "z-1";
    },
    updateContestants(state) {
      /***
       * Update contestants to remove
       * winner from previous round
       */
      state.ticketsClass = "z0";
      state.droneClass = "z1";
      state.postRaffleClass = "z-1";
      state.winnerKey = state.winners.length;
      state.contestants = state.contestants.filter(function (value) {
        return value != state.winner;
      });
    },
    pickWinner(state) {
      /***
       * Select a random winner
       * Update winners array and remove
       * winner from list of contestants.
       */
      var winner =
        state.contestants[Math.floor(Math.random() * state.contestants.length)];
      state.winner = winner;
      state.winners.push(winner);

      const modelViewer = document.querySelector("#reveal");
      modelViewer.animationName = "Running";
      modelViewer.play();

      const raffleTime = Mixins.methods.raffleTime(state.duration);

      const tickets = document.querySelectorAll(".ticket");
      for (let index = 0; index < tickets.length; index++) {
        let ticket = tickets[index];
        let coords = Mixins.methods.getCoords(ticket);
        let ticketName = ticket.children[0].innerText;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let left =
          coords.left <= windowWidth / 2
            ? Mixins.methods.randomInt(-100, 0)
            : Mixins.methods.randomInt(0, 100);
        let top =
          coords.top <= windowHeight / 2
            ? Mixins.methods.randomInt(-100, 0)
            : Mixins.methods.randomInt(0, 100);
        let rotateX = Mixins.methods.randomInt(360);
        let rotateY = Mixins.methods.randomInt(360);
        let rotateZ = Mixins.methods.randomInt(360);
        if (ticketName != winner) {
          ticket.setAttribute(
            "style",
            "opacity: 0; left: " +
              left * 3 +
              "%; top: " +
              top * 3 +
              "%; transform: rotateX(" +
              rotateX +
              "deg) rotateY(" +
              rotateY +
              "deg) rotateZ(" +
              rotateZ +
              "deg) translateX(0) translate(0, 0); transition-delay: " +
              Mixins.methods.randomFloat(0, raffleTime) +
              "s"
          );
        } else {
          ticket.setAttribute(
            "style",
            "left: 50%; top: 50%; transition-delay: " +
              raffleTime +
              "s; transform: scale(1) rotateX(0) rotateY(0) rotateZ(0) translate(-25px, 0)"
          );
        }
      }

      // Stop animation
      setTimeout(() => {
        modelViewer.pause();
        state.ticketsClass = "z1";
        state.droneClass = "z0";
        state.postRaffleClass = "z1";
      }, raffleTime * 1000);
    },
    customTheme(state) {
      state.customTheme = !state.customTheme;
    },
    updateThemeProp(state, value) {
      switch (value.type) {
        case "customBackground":
          state.customBackground = value.value;
          break;
        case "customHeader":
          state.customHeader = value.value;
          break;
        case "customHeaderColor":
          state.customHeaderColor = value.value;
          break;
        case "customTextColor":
          state.customTextColor = value.value;
          break;
        case "customButton":
          state.customButton = value.value;
          break;
        case "customButtonColor":
          state.customButtonColor = value.value;
          break;
        default:
          break;
      }
    },
  },
  actions: {},
  modules: {},
});
