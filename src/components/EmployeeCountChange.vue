<template>
  <div class="buttons">
    <p>Number of Employees:{{ numberOfEmployees }}</p>
    <button
      @click="increaseEmployees"
      class="button is-outlined is-primary is-small"
    >
      +
    </button>
    <button
      @click="decreaseEmployees"
      class="button is-outlined is-danger is-small"
    >
      -
    </button>
  </div>
</template>

<script>
export default {
  name: 'EmployeeCountChange',
  props: ['numberOfEmployees'],
  data() {
    return {
      employeeCount: this.numberOfEmployees,
    };
  },
  methods: {
    increaseEmployees() {
      this.employeeCount += 1;
      this.$emit('increase-employee-count');
    },
    decreaseEmployees() {
      this.employeeCount -= 1;
      this.$emit('decrease-employee-count');
    },
  },
};
</script>
