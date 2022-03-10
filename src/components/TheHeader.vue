<template>
  <header>
    <h1>FPV Raffle</h1>
    <div class="settings">
      <button @click="toggleSettings">
        <IconSettings />
      </button>
    </div>
  </header>
</template>

<script>
import IconSettings from "./icons/IconSettings.vue";
export default {
  methods: {
    toggleSettings() {
      this.$store.commit("toggleSettings");
    },
  },
  components: {
    IconSettings,
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 0;
}
.settings {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
button {
  background: none;
  padding: 0;
}
button svg {
  width: 36px;
  height: 36px;
}
button:hover svg {
  fill: rgba(0, 0, 0, 0.75);
}
</style>
