import { renderJobs, allJobs } from "./fetchData.js";

const searchInput = document.querySelector("#empleos-search-input");

const searchJobs = (query) => {
    const jobs = allJobs;

    if (!query.trim()) {
        // Si el query está vacío, renderizamos todos los trabajos
        renderJobs(jobs);
        return;
    }

    const queryLower = query.toLowerCase();

    const filteredJobs = jobs.filter(job => {
        const title = job.titulo.toLowerCase();
        const company = job.empresa.toLowerCase();
        const description = job.descripcion.toLowerCase();
        const technology = job.data.technology.toLowerCase();

        return (
            title.includes(queryLower) ||
            company.includes(queryLower) ||
            description.includes(queryLower) ||
            technology.includes(queryLower)
        );
    })
    renderJobs(filteredJobs);
}

//Escuchar cambios en el input
searchInput.addEventListener("input", (e) => {
    searchJobs(e.target.value);
});