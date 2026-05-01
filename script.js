const frases = [
    "El éxito es la suma de pequeños esfuerzos.",
    "Nunca te rindas 🚀",
    "Cada día es una nueva oportunidad.",
    "Confía en el proceso.",
    "Hazlo con pasión o no lo hagas."
];

let contador = 0;

function cambiarFrase() {
    const random = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").innerText = frases[random];

    contador++;
    document.getElementById("contador").innerText = "Clicks: " + contador;
}

function toggleModo() {
    document.body.classList.toggle("dark");
}