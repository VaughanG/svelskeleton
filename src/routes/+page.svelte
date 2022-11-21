<script>
	import { GradientHeading } from '@brainandbones/skeleton';
	import { Divider } from '@brainandbones/skeleton';
</script>

<div class="container mx-auto p-8 space-y-8">
	<GradientHeading tag="h1" direction="bg-gradient-to-r" from="from-primary-500" to="to-accent-500">
		Homepage
	</GradientHeading>
	<br />
	<Divider borderColor="border-primary-500" borderWidth="border-t-8" borderStyle="border-solid" />

	<br />

	<section class="card card-body">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<section class="flex space-x-2">
		<a
			class="btn btn-filled-primary"
			href="https://kit.svelte.dev/"
			target="_blank"
			rel="noreferrer">SvelteKit</a
		>
		<a
			class="btn btn-filled-accent"
			href="https://tailwindcss.com/"
			target="_blank"
			rel="noreferrer">Tailwind</a
		>
		<a class="btn btn-filled-tertiary" href="https://github.com/" target="_blank" rel="noreferrer"
			>GitHub</a
		>
	</section>
</div>
