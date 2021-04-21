/* eslint-disable quotes */
<template>
  <div>
    <ul>
      <li class="box" :key="company.id" v-for="company in companies">
        <p>ID: {{ company.id }}</p>
        <p>Name: {{ company.name }}</p>
        <div class="buttons">
          <router-link
            :to='{ name: "company", params: {id: company.id} }'
            class="button is-primary is-outlined"
          >
            View
          </router-link>
          <router-link
            :to='{ name: "edit", params: {id: company.id}}'
            class="button"
          >
            Edit
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CompanyService from '@/services/CompanyService';

export default {
  name: 'Companies',
  data() {
    return {
      companies: [],
    };
  },
  async mounted() {
    this.companies = await CompanyService.getAll();
  },
};
</script>
