import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 프로젝트 항목 — src/content/projects/*.json (명세 6장 구조)
const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/projects" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    order: z.number(),
    year: z.number().nullable(),
    period: z.string().optional(),
    roles: z.array(z.string()),
    stack: z.array(z.string()),
    summary: z.string().nullable(),
    thumbnail: z.string(),
    url: z.string(),
    links: z.array(
      z.object({ label: z.string(), url: z.string(), download: z.boolean().optional() }),
    ),
    archived: z.boolean(),
    gallery: z
      .array(z.object({ src: z.string(), caption: z.string(), width: z.number(), height: z.number() }))
      .optional(),
  }),
});

// 상세 본문 — src/content/project-details/*.md (자료가 있는 프로젝트만)
const projectDetails = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/project-details" }),
});

export const collections = { projects, projectDetails };
