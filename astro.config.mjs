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
			provider: fontProviders.fontsource(),
			name: "IBM Plex Mono",
			cssVariable: "--font-ibm-plex-mono",
		},
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: "everforest-dark",
				dark: "everforest-light",
			},
		},
	},
	adapter: cloudflare({
		imageService: "compile",
	}),
});
