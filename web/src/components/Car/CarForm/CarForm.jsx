import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const CarForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.car?.id)
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
          name="marca"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Marca
        </Label>

        <TextField
          name="marca"
          defaultValue={props.car?.marca}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="marca" className="rw-field-error" />

        <Label
          name="modelo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Modelo
        </Label>

        <TextField
          name="modelo"
          defaultValue={props.car?.modelo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="modelo" className="rw-field-error" />

        <Label
          name="placa"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Placa
        </Label>

        <TextField
          name="placa"
          defaultValue={props.car?.placa}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="placa" className="rw-field-error" />

        <Label
          name="ano"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ano
        </Label>

        <NumberField
          name="ano"
          defaultValue={props.car?.ano}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ano" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Guardar
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CarForm
