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
      <div id="leftIcon" class="px-3 d-flex align-items-center">
        <i class="bi bi-caret-left-fill fs-2" @click="nextBtnHandler"></i>
      </div>
      <div id="content">
        <div
          id="profileContainer"
          class="d-flex align-items-center justify-content-center mb-3"
        >
          <img
            :src="showEmployee.profile_picture"
            alt=""
            class="rounded-circle border-danger border-4"
            style="width: 100px; height: 100px"
          />
        </div>
        <h6 id="employeeName" class="text-danger text-center m-0">
          {{ showEmployee?.name }}
        </h6>
        <h5 id="jobTitle" class="text-center my-2">
          {{ showEmployee.job_title }}
        </h5>
        <p id="description" class="mt-3">{{ showEmployee.description }}</p>
      </div>

      <div id="rightIcon" class="px-3 d-flex align-items-center">
        <i class="bi bi-caret-right-fill fs-2" @click="previousBtnHandler"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Employees from "./data";

// const showEmployee = ref(null)
const showEmployee = ref({
  id: Employees[0].id,
  name: Employees[0].name,
  profile_picture: Employees[0].profile_picture,
  job_title: Employees[0].job_title,
  description: Employees[0].description,
});
let counter = 0;

function updateEmployeeDisplay (){
  Employees.forEach((item,index) => {
    index == counter ? (showEmployee.value = item) : "";
  });
}
function nextBtnHandler() {
  updateEmployeeDisplay()
  counter++;
  counter > Employees.length-1 ? (counter = 0) : "";
  localStorage.setItem("employee", JSON.stringify(showEmployee.value));
}
function previousBtnHandler (){
  updateEmployeeDisplay()
  counter--;
  counter < 0 ? (counter = Employees.length-1) : "";
  localStorage.setItem("employee", JSON.stringify(showEmployee.value));
}
onMounted(()=>{
  // const item = JSON.parse(localStorage.getItem("employee"))
  showEmployee.value = JSON.parse(localStorage.getItem("employee"))
  const index = Employees.findIndex((element)=>{
     return element.id == showEmployee.value.id
  })  
  counter = index
  
})

setInterval(()=>{
  nextBtnHandler()
},3000)
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
</style>
