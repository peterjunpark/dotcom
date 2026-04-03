// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://peterjunpark.com",
	integrations: [mdx(), sitemap()],

	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Ubuntu Mono",
			cssVariable: "--font-ubuntu-mono",
		},
	],

	adapter: cloudflare(),
});
