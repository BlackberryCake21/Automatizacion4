document.getElementById("pqrForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value;
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("responseMessage");

    if (name === "" || email === "" || type === "" || message === "") {
        responseMessage.innerHTML = "❌ Todos los campos son obligatorios.";
        responseMessage.style.color = "red";
        return;
    }

    // Simulación de envío
    responseMessage.innerHTML = "✅ ¡Tu PQR ha sido enviada exitosamente!";
    responseMessage.style.color = "green";

    // Limpiar el formulario después de 3 segundos
    setTimeout(() => {
        document.getElementById("pqrForm").reset();
        responseMessage.innerHTML = "";
    }, 3000);
});
