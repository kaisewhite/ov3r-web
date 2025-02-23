<script lang="ts">
	import '../app.css';
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let servicesOpen = false;
	let accountOpen = false;
	let searchQuery = '';

	$: filteredServices = services.filter(service => 
		service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
		service.description.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const services = [
		{
			name: 'Comprehend',
			description: 'Advanced natural language processing and text analysis',
			path: '/comprehend'
		},
		{
			name: 'Analytics',
			description: 'Real-time data insights and visualization platform',
			path: '/analytics'
		},
		{
			name: 'Security',
			description: 'Enterprise-grade security and compliance tools',
			path: '/security'
		},
		{
			name: 'Storage',
			description: 'Scalable cloud storage and file management',
			path: '/storage'
		},
		{
			name: 'Machine Learning',
			description: 'Custom AI models and automated learning pipelines',
			path: '/ml'
		},
		{
			name: 'Integration',
			description: 'API management and third-party integrations',
			path: '/integration'
		},
		{
			name: 'Monitoring',
			description: 'System monitoring and performance tracking',
			path: '/monitoring'
		}
	];

	function closeDropdowns() {
		servicesOpen = false;
		accountOpen = false;
	}

	function toggleServices() {
		servicesOpen = !servicesOpen;
		accountOpen = false;
	}

	function toggleAccount() {
		accountOpen = !accountOpen;
		servicesOpen = false;
	}

	// Handle clicks outside of dropdowns
	function handleClickOutside(event: MouseEvent) {
		const servicesDropdown = document.getElementById('services-dropdown');
		const servicesButton = document.getElementById('services-button');
		const accountDropdown = document.getElementById('account-dropdown');
		const accountButton = document.getElementById('account-button');

		if (servicesOpen && 
			servicesDropdown && 
			servicesButton && 
			!servicesDropdown.contains(event.target as Node) && 
			!servicesButton.contains(event.target as Node)) {
			servicesOpen = false;
		}

		if (accountOpen && 
			accountDropdown && 
			accountButton && 
			!accountDropdown.contains(event.target as Node) && 
			!accountButton.contains(event.target as Node)) {
			accountOpen = false;
		}
	}

	onMount(() => {
		if (browser) {
			document.addEventListener('click', handleClickOutside);
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		}
	});
</script>

<style>
	.dropdown-container {
		position: relative;
	}

	.dropdown-container:hover .dropdown-content,
	.dropdown-content:hover {
		display: block;
		animation: scale-in 0.2s ease;
	}

	.dropdown-content {
		display: none;
		transform-origin: top;
		margin-top: 0;
	}

	.dropdown-content::before {
		content: '';
		display: block;
		position: absolute;
		top: -10px;
		left: 0;
		right: 0;
		height: 10px;
		background: transparent;
	}

	.caret {
		transition: transform 0.2s ease;
	}

	.dropdown-container:hover .caret {
		transform: rotate(180deg);
	}

	@keyframes scale-in {
		from {
			opacity: 0;
			transform: rotateX(-10deg) scale(0.9);
		}
		to {
			opacity: 1;
			transform: rotateX(0deg) scale(1);
		}
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5rem;
	}
</style>

<div class="min-h-screen bg-gray-50">
	<nav class="bg-white shadow-sm">
		<div class="w-full px-6">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center space-x-4">
					<div class="flex-shrink-0">
						<a href="/console/home" class="text-2xl font-bold text-gray-900">OV3R</a>
					</div>

					<div class="dropdown-container">
						<button
							id="services-button"
							class="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
						>
							Services
							<svg class="ml-2 h-5 w-5 caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</button>

						<div 
							class="dropdown-content absolute left-0 w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
						>
							<div class="p-4">
								<div class="mb-4 relative">
									<input
										type="text"
										bind:value={searchQuery}
										placeholder="Search services..."
										class="w-full px-4 py-2 text-sm border border-gray-200 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									<svg 
										class="absolute left-3 top-2.5 h-4 w-4 text-gray-400" 
										xmlns="http://www.w3.org/2000/svg" 
										fill="none" 
										viewBox="0 0 24 24" 
										stroke="currentColor"
									>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
								</div>
								<div class="services-grid" role="menu" aria-orientation="vertical">
									{#each filteredServices as service}
										<a
											href={service.path}
											class="block p-3 hover:bg-gray-100 rounded-md"
											role="menuitem"
										>
											<div class="text-sm font-medium text-gray-900">{service.name}</div>
											<div class="text-sm text-gray-500">{service.description}</div>
										</a>
									{/each}
									{#if filteredServices.length === 0}
										<div class="col-span-2 text-center py-4 text-gray-500">
											No services found matching your search
										</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="dropdown-container self-center">
					<button
						id="account-button"
						class="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
					>
						My Account
						<svg class="ml-2 h-5 w-5 caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</button>

					<div 
						id="account-dropdown"
						class="dropdown-content absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
					>
						<div class="py-1" role="menu" aria-orientation="vertical">
							<div class="px-4 py-2 text-sm text-gray-500">My Account</div>
							<div class="border-t border-gray-100"></div>
							<a href="/console/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
							<a href="/console/billing" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Billing</a>
							<a href="/console/team" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Team</a>
							<a href="/console/subscription" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Subscription</a>
							<div class="border-t border-gray-100"></div>
							<a href="/console/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<main>
		<slot />
	</main>
</div>
