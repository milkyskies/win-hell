<script lang="ts">
  let className = "";
  let open = true;
  export let title: string

  export { className as class };


</script>

{#if open}
<div class="window {className} flex flex-col">
  <div class="title-bar">
    <div class="title-bar-text">{title}</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close" on:click={() => {open = false}}></button>
    </div>
  </div>
  <div class="window-body h-full">
    <slot />
  </div>
</div>
{/if}