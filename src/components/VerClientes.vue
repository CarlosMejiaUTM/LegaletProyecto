<template>
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    <div class="container">
      <h1>Administrar Clientes</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del cliente</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col">Estado del contrato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cliente 1</td>
            <td>cliente1@example.com</td>
            <td>Contrato abierto</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VerClientes'
  }
  </script>
  
  <style scoped>
  .container {
    margin-top: 100px; 
  }
  </style>
  