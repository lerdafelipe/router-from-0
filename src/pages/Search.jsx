import React from 'react'

const Search = ({ routeParams }) => {
  return (
    <div>
      <h2>Buscador</h2>
      <h4 style={{ color: 'orange' }}>La busqueda realizada es: <span style={{ color: 'yellow' }}>{routeParams.query}</span></h4>
    </div>
  )
}

export default Search
