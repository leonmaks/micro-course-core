"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/shared/lib/prisma"
import {
  CourseDeleteType
} from "@/model/course/course-types"

export const deleteCourse = async (
  where: CourseDeleteType,
  pagePathRevalidate?: string
) => {
  const result = await prisma.course.delete({ where })
  if (pagePathRevalidate) revalidatePath(pagePathRevalidate)
  return result
}
