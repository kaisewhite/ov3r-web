<script>
	// Mock user data for demonstration
	const user = {
		name: 'John Doe',
		email: 'john.doe@example.com',
		role: 'Administrator',
		organization: 'ACME Corp',
		timeZone: 'America/New_York',
		language: 'English (US)',
		twoFactorEnabled: true,
		notificationsEnabled: true
	};

	function handleSaveProfile() {
		// TODO: Implement profile update logic
		console.log('Saving profile changes');
	}

	function handleChangePassword() {
		// TODO: Implement password change logic
		console.log('Changing password');
	}
</script>

<div class="py-6 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<div class="md:grid md:grid-cols-3 md:gap-6">
			<div class="md:col-span-1">
				<div class="px-4 sm:px-0">
					<h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
					<p class="mt-1 text-sm text-gray-600">
						Manage your account settings and preferences.
					</p>
				</div>
			</div>

			<div class="mt-5 md:mt-0 md:col-span-2">
				<form on:submit|preventDefault={handleSaveProfile}>
					<div class="shadow sm:rounded-md sm:overflow-hidden">
						<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
							<!-- Personal Information -->
							<div>
								<h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
								<div class="mt-6 grid grid-cols-6 gap-6">
									<div class="col-span-6 sm:col-span-3">
										<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
										<input
											type="text"
											name="name"
											id="name"
											value={user.name}
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-6 sm:col-span-3">
										<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
										<input
											type="email"
											name="email"
											id="email"
											value={user.email}
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-6 sm:col-span-3">
										<label for="organization" class="block text-sm font-medium text-gray-700">Organization</label>
										<input
											type="text"
											name="organization"
											id="organization"
											value={user.organization}
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-6 sm:col-span-3">
										<label for="role" class="block text-sm font-medium text-gray-700">Role</label>
										<input
											type="text"
											name="role"
											id="role"
											value={user.role}
											disabled
											class="mt-1 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
								</div>
							</div>

							<!-- Preferences -->
							<div class="mt-6">
								<h3 class="text-lg leading-6 font-medium text-gray-900">Preferences</h3>
								<div class="mt-6 grid grid-cols-6 gap-6">
									<div class="col-span-6 sm:col-span-3">
										<label for="timezone" class="block text-sm font-medium text-gray-700">Time Zone</label>
										<select
											id="timezone"
											name="timezone"
											class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										>
											<option selected={user.timeZone === 'America/New_York'}>America/New_York</option>
											<option selected={user.timeZone === 'America/Los_Angeles'}>America/Los_Angeles</option>
											<option selected={user.timeZone === 'Europe/London'}>Europe/London</option>
										</select>
									</div>

									<div class="col-span-6 sm:col-span-3">
										<label for="language" class="block text-sm font-medium text-gray-700">Language</label>
										<select
											id="language"
											name="language"
											class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										>
											<option selected={user.language === 'English (US)'}>English (US)</option>
											<option selected={user.language === 'Spanish'}>Spanish</option>
											<option selected={user.language === 'French'}>French</option>
										</select>
									</div>
								</div>
							</div>

							<!-- Security -->
							<div class="mt-6">
								<h3 class="text-lg leading-6 font-medium text-gray-900">Security</h3>
								<div class="mt-4 space-y-4">
									<div class="flex items-start">
										<div class="flex items-center h-5">
											<input
												id="two-factor"
												name="two-factor"
												type="checkbox"
												checked={user.twoFactorEnabled}
												class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
											/>
										</div>
										<div class="ml-3 text-sm">
											<label for="two-factor" class="font-medium text-gray-700">Two-factor authentication</label>
											<p class="text-gray-500">Enable two-factor authentication for enhanced security.</p>
										</div>
									</div>

									<div class="flex items-start">
										<div class="flex items-center h-5">
											<input
												id="notifications"
												name="notifications"
												type="checkbox"
												checked={user.notificationsEnabled}
												class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
											/>
										</div>
										<div class="ml-3 text-sm">
											<label for="notifications" class="font-medium text-gray-700">Email notifications</label>
											<p class="text-gray-500">Receive email notifications for important updates.</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3">
							<button
								type="button"
								on:click={handleChangePassword}
								class="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Change Password
							</button>
							<button
								type="submit"
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Save Changes
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
