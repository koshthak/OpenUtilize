"use client";

import * as z from "zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QrContext } from "./wrapper";

const formSchema = z.object({
  title: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  website: z.string().url(),
  company: z.string(),
  jobTitle: z.string(),
  address: z.string(),
  postalCode: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
});

export function VCard() {
  const { setQrValue } = useContext(QrContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // const { title, firstName, lastName, website, email, address  } = values;
    // const vCardString = `BEGIN:VCARD
    //                       VERSION:3.0
    //                       FN:${name}
    //                       ORG:${org}
    //                       TEL:${tel}
    //                       URL:${url}
    //                       EMAIL:${email}
    //                       ADR:${address}
    //                       NOTE:${note}
    //                       END:VCARD`;
    setQrValue(values.firstName);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
