<template>
  <div class="post-raffle">
    <button
      v-if="this.$store.state.contestants.length > 1"
      @click="action('again')"
    >
      Play Again
    </button>
    <button @click="action('reset')">Reset</button>
  </div>
</template>

<script>
export default {
  methods: {
    action(action) {
      switch (action) {
        case "again":
          this.$store.commit("updateContestants");
          break;
        case "reset":
          this.$store.commit("toggleContestantsForm");
          this.$store.commit("emptyContestants");
          this.$store.commit("toggleRaffle");
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.post-raffle {
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  text-align: center;
}
button {
  margin: 0 0.5rem;
}
</style>
