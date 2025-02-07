import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

//const newsPosts = defineCollection({
//    loader: glob({ pattern: "**/*.md", base: "./src/data/news" }),
//    schema: z.object({
//        date: z.date(),
//        file: z.string(),
//    })
//});

const newsletters = defineCollection({
    loader: file("src/data/newsletters.yaml"),
});

const camps = defineCollection({
    loader: file("src/data/camps.yaml"),
});

const caeWorkshops = defineCollection({
    loader: file("src/data/cae/workshops.yaml"),
})

export const collections = { newsletters, camps, caeWorkshops };
