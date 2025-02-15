import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

// ------------ COMMON -------------
const metadata = defineCollection({
    loader: file("src/data/metadata.yaml"),
});

const board = defineCollection({
    loader: file("src/data/board.yaml"),
});

// ------------ DOCS -------------
const jobGroups = defineCollection({
    loader: file("src/data/job-groups.yaml"),
});    

const docTypes = defineCollection({
    loader: file("src/data/docs/doc-types.yaml"),
});

const newsDocs = defineCollection({
    loader: file("src/data/docs/news.yaml"),
});

const jobDocs = defineCollection({
    loader: file("src/data/docs/jobs.yaml"),
});

const miscDocs = defineCollection({
    loader: file("src/data/docs/misc.yaml"),
});

const policyDocs = defineCollection({
    loader: file("src/data/docs/policies.yaml"),
});

// ======================================================

// ------------ CAMPS -------------
const camps = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/pages/camps'}),
});

// ------------ CAE WORKSHOPS -------------
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

// ------------ COMMITTEES -------------
const committees = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/committees'}),
});

// ======================================================

export const collections = { 
    metadata, 
    board, 

    jobGroups, 
    jobDocs,

    docTypes,
    newsDocs,
    miscDocs,
    policyDocs,

    camps,
    workshops,
    committees,
 };
