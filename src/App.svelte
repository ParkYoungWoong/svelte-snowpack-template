<script lang="ts">
	import Hello from '~/components/Hello.svelte'
  import { testStore } from './store/testStore'

  // Remove this!
  $testStore.run('AB', 12)
</script>

<h1>Hello Svelte & Snowpack!</h1>
<Hello />

<style lang="scss">
  // If you want to import the `scss/main.scss` file globally,
  // you must add `<style lang="scss">` even if the style content is empty.
</style>
