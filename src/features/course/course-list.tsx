import { getCourseList } from "@/sa/course/get-course-list.srv"
import { deleteCourse } from "@/sa/course/delete-course.srv"
import { CourseItem } from "./course-item/course-item.cli"
import { revalidatePath } from "next/cache"

type Props = {
  pagePathRevalidate: string
}

export const CourseList = async ({ pagePathRevalidate }: Props) => {

  const courseList = await getCourseList()

  return (
    <div>{
      courseList.map(course => (
        <CourseItem key={course.id} course={course} pagePathRevalidate={pagePathRevalidate} />
      ))
    }</div>
  )
}
