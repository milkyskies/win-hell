<script lang="ts">
  import "../lib/app.css"
  import "xp.css/dist/XP.css";

  import bliss from "$lib/assets/bliss.webp";
</script>

<div style="background-image: url({bliss}); background-size: cover;" class="h-screen w-screen p-4">
  <slot />
</div>
