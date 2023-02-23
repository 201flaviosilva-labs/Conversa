<script>
  import Message from "./Message.svelte";
  // NumAnteriores.scrollTop = NumAnteriores.scrollHeight;

  export let messages;
</script>

<main>
  <p>beep</p>
  {#each messages as message}
    <Message text={message.text} time={message.time} />
  {/each}
</main>

<style>
  main {
    flex: 1;
    width: 100%;
  }
</style>
