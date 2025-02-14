import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const metadata = defineCollection({
    loader: file("src/data/metadata.yaml"),
});
const newsletters = defineCollection({
    loader: file("src/data/newsletters.yaml"),
});

const campJobGroups = defineCollection({
    loader: file("src/data/camp-job-groups.yaml"),
});

const campJobs = defineCollection({
    loader: file("src/data/campJobs.yaml"),
});

const docs = defineCollection({
    loader: file("src/data/docs.yaml"),
});

const board = defineCollection({
    loader: file("src/data/board.yaml"),
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
        photo: image(),
        width: z.number().optional(),
        art1: image().optional(),
        art1w: z.number().optional(),
        art2: image().optional(),
        art2w: z.number().optional(),
        art3: image().optional(),
        art3w: z.number().optional(),
    })
});

const committees = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/committees'}),
});

export const collections = { metadata, newsletters, workshops, campJobGroups, campJobs, camps, committees, docs, board };
