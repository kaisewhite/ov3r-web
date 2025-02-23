<script>
	let { children } = $props();

	const sidebarLinks = [
		{ name: 'Welcome', path: '/comprehend/home/welcome' },
		{ name: 'Projects', path: '/comprehend/projects' },
		{ name: 'Settings', path: '/comprehend/settings' }
	];
</script>

<div class="flex">
	<div class="w-64 h-screen bg-gray-100 border-r">
		<nav class="mt-5 px-2">
			{#each sidebarLinks as link}
				<a
					href={link.path}
					class="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
				>
					{link.name}
				</a>
			{/each}
		</nav>
	</div>

	<div class="flex-1">
		{@render children()}
	</div>
</div>
