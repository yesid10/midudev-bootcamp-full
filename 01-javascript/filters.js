import {state} from './config.js';

state.count++;

console.log(state);

const filter = document.querySelector("#filter-location");
const mensaje = document.querySelector("#filter-selected-value");

filter.addEventListener("change", () =>{
    const jobs = document.querySelectorAll(".job-listing-card");

    const selectedValue = filter.value;
    console.log(selectedValue);

    if(selectedValue) {
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