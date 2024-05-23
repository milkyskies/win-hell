<script lang="ts">
	import Popup from './popup.svelte';
	import happy from '$lib/assets/happy.jpg';

	export let y = 0;
	export let x = 0;
</script>

<Popup title="HAPPY TIME" class="translate-x-[{x}px] translate-y-[{y}px] z-[54]">
	<img src={happy} class="w-52" />
	<button class="w-full">今すぐ実行！</button>
</Popup>
