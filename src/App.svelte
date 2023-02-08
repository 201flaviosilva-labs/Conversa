<script>
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";
</script>

<div class="container">
  <Header />
  <Main />
  <Footer />
</div>

<style>
  .container {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center safe;
  }
</style>
