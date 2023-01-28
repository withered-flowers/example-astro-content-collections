import { z, defineCollection } from "astro:content";

// We will define the collection for course here
// Every Content of /src/course have to comply with this collection
// If not, error will be thrown
const courseCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  courses: courseCollection,
};
