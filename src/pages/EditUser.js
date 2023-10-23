import CreateAccountForm from "../components/CreateAccountForm"
import FormLayout from "../layouts/FormLayout"

function EditUserPage() {
  return (
    <FormLayout title="Editar cuenta">
      <CreateAccountForm isEdit={true} />
    </FormLayout>
  )
}

export default EditUserPage
