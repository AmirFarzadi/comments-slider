<template>
  <div class="container">
    <div id="headerContainer" class="text-center">
      <h2 id="header">Customer reviews</h2>
    </div>

    <div
      id="siliderTemplate"
      class="d-flex flex-row mt-5"
      style="width: 900px; height: 300px"
    >
      <div
        id="leftIcon"
        class="px-3 d-flex align-items-center"
        @click="previousBtnHandler"
      >
        <i class="bi bi-caret-left-fill fs-2"></i>
      </div>

      <div id="content" style="width: 100%">
        <div
          id="profileContainer"
          class="d-flex align-items-center justify-content-center mb-3"
        >
          <img
            :src="store.showEmployees.profile_picture"
            alt=""
            class="rounded-circle border-danger border-4"
            style="width: 100px; height: 100px"
          />
        </div>
        <h6 id="employeeName" class="text-danger text-center m-0">
          {{ store.showEmployees.name }}
        </h6>
        <h5 id="jobTitle" class="text-center my-2">
          {{ store.showEmployees.job_title }}
        </h5>
        <p id="description" class="mt-3">
          {{ store.showEmployees.description }}
        </p>
      </div>

      <div
        id="rightIcon"
        class="px-3 d-flex align-items-center"
        @click="nextBtnHandler"
      >
        <i class="bi bi-caret-right-fill fs-2"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Employees from "./data";
import { useEmployees } from "./store/store";

// use pinia
const store = useEmployees();
onMounted(() => {
  store.updateEmployee(Employees);
});
function nextBtnHandler() {
  store.showNextEmploee(Employees);
}
function previousBtnHandler() {
  store.showPreviousEmploee(Employees);
}
setInterval(() => {
  store.showNextEmploee(Employees);
}, 3000);



// before use pinia
// import { onMounted, ref } from "vue";
// import Employees from "./data";

// const showEmployee = ref(null)
// const showEmployee = ref({
//   id: Employees[0].id,
//   name: Employees[0].name,
//   profile_picture: Employees[0].profile_picture,
//   job_title: Employees[0].job_title,
//   description: Employees[0].description,
// });
// let counter = 0;

// function nextBtnHandler() {
//   updateEmployeeDisplay();
//   counter++;
//   counter > Employees.length - 1 ? (counter = 0) : "";
//   localStorage.setItem("employee", JSON.stringify(showEmployee.value));
// }
// function previousBtnHandler() {
//   updateEmployeeDisplay();
//   counter--;
//   counter < 0 ? (counter = Employees.length - 1) : "";
//   localStorage.setItem("employee", JSON.stringify(showEmployee.value));
// }
// onMounted(() => {
//   // const item = JSON.parse(localStorage.getItem("employee"))
//   showEmployee.value = JSON.parse(localStorage.getItem("employee"));
//   const index = Employees.findIndex((element) => {
//     return element.id == showEmployee.value.id;
//   });
//   counter = index;
// });

// setInterval(() => {
//   nextBtnHandler();
// }, 3000);
</script>

<style>
body {
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#header {
  position: relative;
  display: inline;
}
#header::after {
  content: "";
  position: absolute;
  width: 105%;
  height: 4px;
  background-color: #e84393;
  bottom: -10px;
  left: -7px;
  z-index: 100;
}
#rightIcon {
  cursor: pointer;
}
#leftIcon {
  cursor: pointer;
}
</style>
