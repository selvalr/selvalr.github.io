import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import emailjs from "emailjs-com";

import "../Contact-form/contact-form.css"; // Plain CSS

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_vp9d5fp",
        "template_unsgnyh",
        {
          name: data.name,
          email: data.email,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        "gzP-u99lX41_pUo9Y"
      );
      // Replace this with your real send logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Email sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message!");
    }
    setIsLoading(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} spellCheck="false">
      <div className="field">
        <input
          className={`input ${errors.name ? "input-error" : ""}`}
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required." })}
        />
        {/* {errors.name && <span className="error">{errors.name.message}</span>} */}
      </div>

      <div className="field">
        <input
          className={`input ${errors.email ? "input-error" : ""}`}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {/* {errors.email && <span className="error">{errors.email.message}</span>} */}
      </div>

      <div className="field">
        <textarea
          className={`input ${errors.message ? "input-error" : ""}`}
          rows={6}
          placeholder="Message"
          {...register("message", { required: "Message is required." })}
        />
        {/* {errors.message && <span className="error">{errors.message.message}</span>} */}
      </div>

      <button className="submit-btn" type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Submit"}
      </button>
        <ToastContainer position="top-right" autoClose={3000} />
    </form>
  );
};



export { ContactForm };
