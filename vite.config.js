import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.ts"),
			name: "TestUtil",
			fileName: "main",
		},
		rollupOptions: {
			output: {
				globals: {
					testUtil: "TestUtil",
				},
			},
		},
	},
});
