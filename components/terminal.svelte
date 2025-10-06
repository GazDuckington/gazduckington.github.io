<script lang="ts">
	import { Commands } from '@/lib/data/terminal.ts';
	import { onMount, tick } from 'svelte';

	let input = $state('');
	let history = $state<Array<{ command: string; output: string[]; isHtml: boolean }>>([]);
	let commandHistory = $state<string[]>([]);
	let historyIndex = $state(-1);
	let inputEl: HTMLInputElement;
	let terminalContainer: HTMLDivElement;

	async function handleKey(e: KeyboardEvent) {
		// Navigate command history with arrow keys
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
				historyIndex++;
				input = commandHistory[commandHistory.length - 1 - historyIndex];
			}
			return;
		}

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (historyIndex > 0) {
				historyIndex--;
				input = commandHistory[commandHistory.length - 1 - historyIndex];
			} else if (historyIndex === 0) {
				historyIndex = -1;
				input = '';
			}
			return;
		}

		if (e.key === 'Enter' && input.trim()) {
			if (input === 'clear') {
				history = [];
				input = '';
				historyIndex = -1;
				return;
			}

			const cmd = Commands[input];
			let output: string[];
			let isHtml = false;

			if (!cmd) {
				output = [`Unknown command: ${input}`];
			} else if (typeof cmd === 'function') {
				output = await cmd();
				isHtml = output.some((line) => line.includes('<'));
			} else {
				output = cmd;
				isHtml = output.some((line) => line.includes('<'));
				// Add to command history
				commandHistory.push(input);
				historyIndex = -1;
			}

			history.push({ command: input, output, isHtml });
			input = '';

			await tick();
			if (terminalContainer) {
				terminalContainer.scrollTop = terminalContainer.scrollHeight;
			}
		}
	}
	function focusInput() {
		inputEl?.focus();
	}
	onMount(() => focusInput());
</script>

<div class="relative">
	<!-- CRT overlay effects - fixed position -->
	<div class="crt-scanlines"></div>
	<div class="crt-flicker"></div>
	<div class="crt-vignette"></div>

	<!-- Terminal container with scrolling content -->
	<div
		bind:this={terminalContainer}
		class="terminal-crt flex h-96 max-h-96 w-full max-w-200 flex-col overflow-y-auto rounded-lg bg-gray-900/20 p-4 font-mono text-white"
		role="button"
		tabindex="0"
		onclick={focusInput}
		onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && focusInput()}
	>
		<!-- Command history -->
		{#each history as entry (entry.command)}
			<div class="relative z-10 mb-2">
				<div class="flex items-start">
					<span class="mr-2 flex-shrink-0 text-green-400">$</span>
					<span class="break-words">{entry.command}</span>
				</div>
				{#if entry.isHtml}
					<div class="ml-4">
						{#each entry.output as line (line.length)}
							{@html line}
						{/each}
					</div>
				{:else}
					{#each entry.output as line (line.length)}
						<p class="ml-4 break-words whitespace-pre-wrap text-gray-300">{line}</p>
					{/each}
				{/if}
			</div>
		{/each}
		<!-- Input flows with content -->
		<div class="relative z-10 flex items-start">
			<span class="mr-2 flex-shrink-0 text-green-400">$</span>
			<input
				bind:this={inputEl}
				bind:value={input}
				onkeydown={handleKey}
				type="text"
				spellcheck="false"
				autocomplete="off"
				class="min-w-0 flex-1 border-none bg-transparent font-mono text-lg text-white caret-green-500 outline-none"
			/>
		</div>
	</div>
</div>
