"use client"
import { useTransition } from "react"

import { CourseDeleteType, CourseType } from "@/model/course/course-types"

import { Button } from "@/shared/shadcn-ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/shared/shadcn-ui/card"
import { deleteCourse } from "@/sa/course/delete-course.srv"

type Props = {
  course: CourseType,
  pagePathRevalidate?: string
}

export const CourseItem = ({
  course,
  pagePathRevalidate
}: Props) => {

  const [pending, startTransition] = useTransition()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.dscr}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          disabled={pending}
          onClick={() => {
            startTransition(async () => {
              await deleteCourse({ id: course.id }, pagePathRevalidate)
            })
          }}
        >Delete</Button>
      </CardFooter>
    </Card>
  )
}
