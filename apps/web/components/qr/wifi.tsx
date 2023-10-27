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
  ssid: z.string(),
  password: z.string(),
  encryption: z.string(), //WEP,WPA, WPA2-EAP,(nopass || '')
  hidden: z.boolean(),
});

export function Wifi() {
  const { setQrValue } = useContext(QrContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hidden: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { ssid, encryption, password, hidden } = values;
    setQrValue(`WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden};`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="ssid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wifi</FormLabel>
              <FormControl>
                <Input placeholder="wifi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="encryption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>encryption</FormLabel>
              <FormControl>
                <Input placeholder="encryption" {...field} />
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
