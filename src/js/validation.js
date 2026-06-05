export function validateVisitor(data) {
    const errors = {};

    if (!data.nombre || data.nombre.trim().length < 3) {
        errors.nombre = "El nombre debe tener al menos 3 caracteres.";
    }

    // Corrección: Validación de correo estricta
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.correo || !emailRegex.test(data.correo)) {
        errors.correo = "Escribe un correo electrónico válido.";
    }

    // Corrección: Validación de teléfono (longitud mínima 7 para Colombia)
    const onlyNumbers = data.telefono.replace(/\D/g, "");
    if (!onlyNumbers || onlyNumbers.length < 7) {
        errors.telefono = "El teléfono debe tener al menos 7 dígitos.";
    }

    if (!data.interes) {
        errors.interes = "Selecciona un interes principal.";
    }

    // Corrección: Longitud mínima para comentarios
    if (!data.comentario || data.comentario.trim().length < 10) {
        errors.comentario = "El comentario debe tener al menos 10 caracteres.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

export function clearValidation(form) {
    form.querySelectorAll(".is-invalid").forEach((input) => input.classList.remove("is-invalid"));
    form.querySelectorAll(".invalid-feedback").forEach((feedback) => {
        feedback.textContent = "";
    });
}

export function showValidationErrors(errors) {
    const map = {
        nombre: ["nombre", "errorNombre"],
        correo: ["correo", "errorCorreo"],
        telefono: ["telefono", "errorTelefono"],
        interes: ["interes", "errorInteres"],
        comentario: ["comentario", "errorComentario"]
    };

    Object.entries(errors).forEach(([field, message]) => {
        const [inputId, errorId] = map[field];
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);

        if (input && error) {
            input.classList.add("is-invalid");
            error.textContent = message;
        }
    });
}