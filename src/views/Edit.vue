<template>
  <div class="container">
    <p class="title">Edit Page</p>
    <form @submit="onSubmit">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Company Name"
            name="name"
            v-model="companyName"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Domain</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Company Domain"
            name="domain"
            v-model="companyDomain"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Number of Employees</label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="10000"
            name="numberOfEmployees"
            v-model="numberOfEmployees"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">SubScriptions Per Employee</label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="5"
            name="subscriptionsPerEmployee"
            v-model="subscriptionsPerEmployee"
          />
        </div>
      </div>
      <input type="submit" value="Update Company" class="button blockk" />
    </form>
  </div>
</template>

<script>
import CompanyService from '@/services/CompanyService';

export default {
  name: 'Edit',
  data() {
    return {
      companyId: this.$route.params.id,
      companyName: '',
      companyDomain: '',
      numberOfEmployees: 0,
      subscriptionsPerEmployee: 0,
    };
  },
  async mounted() {
    const company = await CompanyService.getById(this.companyId);
    this.companyName = company.name;
    this.companyDomain = company.domain;
    this.numberOfEmployees = company.numberOfEmployees;
    this.subscriptionsPerEmployee = company.subscriptionsPerEmployee;
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      alert(
        `
          Company Name: ${this.companyName}
          Company Domain: ${this.companyDomain}
          Number of Employees: ${this.numberOfEmployees}
          Subscriptons per Employee: ${this.subscriptionsPerEmployee}
        `,
      );
    },
  },
};
</script>
