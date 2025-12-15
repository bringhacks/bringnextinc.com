import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export function ContactForm() {
  const [state, handleSubmit] = useForm('xvgenpzg')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}
