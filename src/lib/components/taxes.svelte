<script lang="ts">
	import Popup from './popup.svelte';
	import professor from '$lib/assets/professor.jpeg';
</script>

<Popup title="税金なんて払わなくていいよ！" class="translate-x-[350px] translate-y-[200px] z-[52]">
	<img src={professor} class="w-[500px]" />
	<h4>税金なんて払わなくていいよ！</h4>
	<p class="text-xl">ブラウン先生の講座を今すぐに受けましょう！</p>
	<button class="w-full text-3xl mt-10">無料で受講する！</button>
</Popup>
