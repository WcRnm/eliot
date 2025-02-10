import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

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

export const collections = { newsletters, caeWorkshops, campJobGroups, campJobs };
