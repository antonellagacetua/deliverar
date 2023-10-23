import "../styles/formLayout.css"

function FormLayout({ children, title }) {
  return (
    <div className="form-layout">
      <div className="container">
        <div className="image-container">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <h1>{title}</h1>
      </div>
      <div className="form-content">{children}</div>
    </div>
  )
}

export default FormLayout
