<script>
    import '../app.css';
	import { onMount } from 'svelte';

	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration';
    import 'dayjs/locale/fr';
	
	dayjs.extend(duration);
	dayjs.locale('fr');

	let AOS;

	onMount(async () => {
		AOS = (await import('aos')).default;
		AOS.init({
			once: 'true'
		});
	});
</script>

<slot />