<template>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <div class="container">
      <h1>Administrar Contratos</h1>
      <div class="row">
        <div class="col-md-3">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active"
              >Todas las categorías</a
            >
            <a href="#" class="list-group-item list-group-item-action"
              >Categoría 1</a
            >
            <a href="#" class="list-group-item list-group-item-action"
              >Categoría 2</a
            >
            <!-- Añade más categorías aquí -->
          </div>
        </div>
        <div class="col-md-9">
          <div class="card-columns">
            <div class="card">
              <img src="../assets/logo.png" class="card-img-top" alt="Contrato 1" />
              <div class="card-body">
                <h5 class="card-title">Contrato 1</h5>
                <p class="card-text">Detalles del contrato 1</p>
              </div>
            </div>
            <div class="card">
              <img src="../assets/logo.png" class="card-img-top" alt="Contrato 1" /> 
              <div class="card-body">
                <h5 class="card-title">Contrato 1</h5>
                <p class="card-text">Detalles del contrato 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "AdministrarContratos",
    };
  </script>
  
  <style scoped>
    .container {
      margin-top: 100px; 
      background-color: #ecf0f1; 
    }
  
    .card-columns {
      column-count: 3;
    }
  
    .card {
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
      transition: 0.3s;
    }
  
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  
    .card-img-top {
      width: 100%;
      height: 15vw;
      object-fit: cover;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  
    h1 {
      font-family: "Roboto", sans-serif;
      color: #2c3e50;
    }
  
    .card-title {
      font-family: "Open Sans", sans-serif;
      color: #8e44ad;
    }
  
    .card-text {
      font-family: "Lato", sans-serif;
      color: #34495e;
    }
  </style>
  