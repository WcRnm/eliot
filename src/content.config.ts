import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const newsletters = defineCollection({
    loader: file("src/data/newsletters.yaml"),
});

const caeWorkshops = defineCollection({
    loader: file("src/data/cae/workshops.yaml"),
});

const campJobGroups = defineCollection({
    loader: file("src/data/camp-job-groups.yaml"),
});

const campJobs = defineCollection({
    loader: file("src/data/campJobs.yaml"),
});


const camps = defineCollection({
    loader: glob({ pattern: '*.mdx', base: './src/pages/camps'})
});

export const collections = { newsletters, caeWorkshops, campJobGroups, campJobs, camps };
