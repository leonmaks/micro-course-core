export type CourseType = {
  id: string
  name: string
  dscr: string | null
}

export type CourseCreateType = {
  name: string
  dscr?: string
}

export type CourseDeleteType = {
  id: string
}
