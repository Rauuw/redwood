// import { Link, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { Form, Submit, TextField, TextAreaField, FieldError, Label, FormError, useForm } from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'


const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
  createContact(input: $input) {
    id
  }
}
`
const ContactPage = () => {
  const formMethods = useForm({mode: 'onBlur'})
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  return (
    <>
      <Metadata title="Contact" description="Contact page" />
      <Toaster />
      <Form onSubmit={onSubmit} error={error} formMethods={formMethods}>
      <FormError error={error} titleClassName="form-error"/>
        <Label name='name' errorClassName='error'>Name</Label>
        <TextField name="name" validation={{ required: true }} errorClassName='error' />
        <FieldError name="name" className="error" />

        <Label name='email' errorClassName='error'>Email</Label>
        <TextField name="email" validation={{
          required: true, pattern: {
            value: /^[^@]+@[^.]+\..+$/,
            message: 'Please enter a valid email address',
          },
        }} errorClassName='error' />
        <FieldError name="email" className="error" />

        <Label name='message' errorClassName='error'>Message</Label>
        <TextAreaField name="message" validation={{ required: true }} errorClassName='error' />
        <FieldError name="message" className="error" />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
