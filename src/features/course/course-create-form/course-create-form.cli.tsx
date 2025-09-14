"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/shared/shadcn-ui/input"
import { Button } from "@/shared/shadcn-ui/button"
import { Textarea } from "@/shared/shadcn-ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/shared/shadcn-ui/form"

import {
  courseCreateSchema,
  CourseCreateSchemaType
} from "@/model/course/course-schema"
import { courseCreateAction } from "./course-create-action.srv"

type Props = {
  pagePath: string
}

export const CourseCreateForm = ({ pagePath }: Props) => {

  const [pending, startTransition] = useTransition()

  const form = useForm<CourseCreateSchemaType>({
    resolver: zodResolver(courseCreateSchema),
    defaultValues: {
      name: "",
      dscr: ""
    }
  })

  return (
    <Form  {...form}>
      <form
        onSubmit={form.handleSubmit(data => {
          startTransition(async () => {
            await courseCreateAction(data, pagePath)
          })
        })}
        className="space-y-8"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Course name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="dscr"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Course description ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={pending} type="submit">Submit</Button>

      </form>
    </Form>
  )
}
