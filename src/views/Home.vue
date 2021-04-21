<template>
  <div class="container">
    <h1 class="title">Company List</h1>
    <Companies />
  </div>
</template>

<script>
import Companies from '../components/Companies.vue';

export default {
  name: 'home',
  components: {
    Companies,
  },
};
</script>
