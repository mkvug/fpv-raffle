<template>
  <h3>Raffle Participants:</h3>
  <textarea
    name="participants"
    id="participants"
    cols="30"
    rows="10"
    placeholder="Enter names separated by newlines."
    v-model="participants"
  >
  </textarea>
  <input
    type="submit"
    :disabled="this.$store.state.rawContestants.length == 0"
    @click="submitParticipants"
    value="Submit"
  />
</template>

<script>
export default {
  computed: {
    participants: {
      get() {
        return this.$store.state.rawContestants;
      },
      set(value) {
        this.$store.commit("contestantsInput", value);
      },
    },
  },
  methods: {
    submitParticipants() {
      if (this.$store.state.rawContestants.length > 0) {
        this.$store.commit("addContestants", this.$store.state.rawContestants);
        this.$store.commit("toggleContestantsForm");
        this.$store.commit("toggleRaffle");
      } else {
        // Disable submit button
      }
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  background: var(--nc-bg-1);
}
</style>
