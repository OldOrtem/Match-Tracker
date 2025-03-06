import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// add this line at the top of the file
import tailwindcss from '@tailwindcss/vite';

// add the tailwindcss plugin to the plugins array

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
});
