import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: [
			'@internationalized/date',
			'@floating-ui/dom',
			'focus-trap',
			'dequal',
			'nanoid/non-secure'
		]
	}
});
