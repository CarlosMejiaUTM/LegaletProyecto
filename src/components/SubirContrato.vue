<template>
  <div class="container">
    <h1 class="mb-4">Subir Contrato</h1>
    <p>Por favor, sigue las siguientes etapas para subir tu contrato:</p>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a :class="['nav-link', stage === 'crear' ? 'active' : '']" id="pills-crear-tab" data-toggle="pill" href="#pills-crear" role="tab" aria-controls="pills-crear" aria-selected="true"><i class="fas fa-pencil-alt"></i> Crear</a>
      </li>
      <li class="nav-item">
        <a :class="['nav-link', stage === 'compartir' ? 'active' : '']" id="pills-compartir-tab" data-toggle="pill" href="#pills-compartir" role="tab" aria-controls="pills-compartir" aria-selected="false"><i class="fas fa-share-alt"></i> Compartir</a>
      </li>
      <li class="nav-item">
        <a :class="['nav-link', stage === 'firmar' ? 'active' : '']" id="pills-firmar-tab" data-toggle="pill" href="#pills-firmar" role="tab" aria-controls="pills-firmar" aria-selected="false"><i class="fas fa-signature"></i> Firmar</a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div :class="['tab-pane fade', stage === 'crear' ? 'show active' : '']" id="pills-crear" role="tabpanel" aria-labelledby="pills-crear-tab">
        <input type="file" id="pdfUpload" accept=".pdf" @change="onPdfUpload" class="form-control-file mb-3" />
        <button id="nextButton" @click="onNext" class="btn btn-primary">Siguiente</button>
      </div>
      <div :class="['tab-pane fade', stage === 'compartir' ? 'show active' : '']" id="pills-compartir" role="tabpanel" aria-labelledby="pills-compartir-tab">
        <div v-for="(signer, index) in signers" :key="index" class="mb-3">
          <input type="email" :id="'emailInput' + index" placeholder="Correo electrónico" v-model="signer.email" class="form-control mb-2" />
          <input type="text" :id="'nameInput' + index" placeholder="Nombre" v-model="signer.name" class="form-control mb-2" />
        </div>
        <input type="email" id="emailInput" placeholder="Correo electrónico" v-model="email" class="form-control mb-2" />
        <input type="text" id="nameInput" placeholder="Nombre" v-model="name" class="form-control mb-2" />
        <button id="addSignerButton" @click="onAddSigner" class="btn btn-secondary mb-2">Añadir firmante</button>
        <button id="shareButton" @click="onShare" class="btn btn-primary-dark mb-2">Compartir</button>
      </div>
      <div :class="['tab-pane fade', stage === 'firmar' ? 'show active' : '']" id="pills-firmar" role="tabpanel" aria-labelledby="pills-firmar-tab">
        <!-- ... aqio va lo de firmar -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubirContrato",
  data() {
    return {
      pdfFile: null,
      email: '',
      name: '',
      signers: [],
      stage: 'crear',
    };
  },
  methods: {
    onPdfUpload(event) {
      this.pdfFile = event.target.files[0];
    },
    onNext() {
      if (this.stage === 'crear') {
        this.stage = 'compartir';
      }
    },
    onAddSigner() {
      this.signers.push({ email: this.email, name: this.name });
      this.email = '';
      this.name = '';
    },
    onShare() {
      //lógica para la etapa de compartir
    },
  },
};
</script>

<style scoped>
  .container {
    margin-top: 100px;
    background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/geometry-2.png");
    border: 10px solid transparent;
    border-image: linear-gradient(to right, #9b59b6, #8e44ad);
    border-image-slice: 1;
  }

  .nav-link {
    color: #9b59b6;
    font-weight: bold;
    transition: 0.3s;
  }

  .nav-link:hover {
    color: #8e44ad;
    transform: scale(1.1);
  }

  .nav-link.active {
    color: white;
    background-color: #9b59b6;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-family: "Roboto", sans-serif;
    color: #8e44ad; 
  }

  p {
    font-family: "Lato", sans-serif;
    color: #9b59b6; 
  }

  .btn-primary {
    background-color: #2c3e50; 
    border-color: #2c3e50; 
  }

  .btn-primary:hover {
    background-color: #34495e;
    border-color: #34495e;
  }

  .btn-secondary {
    background-color: #34495e;
    border-color: #34495e; 
  }

  .btn-secondary:hover {
    background-color: #2c3e50;
    border-color: #2c3e50;
  }

  .btn-primary-dark {
    background-color: #2c3e50;
    border-color: #2c3e50;
  }

  .btn-primary-dark:hover {
    background-color: #34495e; 
    border-color: #34495e; 
  }

  .mb-2 {
    margin-bottom: 10px;
  }
</style>
