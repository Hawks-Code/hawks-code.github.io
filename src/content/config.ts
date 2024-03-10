// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const projects = defineCollection({
	type: "content", // v2.5.0 and later
	schema: z.object({
		title: z.string().min(1)
	})
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	projects
};
