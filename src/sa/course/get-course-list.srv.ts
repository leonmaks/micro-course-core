"use server"

import { cache } from "react"

import { prisma } from "@/shared/lib/prisma"
import { CourseType } from "@/model/course/course-types"

export const getCourseList = cache(
  async (): Promise<CourseType[]> => prisma.course.findMany()
)
