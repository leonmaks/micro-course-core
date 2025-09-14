"use server"

import { revalidatePath } from "next/cache"

import { CourseCreateSchemaType } from "@/model/course/course-schema"
import { createCourse } from "@/sa/course/create-course.srv"

export const courseCreateAction = async (
  values: CourseCreateSchemaType,
  pagePath?: string
) => {
  const course = await createCourse(values)
  if (pagePath) revalidatePath(pagePath)
  return course
}
