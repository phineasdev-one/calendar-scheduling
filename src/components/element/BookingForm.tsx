"use client";

import { createMeetingAction } from "@/app/action";
import React, { FC, useActionState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { bookingSchema } from "@/lib/zodSchemas";

type Props = {
  id: string;
  username: string;
  time: string | undefined;
  date: string | undefined;
  duration: number;
};

const BookingForm: FC<Props> = ({ id, username, date, duration, time }) => {
  const [lastResult, action] = useActionState(createMeetingAction, undefined);

  const [form, fields] = useForm({
    // Reuse the validation logic on the client
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bookingSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      className="flex flex-col gap-y-4"
      action={action}
      noValidate
      id={form.id}
      onSubmit={form.onSubmit}
    >
      <input type="hidden" name="eventTypeId" value={id} />
      <input type="hidden" name="username" value={username} />
      <input type="hidden" name="fromTime" value={time} />
      <input type="hidden" name="eventDate" value={date} />
      <input type="hidden" name="meetingLength" value={duration} />
      <div className="flex flex-col gap-y-1">
        <Label>Your Name</Label>
        <Input
          placeholder="Your Name"
          name={fields.name.name}
          key={fields.name.key}
        />
        <p className="text-red-500 text-sm">{fields.name.errors}</p>
      </div>

      <div className="flex flex-col gap-y-1">
        <Label>Your Email</Label>
        <Input
          name={fields.email.name}
          key={fields.email.key}
          placeholder="phianh.dev@gmail.com"
        />
        <p className="text-red-500 text-sm">{fields.email.errors}</p>
      </div>

      <SubmitButton text="Book Meeting" />
    </form>
  );
};

export default BookingForm;
