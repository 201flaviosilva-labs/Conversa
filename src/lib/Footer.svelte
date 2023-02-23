<script>
  import FaRegGrinTongue from "svelte-icons/fa/FaRegGrinTongue.svelte";
  import FaRegPaperPlane from "svelte-icons/fa/FaRegPaperPlane.svelte";
</script>

<footer>
  <form>
    <button class="icon"><FaRegGrinTongue /></button>
    <label>
      <input type="text" placeholder="Write your message here..." />
    </label>
    <button type="submit" class="icon"><FaRegPaperPlane /></button>
  </form>
</footer>

<style lang="scss">
  footer {
    padding: 4px;
    width: 85%;
    margin-bottom: 20px;
    background-color: #303030;
    border: 1px solid white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
      label {
        flex: 1;
        input {
          width: 100%;
          padding: 4px 12px;
          font-size: 20px;
          border: 2px solid white;
          border-radius: 20px;
          font-weight: 900;
        }
      }
      button {
        flex: 0.1;
        padding: 4px 8px;
        border-radius: 20px;
        border: 2px solid white;
        font-size: 20px;
        font-weight: 900;
      }
    }
  }
</style>
