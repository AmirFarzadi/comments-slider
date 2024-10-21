import { defineStore } from "pinia";

export const useEmployees = defineStore("employees", {
  state: () => ({
    showEmployees: {
      id: "",
      name: "",
      profile_picture: "",
      job_title: "",
      description: "",
    },
    counter: 0,
  }),
  actions: {
    updateEmployee(Employees) {
      Employees.forEach((item, index) => {
        index == this.counter ? (this.showEmployees = item) : "";
      });
    },
    showNextEmploee(Employees) {
      this.counter++;
      this.counter > Employees.length - 1 ? (this.counter = 0) : "";
      this.updateEmployee(Employees);
    },
    showPreviousEmploee(Employees) {
      this.counter--;
      this.counter < 0 ? (this.counter = Employees.length - 1) : "";
      this.updateEmployee(Employees);
    },
  },
    persist:true
});
