import { state } from './config.js';

state.count++;

console.log(state);

const filter = document.querySelector("#filter-location");
const filterExperienceLevel = document.querySelector("#filter-experience-level");
const mensaje = document.querySelector("#filter-selected-value");



filter.addEventListener("change", () => {
    const jobs = document.querySelectorAll(".job-listing-card");
    const selectedValue = filter.value;
    console.log(selectedValue);

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
        mensaje.classList.add("is-selected");
    } else {
        mensaje.textContent = "";
    }

    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad;
        const isShown = selectedValue === "" || selectedValue === modalidad;
        job.classList.toggle("is-hidden", isShown === false);
    })


})

filterExperienceLevel.addEventListener("change", () => {

    const jobs = document.querySelectorAll(".job-listing-card");

    const selectedValueFilterExperience = filterExperienceLevel.value;
    console.log("Filtro de experiencia: ", selectedValueFilterExperience);

    if (selectedValueFilterExperience) {
        mensaje.textContent = `Has seleccionado: ${selectedValueFilterExperience}`;
        mensaje.classList.add("is-selected");
    } else {
        mensaje.textContent = "";
    }

    jobs.forEach(job => {
        const experiencia = job.dataset.nivel;
        const isShown =selectedValueFilterExperience === "" || selectedValueFilterExperience === experiencia;
        job.classList.toggle("is-hidden", isShown === false);
    })

})