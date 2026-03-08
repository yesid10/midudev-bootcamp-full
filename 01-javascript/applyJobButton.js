const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection.addEventListener("click", (e) =>{
    const element = e.target;

    if(element.classList.contains("button-apply-job")){
        element.textContent = "Aplicado!";
        element.classList.add("is-applied");
        element.disabled = true;
    }
})