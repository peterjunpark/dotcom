// @ts-check

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://peterjunpark.com",
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: "JetBrainsMono",
			cssVariable: "--font-jetbrains-mono",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/JetBrainsMono-Regular.woff2"],
						weight: "normal",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/JetBrainsMono-Italic.woff2"],
						weight: "normal",
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/JetBrainsMono-Bold.woff2"],
						weight: "bold",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/JetBrainsMono-BoldItalic.woff2"],
						weight: "bold",
						style: "italic",
					},
				],
			},
		},
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: "ayu-light",
				dark: "ayu-dark",
			},
		},
	},
	adapter: cloudflare({
		imageService: "compile",
	}),
});
