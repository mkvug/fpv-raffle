<template>
  <div class="the-drone">
    <model-viewer
      id="reveal"
      @click="pickWinner"
      min-field-of-view="35deg"
      max-field-of-view="35deg"
      camera-orbit="0deg 5deg"
      :src="drone"
      shadow-intensity="1"
      shadow-softness=".15"
      alt="BrockleeFPV Player 1"
    >
      <div id="button-load" slot="poster">
        Loading 3D Model...<br />
        Once loaded, click to play.
      </div>
    </model-viewer>
  </div>
</template>

<script>
export default {
  methods: {
    pickWinner() {
      this.$store.commit("pickWinner");
    },
  },
  computed: {
    drone() {
      return "./drones/" + this.$store.state.quad + ".glb";
    },
  },
};
</script>

<style scoped>
.the-drone {
  position: absolute;
  width: 100%;
  height: 100%;
}
model-viewer {
  height: 100%;
  width: 100%;
}
</style>
