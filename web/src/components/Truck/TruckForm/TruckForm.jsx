import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
import { gql } from 'graphql-tag'

const GET_COMPANIES = gql`
query GetCompanies {
  companies {
    id
    name
  }
}
`

const TruckForm = (props) => {
  const { data, loading, error } = useQuery(GET_COMPANIES)
  const onSubmit = (data, event) => {
    const selectedCompany = event.target.elements.id_company.value

    if (!selectedCompany) {
      alert("Debe seleccionar una empresa antes de guardar.")
      return
    }

    data.id_company = parseInt(selectedCompany, 10)
    props.onSave(data, props?.truck?.id)
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
          defaultValue={props.truck?.marca}
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
          defaultValue={props.truck?.modelo}
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
          defaultValue={props.truck?.placa}
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
          Año
        </Label>

        <NumberField
          name="ano"
          defaultValue={props.truck?.ano}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ano" className="rw-field-error" />

        {/* <Label
          name="id_company"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Id company
        </Label>

        <NumberField
          name="id_company"
          defaultValue={props.truck?.id_company}
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

        <select name="id_company" className="rw-input" defaultValue={props.truck?.id_company || ''} required>
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

export default TruckForm
