<template>
  <footer>
    <div>
      <a class="logo" href="https://www.youtube.com/pokeyfpv" target="_blank"
        ><img src="/img/pokeyfpv.png" alt="PokeyFPV"
      /></a>
      <span class="copyright">© {{ theYear }}</span>
    </div>
    <div>
      <a href="https://paypal.me/pokeyfpv" target="_blank"
        >Buy me a drink or some parts.</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    theYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  text-align: center;
  display: flex;
  flex-direction: column;
}
footer > div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 0.5rem;
}
img {
  width: 36px;
  height: 36px;
}
a {
  font-size: 0.75rem;
  color: var(--nc-tx-2);
}
a.logo {
  height: 36px;
}
</style>
