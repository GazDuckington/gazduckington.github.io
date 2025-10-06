<script lang="ts">
	import type { Biodata } from '@types';
	import { biodata as defaultBiodata } from '@/lib/data/biodata.ts';

	let {
		biodata = defaultBiodata, // ✅ default value here
		class: className = 'text-xl',
		...rest
	}: {
		biodata?: Biodata; // ✅ optional now
		class?: string;
	} = $props();
</script>

<div class={className} {...rest}>
	<div class="flex flex-col px-0">
		<div class="flex space-x-1 px-0 text-9xl">
			<h3>{biodata.firstName}</h3>
			<h3 class="font-semibold text-sky-400">{biodata.middleName}</h3>
		</div>
		<h4 class="z-60 text-xl font-semibold text-sky-400 italic shadow">{biodata.title}</h4>
	</div>
	<p><strong>Age:</strong> {biodata.age}</p>
	<p><strong>Gender:</strong> {biodata.gender}</p>
	<p><strong>Address:</strong> {biodata.address}</p>

	{#if biodata.hobbies?.length}
		<p><strong>Hobbies:</strong> {biodata.hobbies.join(', ')}</p>
	{/if}

	<p class="mt-2">{biodata.bio}</p>
</div>
