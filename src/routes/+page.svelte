<script lang="ts">
  import Window from "$lib/components/window.svelte";

  let showAppPopup = false;
  let name = "";
  let nameInput = "";

  function run(): void {
    showAppPopup = true;
  }
</script>

{#if showAppPopup}
<Window title="win-hell" class="absolute translate-x-40 translate-y-52 z-50 w-[400px]">
 <form class="field-row-stacked"  autocomplete="off" on:submit={() => { name = `こんにちは、${nameInput}さん！`; }}>
    <label for="name">名前を入力してください。</label>
    <input type="text" bind:value={nameInput} id="name" name="name" />
    <button type="submit">送信</button>
 </form> 
 {#if name}
 <p class="pt-2">{name}</p>
 {/if}
</Window>
{/if}

<Window title="+page.svelte - win-hell - Visual Studio Code" class="h-full">
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
            {#each {length: 600} as _, i}
              <div>{i + 1}</div>
            {/each}
          </aside>
          <div class="w-full -my-5">
            <pre class="w-full">
              <code class="">
    import Control.Applicative
    import Control.Monad
    import Control.Monad.Trans.State
    import Control.Monad.Trans.Writer
    import Data.Functor.Identity
    import Data.List
    import Data.Map (Map)
    import qualified Data.Map as Map
    
    -- Define a custom data type for expressions
    data Expr
      = Lit Int
      | Add Expr Expr
      | Sub Expr Expr
      | Mul Expr Expr
      | Div Expr Expr
      deriving (Show)
    
    -- Evaluate an expression
    eval :: Expr -> Int
    eval (Lit n) = n
    eval (Add e1 e2) = eval e1 + eval e2
    eval (Sub e1 e2) = eval e1 - eval e2
    eval (Mul e1 e2) = eval e1 * eval e2
    eval (Div e1 e2) = eval e1 `div` eval e2
    
    -- Define a simple parser for expressions
    parseExpr :: String -> Maybe Expr
    parseExpr = undefined  -- You can implement a parser here for your skit
    
    -- Define a State monad to keep track of a symbol table
    type SymbolTable = Map String Int
    
    -- Define a function to add a variable to the symbol table
    addVariable :: String -> Int -> SymbolTable -> SymbolTable
    addVariable name value = Map.insert name value
    
    -- Define a Writer monad to log messages
    type Logger = [String]
    
    -- Log a message
    logMessage :: String -> Writer Logger ()
    logMessage msg = tell [msg]
    
    -- Define a function to compute the factorial of a number
    factorial :: Int -> Writer Logger Int
    factorial 0 = do
      logMessage "Computing factorial of 0"
      return 1
    factorial n = do
      logMessage $ "Computing factorial of " ++ show n
      return (n * prevResult)
    
    -- Define a function to find the nth Fibonacci number
    fibonacci :: Int -> Writer Logger Int
    fibonacci 0 = do
      logMessage "Fib(0) = 0"
      return 0
    fibonacci 1 = do
      logMessage "Fib(1) = 1"
      return 1
    fibonacci n = do
      logMessage $ "Computing Fib(" ++ show n ++ ")"
      let result = fib1 + fib2
      logMessage $ "Fib(" ++ show n ++ ") = " ++ show result
      return result
              </code>
            </pre>
          </div>
        </div>
        <div class="s">
        </div>
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
        <textarea class="bg-black text-white w-full h-full">
C:\
        </textarea>
      </article>
    </aside>
    <div class="status-bar">
      <p class="status-bar-field">Press F1 for help</p>
      <p class="status-bar-field">Slide 1</p>
      <p class="status-bar-field">CPU Usage: 14%</p>
    </div>
  </div>
</Window>