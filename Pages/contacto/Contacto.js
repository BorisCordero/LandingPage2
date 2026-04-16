const form = document.getElementById("formContacto");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !asunto || !mensaje) {
        mostrarMensaje("⚠️ Completa todos los campos", "error");
        return;
    }

    if (!correo.includes("@")) {
        mostrarMensaje("⚠️ Correo inválido", "error");
        return;
    }

    mostrarMensaje("✅ Mensaje enviado correctamente", "ok");
    form.reset();
});

function mostrarMensaje(texto, tipo) {
    const msg = document.createElement("div");
    msg.textContent = texto;

    msg.style.position = "fixed";
    msg.style.bottom = "20px";
    msg.style.right = "20px";
    msg.style.padding = "15px 20px";
    msg.style.borderRadius = "10px";
    msg.style.color = "white";
    msg.style.fontWeight = "bold";

    if (tipo === "ok") {
        msg.style.background = "#2ecc71";
    } else {
        msg.style.background = "#e74c3c";
    }

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 3000);
}