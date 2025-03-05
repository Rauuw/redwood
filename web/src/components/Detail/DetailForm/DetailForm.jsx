import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const DetailForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.detail?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="id_order"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Id order
        </Label>

        <NumberField
          name="id_order"
          defaultValue={props.detail?.id_order}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="id_order" className="rw-field-error" />

        <Label
          name="id_company"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Id company
        </Label>

        <NumberField
          name="id_company"
          defaultValue={props.detail?.id_company}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="id_company" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DetailForm
