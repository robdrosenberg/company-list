<template>
  <div class="container">
    <h1 class="title">Company Details</h1>
    <p class="block">Name: {{ companyName }}</p>
    <p class="block">Domain: {{ companyDomain }}</p>
    <div class="block">
      <EmployeeCountChange
        v-on:increase-employee-count="numberOfEmployees += 1"
        v-on:decrease-employee-count="numberOfEmployees -= 1"
        :numberOfEmployees="numberOfEmployees"
      />
    </div>
    <p class="block">
      Subscriptions per Employee: {{ subscriptionsPerEmployee }}
    </p>
    <p class="block">
      Total Subscriptions: {{ numberOfEmployees * subscriptionsPerEmployee }}
    </p>
  </div>
</template>

<script>
import CompanyService from '@/services/CompanyService';
import EmployeeCountChange from '../components/EmployeeCountChange.vue';

export default {
  name: 'Company',
  components: {
    EmployeeCountChange,
  },
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
  emits: ['increase-employee-count', 'decrease-employee-count'],
};
</script>
