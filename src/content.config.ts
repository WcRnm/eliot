import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const newsletters = defineCollection({
    loader: file("src/data/newsletters.yaml"),
});

const campJobGroups = defineCollection({
    loader: file("src/data/camp-job-groups.yaml"),
});

const campJobs = defineCollection({
    loader: file("src/data/campJobs.yaml"),
});

const camps = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/pages/camps'}),
});

const workshops = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/cae'}),
    schema: ({ image }) => z.object({
        year: z.number(),
        title: z.string(),
        presenter: z.string(),
        presenterUrl: z.string().optional(),
        img: image(),
        alt: z.string().optional(),
    })
});

export const collections = { newsletters, workshops, campJobGroups, campJobs, camps };
