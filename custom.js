const numeroWhatsApp = "5511945078542";

const mensagem = encodeURIComponent(
  "Olá! Conheci o site da ótica e gostaria de conhecer os modelos de óculos."
);

const botaoWhatsApp = document.getElementById("whatsapp");

if (botaoWhatsApp) {
  botaoWhatsApp.href = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  botaoWhatsApp.target = "_blank";
  botaoWhatsApp.rel = "noopener noreferrer";
}

const elementoAno = document.getElementById("ano");
if (elementoAno) {
  elementoAno.textContent = new Date().getFullYear();
}