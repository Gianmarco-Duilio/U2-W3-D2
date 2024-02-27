// variabile per uniformare il nome della chiave di ricerca

const storageKey = "name";

// vogliamo prendere il riferimento alla textarea

const inputArea = document.getElementById("text-content");

//riferimento al nodo dei bottoni

const saveBtn = document.getElementById("btn-add");
const resetBtn = document.getElementById("btn-remove");
const nomePre = document.getElementById("nome-pre");
const newName = document.createElement("h3");

const add = function () {
  const nome = inputArea.value;
  localStorage.setItem(storageKey, nome);
  alert("SALVATO!");
  inputArea.value = "";

  get();
};

const remove = function () {
  const conferma = confirm("Sei sicuro?");
  if (conferma) {
    inputArea.value = "";
    removeName();
    localStorage.removeItem(storageKey);
  }
};

saveBtn.onclick = add;
resetBtn.onclick = remove;

const get = function () {
  const saved = localStorage.getItem(storageKey);

  removeName();
  newName.innerText = saved;
  nomePre.appendChild(newName);
};

const removeName = function () {
  nomePre.innerHTML = " ";
};

window.onload = () => {
  get();
};
