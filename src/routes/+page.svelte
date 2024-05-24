<script lang="ts">
	import Happy from '$lib/components/happy.svelte';
	import Poop from '$lib/components/poop.svelte';
	import Popup from '$lib/components/popup.svelte';
	import Porn from '$lib/components/porn.svelte';
	import Taxes from '$lib/components/taxes.svelte';
	import Window from '$lib/components/window.svelte';
	import bsod from '$lib/assets/bsod.png';
	import bsod_audio from '$lib/assets/bsod.mp3';

	let showAppPopup = false;

	let showPoop = false;
	let showTaxes = false;
	let showPorn = false;
	let showHappy = false;
	let showBsod = false;

	let name = '';
	let nameInput = '';

	function run(): void {
		showAppPopup = true;
	}

	async function openPoop() {
		await new Promise((resolve) => setTimeout(resolve, 4000));
		showPoop = true;
		await new Promise((resolve) => setTimeout(resolve, 10000));
		showTaxes = true;
		await new Promise((resolve) => setTimeout(resolve, 6500));
		showPorn = true;
		await new Promise((resolve) => setTimeout(resolve, 2000));
		showHappy = true;
		await new Promise((resolve) => setTimeout(resolve, 8000));
		showBsod = true;
	}

	const code = `
import qualified GI.Gtk as Gtk
import Data.Text (Text, unpack, pack)
import Control.Monad (void)
import System.Environment (getProgName)

main :: IO ()
main = do
    _ <- Gtk.init Nothing
    win <- Gtk.windowNew Gtk.WindowTypeToplevel
    Gtk.windowSetTitle win "名前を入力してください。"
    Gtk.windowSetDefaultSize win 300 100
    box <- Gtk.boxNew Gtk.OrientationVertical 10
    Gtk.containerAdd win box
    entry <- Gtk.entryNew
    Gtk.boxPackStart box entry True True 0
    button <- Gtk.buttonNewWithLabel "送信"
    Gtk.boxPackStart box button True True 0

    Gtk.onButtonClicked button $ do
        name <- Gtk.entryGetText entry
        let greeting = "Hello, " <> name
        dialog <- Gtk.messageDialogNew (Just win) [] Gtk.MessageTypeInfo Gtk.ButtonsTypeOk greeting
        void $ Gtk.dialogRun dialog
        Gtk.widgetDestroy dialog

    onDestroy <- Gtk.onWidgetDestroy win Gtk.mainQuit
    Gtk.widgetShowAll win
    Gtk.main`;
</script>

{#if showBsod}
	<img src={bsod} class="w-full h-full z-[100] fixed top-0 left-0" />
	<audio autoplay={true}>
		<source src={bsod_audio} type="audio/mpeg" />
	</audio>
{/if}

{#if showPoop}
	<Poop />
{/if}
{#if showTaxes}
	<Taxes />
{/if}
{#if showPorn}
	<Porn />
{/if}
{#if showHappy}
	<Happy x={500} y={500} />
	<Happy x={800} y={300} />
	<Happy x={200} y={400} />
	<Happy x={400} y={600} />
{/if}

{#if showAppPopup}
	<Popup
		title="win-hell"
		class="translate-x-[500px] translate-y-52 z-50 w-[400px]"
		playSound={false}
	>
		<form
			class="field-row-stacked"
			autocomplete="off"
			on:submit={() => {
				openPoop();
			}}
		>
			<label for="name">名前を入力してください。</label>
			<input type="text" bind:value={nameInput} id="name" name="name" />
			<button type="submit">送信</button>
		</form>
		{#if name}
			<p class="pt-2">{name}</p>
		{/if}
	</Popup>
{/if}

<Window title="hello.hs - my first project - Visual Studio Code" class="h-full">
	<div class="flex flex-col h-full">
		<div class="flex h-full">
			<aside class="pr-3 min-w-[200px]">
				<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
				<menu role="tablist" aria-label="explorer">
					<button role="tab" aria-controls="win-hell">win-hell</button>
					<button role="tab" aria-selected="true" aria-controls="Run">Run</button>
					<button role="tab" aria-controls="search">Search</button>
				</menu>
				<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
				<article role="tabpanel" id="run">
					<div class="field-row-stacked">
						<label for="text21">Run</label>
						<button>Debug</button>
						<button on:click={run}>Run</button>
					</div>
				</article>
			</aside>
			<main class="w-full gap-4">
				<div class="flex gap-4 overflow-clip h-[500px]">
					<aside class="pl-2 overflow-hidden pt-3 flex flex-col gap-[7.5px]">
						{#each { length: 600 } as _, i}
							<div>{i + 1}</div>
						{/each}
					</aside>
					<div class="w-full -my-5">
						<pre class="w-full">
              <code class="">
								{code}
							</code>
            </pre>
					</div>
				</div>
				<div class="s" />
			</main>
		</div>
		<aside class="h-full">
			<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
			<menu role="tablist" aria-label="bottom">
				<button role="tab" aria-selected="true" aria-controls="terminal">Terminal</button>
				<button role="tab" aria-controls="problems">Problems</button>
				<button role="tab" aria-controls="output">Output</button>
				<button role="tab" aria-controls="debug">Debug</button>
			</menu>
			<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
			<article role="tabpanel" id="terminal" class="h-full">
				<textarea class="bg-black text-white w-full h-full"> C:\ </textarea>
			</article>
		</aside>
		<div class="status-bar">
			<p class="status-bar-field">Press F1 for help</p>
			<p class="status-bar-field">Slide 1</p>
			<p class="status-bar-field">CPU Usage: 14%</p>
		</div>
	</div>
</Window>
