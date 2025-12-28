// SPLASH -> APP
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 3000);

// ODPOWIEDZI
const answers = [
  { q: "czy mam ruchać", a: "Tak, oczywiście." },
  { q: "czy pijemy", a: "Zawsze trzeba." },
  { q: "czy walimy kogoś", a: "Tak, pewnie." }
];

function ask() {
  const input = document.getElementById("question");
  const text = input.value.toLowerCase();
  if (!text) return;

  addMsg("Ty: " + input.value, "user");
  input.value = "";

  const loading = addMsg("BranzGPT analizuje...", "bot");

  setTimeout(() => {
    loading.remove();

    let response = "Nie wiem, ale brzmi sensownie.";
    for (const item of answers) {
      if (text.includes(item.q)) {
        response = item.a;
        break;
      }
    }

    addMsg("BranzGPT: " + response, "bot");
  }, 3000);
}

function addMsg(text, cls) {
  const div = document.createElement("div");
  div.className = "msg " + cls;
  div.innerText = text;
  document.getElementById("messages").appendChild(div);
  return div;
}
