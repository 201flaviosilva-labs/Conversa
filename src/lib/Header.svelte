<script>
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaSearch from "svelte-icons/fa/FaSearch.svelte";
  import FaSlidersH from "svelte-icons/fa/FaSlidersH.svelte";
  let isOnline = true;
</script>

<header>
  <div class="user-info">
    <img src="https://octodex.github.com/images/original.png" alt="Octocat" />
    <div>
      <p>Octocat</p>
      <p class="status" class:off={!isOnline}>Online</p>
    </div>
  </div>

  <div class="actions">
    <button class="icon"><FaSearch /></button>
    <button class="icon"><FaSlidersH /></button>
    <a href="https://github.com/201flaviosilva-labs/Conversa/" class="icon"
      ><FaGithub /></a
    >
  </div>
</header>

<style lang="scss">
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background-color: #303030;
    border-bottom: 1px solid white;
    border-radius: 0 0 8px 8px;
    .user-info {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100px;
        height: 100px;
      }
      div {
        p {
          &.status {
            color: green;
            &.off {
              color: red;
            }
          }
        }
      }
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      a {
        background-color: black;
      }
    }
  }
</style>
