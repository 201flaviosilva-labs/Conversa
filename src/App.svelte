<script>
  import moment from "moment";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";

  const messages = [
    {
      id: 1,
      text: "string",
      time: moment(new Date()).format("HH:mm"),
      user: "Octocat",
    },
  ];

  function addNewMessage(text) {
    messages.push({
      id: Math.random(),
      text,
      time: moment(new Date()).format("HH:mm"),
      user: "Octocat",
    });
  }
</script>

<div class="container">
  <Header />
  <Main {messages} />
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
