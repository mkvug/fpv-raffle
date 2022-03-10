<template>
  <div class="tickets">
    <ticket-item
      v-for="(name, index) in tickets"
      :key="index"
      :name="name"
    ></ticket-item>
  </div>
</template>

<script>
import TicketItem from "./TicketItem.vue";

export default {
  components: { TicketItem },
  computed: {
    tickets() {
      return this.$store.state.contestants;
    },
  },
};
</script>

<style>
.tickets {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
