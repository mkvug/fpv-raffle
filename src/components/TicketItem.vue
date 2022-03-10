<template>
  <div class="ticket" :style="ticketPosition">
    <div :data-number="ticketNumber">
      {{ name }}
    </div>
  </div>
</template>

<script>
import Mixins from "@/Mixins";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  mixins: [Mixins],
  computed: {
    ticketPosition() {
      let top = Mixins.methods.randomInt(10, 90);
      let left = Mixins.methods.randomInt(10, 90);
      let rotation = Mixins.methods.randomInt(360);
      let z = Mixins.methods.randomInt(100);

      return {
        top: top + "%",
        left: left + "%",
        transform: "rotate(" + rotation + "deg) scale(0.5) translate(0, 0)",
        zIndex: z,
      };
    },
    ticketNumber() {
      var hash = 0;
      if (this.name.length == 0) return hash;
      for (var i = 0; i < this.name.length; i++) {
        var char = this.name.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      hash = hash.toString().replace(/-/g, "").slice(0, 6);
      return hash;
    },
  },
};
</script>

<style>
.ticket {
  position: absolute;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  backface-visibility: hidden;
  transform: rotate(16deg) translateY(25%) translateZ(0);
  transform-origin: 50% 50%;
  top: 50%;
  left: 50%;
  margin-top: -65px;
  margin-left: -144px;
  position: absolute;
  display: inline-block;
  padding: 15px 25px;
  color: var(--nc-tx-2);
  background-image: radial-gradient(
      ellipse closest-side at 50% 50%,
      hsla(0, 0%, 100%, 0.1),
      transparent 90%
    ),
    radial-gradient(circle at 0 100%, transparent 14px, #fa616d 15px),
    radial-gradient(circle at 100% 100%, transparent 14px, #fa616d 15px),
    radial-gradient(circle at 100% 0, transparent 14px, #fa616d 15px),
    radial-gradient(circle at 0 0, transparent 14px, #fa616d 15px);
  background-position: center center, bottom left, bottom right, top right,
    top left;
  background-size: cover, 51% 51%, 51% 51%, 51% 51%, 51% 51%;
  background-repeat: no-repeat;
  border-width: 0 4px;
  border-color: transparent;
  border-style: solid;
  border-image: radial-gradient(
      cover circle,
      #fa616d 0%,
      #fa616d 50%,
      transparent 51%
    )
    0 39% / 15px 4px repeat;
  -webkit-filter: drop-shadow(hsla(0, 0%, 0%, 0.55) 1px 1px 2px);
}

.ticket + .ticket {
  transform: rotate(-7deg) translateY(-25%) translateX(10px) translateZ(0);
  z-index: 1;
}

.ticket > div {
  width: 220px;
  height: 100px;
  box-sizing: border-box;
  position: relative;
  border-color: #ea4a56;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  text-align: center;
  font: 2em/1 var(--script-font);
  padding: 15px 20px;
  font-stretch: extra-expanded;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ticket > div:before,
.ticket > div:after {
  content: attr(data-number);
  font: 0.625em/1 "Courier New";
  position: absolute;
  width: 96px;
  line-height: 28px;
  transform: rotate(90deg) translateZ(0);
  transform-origin: 0% 0%;
  text-align: center;
  display: block;
  top: 0;
  border-color: #ea4a56;
  border-style: solid;
  border-width: 2px 0 0;
  z-index: -1;
}
.ticket > div:before {
  left: 28px;
}

.ticket > div:after {
  transform-origin: 100% 0%;
  right: 28px;
  transform: rotate(-90deg) translateZ(0);
}
</style>
