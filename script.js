document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('registroForm');
const alertBox = document.getElementById('formAlert');

form.addEventListener('submit', (event) => {
event.preventDefault();
event.stopPropagation();

let isValid = true;

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const programa = document.getElementById('programa');

if (nombre.value.trim() === '') {
nombre.classList.add('is-invalid');
isValid = false;
} else {
nombre.classList.remove('is-invalid');
nombre.classList.add('is-valid');
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email.value.trim())) {
email.classList.add('is-invalid');
isValid = false;
} else {
email.classList.remove('is-invalid');
email.classList.add('is-valid');
}

const phoneRegex = /^[0-9]{9}$/;
if (!phoneRegex.test(telefono.value.trim())) {
telefono.classList.add('is-invalid');
isValid = false;
} else {
telefono.classList.remove('is-invalid');
telefono.classList.add('is-valid');
}

if (programa.value === '') {
programa.classList.add('is-invalid');
isValid = false;
} else {
programa.classList.remove('is-invalid');
programa.classList.add('is-valid');
}

if (isValid) {
alertBox.className = 'alert alert-success shadow-sm';
alertBox.textContent = '¡Registro exitoso! Nos pondremos en contacto contigo a la brevedad.';
alertBox.classList.remove('d-none');

console.log('Datos enviados correctamente:', {
    nombre: nombre.value.trim(),
    email: email.value.trim(),
    telefono: telefono.value.trim(),
    programa: programa.value
});

form.reset();
form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));

setTimeout(() => {
    alertBox.classList.add('d-none');
}, 5000);
} else {
alertBox.className = 'alert alert-danger shadow-sm';
alertBox.textContent = 'Por favor, completa correctamente todos los campos señalados.';
alertBox.classList.remove('d-none');
}
});
});