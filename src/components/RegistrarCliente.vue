<template>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
  <div class="container">
    <h1>CrearCuenta</h1>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" required />
        </div>
        <div class="form-group col-md-6">
          <label for="apellido">Apellido</label>
          <input type="text" class="form-control" id="apellido" required />
        </div>
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="nombre@ejemplo.com"
          required
        />
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono</label>
        <input type="tel" class="form-control" id="telefono" required />
      </div>
      <div class="form-group">
        <label for="direccion">Dirección</label>
        <input type="text" class="form-control" id="direccion" required />
      </div>
      
      <button type="submit" class="btn btn-primary">Registrar</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "RegistrarCliente",
  };
</script>

<style scoped>
  .container {
    margin-top: 100px;
    background-color: #f8f9fa;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
  }

  .form-control {
    box-shadow: none;
    border-color: #9b59b6;
    transition: 0.3s;
  }

  .form-control:focus {
    border-color: #8e44ad;
    box-shadow: 0 0 0 0.2rem rgba(139, 68, 173, 0.25);
  }

  .btn {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  h1 {
    font-family: "Roboto", sans-serif;
    color: #2c3e50;
  }

  label {
    font-family: "Open Sans", sans-serif;
    color: #8e44ad;
  }
</style>
