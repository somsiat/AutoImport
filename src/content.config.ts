import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    // Do tytulu doklejana jest nazwa firmy, wiec limit jest ostrzejszy niz 65 znakow Google.
    title: z.string().max(48, 'Tytul + nazwa firmy przekroczy 65 znakow i Google go obetnie'),
    description: z.string().min(70).max(165, 'Meta description powyzej 165 znakow zostanie obcieta'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Redakcja AutoImport USA'),
    /** Glowna fraza kluczowa - pomaga pilnowac, by kazdy wpis mial inna. */
    keyword: z.string(),
    category: z.enum(['Poradniki', 'Koszty i podatki', 'Modele', 'Formalności']),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
