"use client";

import { Button } from "@/components";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);

          alert("Email sent Successfully");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Sorry, there is something went wrong, please send to : lee.ninghsin@gmail.com"
          );
        }
      );
  };

  return (
    <div className="form-box sm:w-[90vw] md:w-[80vw] lg:w-[60vw] rounded bg-white">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center gap-3 py-[15px] border-2 border-[#120A19] rounded-md shadow-lg"
      >
        <h2 className="text-5xl mx-[4%] my-auto font-bold">Contact</h2>
        <hr className="w-[60%] border border-[#120A19]" />
        <div className="w-full flex flex-col justify-center gap-2 px-8">
          <label htmlFor="name" className="p-[1vh]"></label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="What's your name?"
            className="rounded border-2 border-[#120A19] bg-[#cfdee9]"
          />

          <label htmlFor="email" className="p-[1vh]"></label>
          <input
            name="user_email"
            type="email"
            id="email"
            placeholder="Please enter your email"
            className="rounded border-2 border-[#120A19] bg-[#cfdee9]"
          />

          <label htmlFor="msg" className="p-[1vh]"></label>
          <textarea
            name="message"
            id="msg"
            minLength="10"
            cols="20"
            rows="8"
            placeholder="Leave a message, any advise appreciated!"
            required
            className="rounded border-2 border-[#120A19] bg-[#cfdee9]"
          ></textarea>
        </div>
        <Button btnType="primary" content="Send" type="submit" value="Send" />
      </form>
    </div>
  );
}
