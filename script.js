const agora = new Date();
const anoAtual = agora.getFullYear();
const spanAno = document.querySelector("#ano");

if (spanAno) {
  spanAno.textContent = anoAtual;
}

function site() {
  window.open('https://www.youtube.com/watch?v=dDK_jrDImR4', '_blank');
}
