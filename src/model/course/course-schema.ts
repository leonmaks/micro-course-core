import { z } from "zod"

export const courseCreateSchema = z.object({
  name: z.string(),
  dscr: z.string()
})

export type CourseCreateSchemaType = z.infer<typeof courseCreateSchema>
