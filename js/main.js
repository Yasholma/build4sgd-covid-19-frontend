document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const hamburger = document.querySelector(".menu-btn__burger");
    const mobileNav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".menu-nav__link");
    const insertModalBtn = document.querySelector(".nav__btns > a");
    const insertDataModal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector(".modal span.close");
    const openModalBtn = document.querySelectorAll(".openModal");
    const estimateBtn = document.getElementById("estimate-btn");
    const dataForm = document.querySelector("#data-form");


    menuBtn.addEventListener("click", toggleMenu);
    navLinks.forEach(link => link.addEventListener("click", closeMenu));
    insertModalBtn.addEventListener("click", openInsertModal);
    openModalBtn.forEach(btn => btn.addEventListener("click", openModal));
    modalCloseBtn.addEventListener("click", closeModal);
    estimateBtn.addEventListener("click", estimate)


    const validateFields = (...fields) => fields.every(field => field.value.trim() !== "");
    const clearFields = (...fields) => fields.forEach(field => field.value === "");

    // Form Handling
    function estimate(e) {
        e.preventDefault()
        const population = document.getElementById("population");
        const timeElapse = document.getElementById("time-elapse");
        const reportedCases = document.getElementById("reported-cases");
        const totalHospitalBeds = document.getElementById("total-hospital-beds");
        const periodType = document.getElementById("period-type");
        let checkFields = validateFields(population, timeElapse, reportedCases, totalHospitalBeds, periodType);
        const data = {
            region: {
                name: 'Africa',
                avgAge: 19.7,
                avgDailyIncomeInUSD: 5,
                avgDailyIncomePopulation: 0.71
            }
        }
        if (checkFields) {
            data.population = population.value,
                data.timeElapse = timeElapse.value,
                data.reportedCases = reportedCases.value,
                data.totalHospitalBeds = totalHospitalBeds.value,
                data.periodType = periodType.value
            if (estimator(data)) {
                dataForm.reset();
                alert("Successfully inserted.");
            } else {
                alert("An error occured. Try again");
            }
        } else {
            alert("All fields are required.");
        }
    }

    function estimator(data) {
        return data && true;
    }

    // Callbacks
    let showMenu = false;
    function toggleMenu(event) {
        if (!showMenu) {
            hamburger.classList.add("open");
            mobileNav.classList.add("open");
            mobileNav.classList.add("mobile");
            showMenu = true;
        } else {
            hamburger.classList.remove("open");
            mobileNav.classList.remove("open");
            mobileNav.classList.remove("mobile");
            showMenu = false;
        }
    }

    function closeMenu() {
        if (mobileNav.classList.contains("mobile")) {
            mobileNav.classList.remove("open");
            mobileNav.classList.remove("mobile");
            hamburger.classList.remove("open");
            showMenu = false;
        }
    }

    function closeModal(e) {
        e.preventDefault();
        insertDataModal.classList.remove("open");
    }

    function openModal() {
        insertDataModal.classList.add("open");
    }

    function openInsertModal(event) {
        event.preventDefault();
        closeMenu();
        openModal()
    }

});