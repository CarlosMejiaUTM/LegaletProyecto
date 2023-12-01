<template>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
  <div class="container">
    <h1>Iniciar sesión</h1>
    <form>
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="nombre@ejemplo.com"
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" />
      </div>
      <button type="submit" class="btn btn-primary">Iniciar sesión</button>
    </form>
    <p class="mt-3">
      ¿No tienes una cuenta? <router-link to="/registro">Regístrate aquí</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: "UserLogin",
  };
</script>

<style scoped>
  .container {
    margin-top: 100px;
    background-color: #f8f9fa;
    background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/contract.png");
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

  p {
    font-family: "Lato", sans-serif;
    color: #34495e;
  }
</style>
