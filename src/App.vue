<template>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
  <div id="app">
    <AppNavBar />
    <router-view />
  </div>
</template>

<script>
import AppNavBar from './components/AppNavBar.vue';

export default {
  name: 'App',
  components: {
    AppNavBar,
  },
}
</script>
