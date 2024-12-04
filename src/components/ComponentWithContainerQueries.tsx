const ComponentWithContainerQueries = () => {
  return (
    <div className="@container">
      <div className="@max-sm:bg-red-500 @max-lg:bg-green-500">Contenido que cambia de color segun el tamaño del contenedor</div>
    </div>
  )
}


export default ComponentWithContainerQueries

