import "../css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createVisitor, deleteVisitor, getVisitors } from "./api.js";
import { renderInterestChart } from "./chart.js";
import { clearValidation, showValidationErrors, validateVisitor } from "./validation.js";
import { confirmDelete, getFormData, renderVisitorsTable, showError, showSuccess } from "./ui.js";

const state = {
    visitors: [],
    search: "",
    interest: ""
};

const form = document.getElementById("visitorForm");
const reloadBtn = document.getElementById("reloadBtn");
const searchInput = document.getElementById("searchInput");
const filterInterest = document.getElementById("filterInterest");

async function init() {
    bindEvents();
    await loadVisitors();
}

function bindEvents() {
    form.addEventListener("submit", handleSubmit);
    reloadBtn.addEventListener("click", loadVisitors);

    searchInput.addEventListener("input", (event) => {
        state.search = event.target.value.toLowerCase();
        render();
    });

    filterInterest.addEventListener("change", (event) => {
        state.interest = event.target.value;
        render();
    });
}

async function loadVisitors() {
    try {
        state.visitors = await getVisitors();
        render();
    } catch (error) {
        console.error(error);
        showError("No se pudo conectar con JSON Server. Revisa que npm run db este activo.");
    }
}

async function handleSubmit(event) {
    event.preventDefault();
    clearValidation(form);

    const data = getFormData(form);
    const validation = validateVisitor(data);

    if (!validation.isValid) {
        showValidationErrors(validation.errors);
        showError("Revisa los campos marcados antes de guardar.");
        return;
    }

    const visitor = {
        id: crypto.randomUUID(),
        ...data,
        fecha: new Date().toISOString()
    };

    try {
        await createVisitor(visitor);
        form.reset();
        showSuccess("El visitante fue guardado en JSON Server.");
        await loadVisitors(); // Corrección: Carga nuevamente la tabla para actualizar la vista
    } catch (error) {
        console.error(error);
        showError("No se pudo guardar el visitante. Revisa la conexion con la API local.");
    }
}

async function handleDelete(id) {
    const confirmed = await confirmDelete();
    if (!confirmed) return;

    try {
        await deleteVisitor(id);
        showSuccess("Registro eliminado correctamente.");
        await loadVisitors();
    } catch (error) {
        console.error(error);
        showError("No se pudo eliminar el registro.");
    }
}

function getFilteredVisitors() {
    return state.visitors.filter((visitor) => {
        const matchesSearch =
            visitor.nombre.toLowerCase().includes(state.search) ||
            visitor.interes.toLowerCase().includes(state.search);

        const matchesInterest = !state.interest || visitor.interes === state.interest;
        return matchesSearch && matchesInterest;
    });
}

function render() {
    const filteredVisitors = getFilteredVisitors();
    renderVisitorsTable(filteredVisitors, handleDelete);
    renderInterestChart(state.visitors);
}

init();