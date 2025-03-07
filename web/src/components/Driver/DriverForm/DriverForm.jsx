import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
import { gql } from 'graphql-tag'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const GET_COMPANIES = gql`
query GetCompanies {
  companies {
    id
    name
  }
}
`

const DriverForm = (props) => {
  const onSubmit = (data, event) => {
    const selectedCompany = event.target.elements.id_company.value

    if (!selectedCompany) {
      alert("Debe seleccionar una empresa antes de guardar.")
      return
    }

    data.id_company = parseInt(selectedCompany, 10)
    props.onSave(data, props?.driver?.id)
  }

  const { data, loading, error } = useQuery(GET_COMPANIES)

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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.driver?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="cpf"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cpf
        </Label>

        <TextField
          name="cpf"
          defaultValue={props.driver?.cpf}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="cpf" className="rw-field-error" />

        <Label
          name="birthDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Birth date
        </Label>

        <DatetimeLocalField
          name="birthDate"
          defaultValue={formatDatetime(props.driver?.birthDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="birthDate" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>

        <TextField
          name="phone"
          defaultValue={props.driver?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.driver?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        {/* <Label
          name="id_company"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Id company
        </Label>

        <NumberField
          name="id_company"
          defaultValue={props.driver?.id_company}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        /> */}

        <Label
          name="id_company"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Empresa
        </Label>

        <select name="id_company" className="rw-input" defaultValue={props.driver?.id_company || ''} required>
          <option value="" disabled>Seleccione una empresa</option>
          {data?.companies?.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
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

export default DriverForm
