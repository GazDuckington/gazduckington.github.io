<script>
	let { src, alt = '', class: className = '', ...rest } = $props();
</script>

<img {src} {alt} class={className} {...rest} />
