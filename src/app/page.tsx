import { prisma } from "@/shared/lib/prisma"
import { CourseCreateForm } from "@/features/course/course-create-form/course-create-form.cli"
import { CourseList } from "@/features/course/course-list"

export default async function Page() {
  const func__ = "RootPage"

  const courses = await prisma.course.findMany()
  console.log(func__, "Fetch DB", { courses })

  return (
    <main className="min-h-screen max-w-md flex flex-col p-4">
      <div className="mb-5">
        <CourseCreateForm pagePath="/" />
      </div>
      <CourseList pagePathRevalidate="/" />
    </main>
  )
}
