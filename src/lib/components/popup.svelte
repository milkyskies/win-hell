<script lang="ts">
	import { onMount } from 'svelte';
	import Window from './window.svelte';
	import sound from '$lib/assets/popup.mp3';

	export let playSound = true;

	export let title: string;
	let className = '';
	export { className as class };
</script>

<Window {title} class="{className} fixed z-50">
	<slot />
</Window>
{#if playSound}
	<audio autoplay={true}>
		<source src={sound} type="audio/mpeg" />
	</audio>
{/if}
