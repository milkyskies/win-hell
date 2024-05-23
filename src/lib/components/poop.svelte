<script lang="ts">
	import Popup from './popup.svelte';
	import poop from '$lib/assets/poop.jpeg';
</script>

<Popup title="うんこシティー" class="translate-x-[950px] translate-y-[230px] z-[51]">
	<img src={poop} class="w-52" />
	<button class="w-full">今すぐプレイ！</button>
</Popup>
