<!--
  @component

  Layout for popups
-->

<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<section on:click|self on:keypress={null} class="w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center transition-all duration-200 bg-black bg-opacity-80" transition:fade={{duration: 300}}>
    <slot></slot>
</section>