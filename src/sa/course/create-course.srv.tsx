"use server"

import { prisma } from "@/shared/lib/prisma"
import {
  CourseCreateType
} from "@/model/course/course-types"

export const createCourse = async (data: CourseCreateType) => (
  prisma.course.create({ data })
)
