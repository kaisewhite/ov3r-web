<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

	// Mock data for demonstration
	const projects = [
		{
			id: '1',
			name: 'Tax Law Knowledge Base',
			description: 'Knowledge base for tax regulations and case studies',
			createdAt: '2024-02-23',
			status: 'Active'
		},
		{
			id: '2',
			name: 'Corporate Documentation',
			description: 'Internal documentation and procedures',
			createdAt: '2024-02-22',
			status: 'Processing'
		}
	];

	function handleEdit(projectId: string) {
		// TODO: Implement edit functionality
		console.log('Edit project:', projectId);
	}

	function handleDelete(projectId: string) {
		// TODO: Implement delete functionality
		console.log('Delete project:', projectId);
	}
</script>

<div class="py-6 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-3xl font-bold text-gray-900">Projects</h1>
				<p class="mt-2 text-sm text-gray-700">
					A list of all your Comprehend projects and their current status.
				</p>
			</div>
			<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:w-auto"
				>
					Create Project
				</button>
			</div>
		</div>

		<div class="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
			<table class="min-w-full divide-y divide-gray-300">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
							Name
						</th>
						<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
							Description
						</th>
						<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
							Created
						</th>
						<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
							Status
						</th>
						<th scope="col" class="relative py-3.5 px-3 w-20">
							<span class="sr-only">Actions</span>
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each projects as project}
						<tr>
							<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
								<a href="/comprehend/projects/{project.id}/conversations" class="hover:text-indigo-600">
									{project.name}
								</a>
							</td>
							<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{project.description}</td>
							<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{project.createdAt}</td>
							<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{project.status}</td>
							<td class="whitespace-nowrap px-3 py-4 text-center">
								<DropdownMenu.Root>
									<DropdownMenu.Trigger class="text-2xl text-gray-500 hover:text-gray-700">&hellip;</DropdownMenu.Trigger>
									<DropdownMenu.Content>
										<DropdownMenu.Item on:click={() => handleEdit(project.id)} class="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
											Edit
										</DropdownMenu.Item>
										<DropdownMenu.Item on:click={() => handleDelete(project.id)} class="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-gray-100">
											Delete
										</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
