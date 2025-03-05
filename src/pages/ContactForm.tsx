import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

export default function ContactForm(): JSX.Element {
  type Inputs = {
    first: string;
    last: string;
    phone: string;
    email: string;
    message: string;
  };

  const [sentClassName, setSentClassName] = useState("email-sent hide");
  const [formClassName, setFormClassName] = useState("form");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Send email using emailjs
      await emailjs.send(
        // below is "YOUR_SERVICE_ID"
        "service_5dojscs",
        // below is "YOUR_TEMPLATE_ID"
        "template_h9jdqem",
        data,
        // below is "YOUR_USER_ID"/public key
        "e-OxdRb4JXB7JDIzC"
      );
      setSentClassName("email-sent");
      setFormClassName("form hide");
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };

  return (
    <div>
      <div className={sentClassName}>
        Thank you for contacting us. We will be in touch soon!
      </div>
      <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first" />
        <div className="w-full mb-4">
          {' '}
          <input
            className="w-full"
            id="first"
            placeholder="First Name*"
            {...register('first', { required: true })}
          />
          {errors.first && (
            <span className="required-field">This field is required</span>
          )}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="last" />
          <input
            className="w-full"
            id="last"
            placeholder="Last Name*"
            {...register('last', { required: true })}
          />
          {errors.last && (
            <span className="required-field">This field is required</span>
          )}
        </div>

        <label htmlFor="phone" />
        <div className="w-full mb-4">
          {' '}
          <input
            className="w-full"
            id="phone"
            placeholder="Phone*"
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <span className="required-field">This field is required</span>
          )}
        </div>

        <label htmlFor="email" />
        <div className="w-full mb-4">
          {' '}
          <input
            className="w-full"
            id="email"
            placeholder="Email*"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="required-field">This field is required</span>
          )}
        </div>

        <label htmlFor="message" />
        <div className="w-full mb-4 ">
          {' '}
          <textarea
            className="w-full min-h-[100px] border-slate-300 p-2"
            id="message"
            placeholder="Message*"
            {...register('message', { required: true })}
          />
          {errors.message && (
            <span className="required-field">This field is required</span>
          )}
        </div>

        <div>
          <p className="text-xs mb-4">
            By providing your phone number and submitting this form, you consent
            to receive text messages from Mass Commercial Cleaning regarding
            customer service inquiries or appointment confirmation. Message
            frequency may vary based on your interactions. Message and data
            rates may apply. For assistance, reply HELP or contact 413-251-4700.
            To stop receiving messages, reply STOP. No further messages will be
            sent. For details, see our{' '}
            <a
              className="text-blue-600"
              target="_blank"
              href="https://docs.google.com/document/d/1mx8E8Ij_s_GZz4c3PPofRxEg5XYo3UKZXlaS15iTfms/edit?usp=sharing"
            >
              Privacy Policy
            </a>
            .
          </p>
          <button
            type="submit"
            className="btn bg-[#F48700] text-white my-2 px-16"
            value="SEND MESSAGE"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}
