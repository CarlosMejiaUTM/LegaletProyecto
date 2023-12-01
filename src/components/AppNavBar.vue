<template>
  <header>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">

        <a class="navbar-brand" href="/inicioApp">
          <img src="../assets/logo.png" alt="Mi Sitio" width="50" height="50" class="logo">
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav mr-auto">
            <li class="nav-item" :class="{ active: $route.path === '/SubirContrato' }">
              <router-link class="nav-link" to="/SubirContrato">Subir Contrato</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/AdministrarContratos' }">
              <router-link class="nav-link" to="/AdministrarContratos">Contratos</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/VerClientes' }">
              <router-link class="nav-link" to="/VerClientes">Administrar Clientes</router-link>
            </li>
          </ul>
          
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link btn btn-outline-light" to="/login">Iniciar sesión</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link btn btn-outline-light" to="/registro">Registrarse</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
