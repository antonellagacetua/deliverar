import "../styles/layout.css"

function Layout({ children }) {
  const { width } = window.screen
  const getImageSize = () => {
    if (width < 1500) {
      return "150vh"
    } else {
      return "100%"
    }
  }
  return (
    <div className="layout">
      <img
        className="backgroundPage"
        alt="Imagen de fondo"
        src="/images/PuertoLagoEscobarIMG.jpg"
        style={{ height: getImageSize() }}
      />
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
