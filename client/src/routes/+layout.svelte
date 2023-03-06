<script>
    import '../app.css';
	import { onMount } from 'svelte';
    
	let AOS;

	onMount(async () => {
		AOS = (await import('aos')).default;
		AOS.init({
			once: 'true'
		});
	});
</script>

<slot />