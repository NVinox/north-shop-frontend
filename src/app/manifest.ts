import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Северяночка - магазин молочных продуктов",
		short_name: "Северяночка",
		description: "Магазин молочных продуктов. Пейте молоко)",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#ff6633",
		icons: [
			{
				src: "/android-icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/android-icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/android-icon-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
