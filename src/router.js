import { createRouter, createWebHistory } from 'vue-router';
import InicioApp from '../src/components/InicioApp.vue';
import SubirContrato from '../src/components/SubirContrato.vue';
import AdministrarContratos from '../src/components/AdministrarContratos.vue';
import VerClientes from '../src/components/VerClientes.vue';
import Login from '../src/components/Login.vue';
import RegistrarCliente from '../src/components/RegistrarCliente.vue';

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioApp
  },
  {
    path: '/SubirContrato',
    name: 'subirContrato',
    component: SubirContrato
  },
  {
    path: '/AdministrarContratos',
    name: 'administrarContratos',
    component: AdministrarContratos
  },
  {
    path: '/VerClientes',
    name: 'verClientes',
    component: VerClientes
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistrarCliente
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
