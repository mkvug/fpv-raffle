<template>
  <div class="app-wrapper">
    <Header />
    <section class="settings" :class="showSettings">
      <SettingsForm />
    </section>
    <section class="contestants" v-show="showContestants">
      <Textarea />
    </section>
    <section class="raffle" v-show="showRaffle">
      <Tickets
        :key="this.$store.state.winnerKey"
        :class="this.$store.state.ticketsClass"
      />
      <the-drone :class="this.$store.state.droneClass" />
      <post-raffle :class="this.$store.state.postRaffleClass" />
    </section>
    <the-footer />
  </div>
</template>

<script>
import Header from "./components/TheHeader.vue";
import SettingsForm from "./components/SettingsForm.vue";
import Textarea from "./components/EntryTextarea.vue";
import Tickets from "./components/TicketList.vue";
import PostRaffle from "./components/PostRaffle.vue";
import TheDrone from "./components/TheDrone.vue";
import TheFooter from "./components/TheFooter.vue";

var teamLevelUp = ` ██╗ ██╗ ████████╗███████╗ █████╗ ███╗   ███╗██╗     ███████╗██╗   ██╗███████╗██╗     ██╗   ██╗██████╗ 
████████╗╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║     ██╔════╝██║   ██║██╔════╝██║     ██║   ██║██╔══██╗
╚██╔═██╔╝   ██║   █████╗  ███████║██╔████╔██║██║     █████╗  ██║   ██║█████╗  ██║     ██║   ██║██████╔╝
████████╗   ██║   ██╔══╝  ██╔══██║██║╚██╔╝██║██║     ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║██╔═══╝ 
╚██╔═██╔╝   ██║   ███████╗██║  ██║██║ ╚═╝ ██║███████╗███████╗ ╚████╔╝ ███████╗███████╗╚██████╔╝██║     
 ╚═╝ ╚═╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝ ╚═════╝ ╚═╝     
                                                                                                       `;

console.log(teamLevelUp);

export default {
  name: "App",
  components: {
    Header,
    SettingsForm,
    Textarea,
    Tickets,
    PostRaffle,
    TheDrone,
    TheFooter,
  },
  computed: {
    customTheme() {
      return this.$store.state.customTheme;
    },
    showSettings() {
      return this.$store.state.showSettings;
    },
    showContestants() {
      return this.$store.state.showContestantsForm;
    },
    showRaffle() {
      return this.$store.state.showRaffle;
    },
    customBackground() {
      return this.$store.state.customBackground;
    },
    customHeader() {
      return this.$store.state.customHeader;
    },
    customHeaderColor() {
      return this.$store.state.customHeaderColor;
    },
    customTextColor() {
      return this.$store.state.customTextColor;
    },
    customButton() {
      if (this.$store.state.customButton == "") {
        return "#0070f3";
      } else {
        return this.$store.state.customButton;
      }
    },
    customButtonColor() {
      if (this.$store.state.customButtonColor == "") {
        return "#ffffff";
      } else {
        return this.$store.state.customButtonColor;
      }
    },
  },
};
</script>

<style>
:root {
  --nc-font-sans: "Roboto", sans-serif;
  --nc-font-mono: Consolas, monaco, "Ubuntu Mono", "Liberation Mono",
    "Courier New", Courier, monospace;
  --nc-tx-1: #000000;
  --nc-tx-2: #1a1a1a;
  --nc-bg-1: #ffffff;
  --nc-bg-2: #f6f8fa;
  --nc-bg-3: #e5e7eb;
  --nc-lk-1: #0070f3;
  --nc-lk-2: #0366d6;
  --nc-lk-tx: #ffffff;
  --nc-ac-1: #79ffe1;
  --nc-ac-tx: #0c4047;
  --header-font: "Bebas Neue", cursive;
  --script-font: "Caveat", cursive;
  --background: v-bind(customBackground);
}
html,
body,
#app {
  min-height: 100vh;
}
body {
  background: var(--nc-bg-2);
  max-width: 100%;
  padding: 0rem;
}
.app-wrapper {
  background: v-bind(customBackground);
  color: v-bind(customTextColor);
  min-height: calc(100vh - 2rem);
  padding: 2rem 2rem 0rem;
}
#app > .app-wrapper > section,
#app > .app-wrapper > footer {
  margin: 0 auto;
  max-width: 750px;
}
#app > .app-wrapper > section.raffle {
  height: calc(100vh - 140px);
  max-width: 100%;
}
#app > .app-wrapper > section.settings {
  background: var(--nc-bg-1);
  box-shadow: -5px 5px 10px rgb(0 0 0 / 25%);
  border-radius: 0.5rem 0 0 0.5rem;
  color: var(--nc-tx-2);
  display: block;
  padding: 1rem;
  position: fixed;
  right: 0;
  transform: translateX(0);
  transition: right 0.3s ease-in;
  width: 300px;
  z-index: 100;
}

#app > .app-wrapper > section.settings h2,
#app > .app-wrapper > section.settings label {
  color: var(--nc-tx-2) !important;
}
#app > .app-wrapper > section.settings input[type="submit"] {
  background: var(--nc-lk-1);
  color: var(--nc-lk-tx);
}

#app > .app-wrapper > section.hidden {
  transition: right 0.3s ease-in;
  right: -500px;
}
header {
  background: v-bind(customHeader);
  color: v-bind(customHeaderColor);
  border-bottom: 0;
  margin-bottom: 0;
  padding: 1rem;
  text-align: center;
}
header h1,
header h2,
header h3 {
  color: v-bind(customHeaderColor);
}
h1,
h2,
h3,
h4,
h5,
h6,
p.intro,
.copyright,
label {
  border-bottom: none;
  font-family: var(--header-font);
  color: v-bind(customTextColor);
}
input[type="submit"] {
  background: v-bind(customButton);
  color: v-bind(customButtonColor);
}
input[type="submit"]:hover {
  background: v-bind(customButton);
  filter: contrast(75%) brightness(75%);
  color: v-bind(customButtonColor);
}
.raffle {
  height: 700px;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.z0 {
  z-index: 0;
}
.z1 {
  z-index: 1;
}
.z-1 {
  display: none;
  z-index: -1;
}
</style>
