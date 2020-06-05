const notes = JSON.parse(localStorage.getItem("notes") || "{}");

function orderNotes() {
  // document.body.style = "";
  const notes = [...document.querySelectorAll(".noteWrap > .note")];
  const vieww = parseInt(window.getComputedStyle(document.body).width);
  const notew = 310;
  const numOfNotes = (vieww / notew) >> 0;
  let newMargin = `${((vieww % notew) / (numOfNotes + 1)) >> 0}px`;
  if (notes.length < numOfNotes) newMargin = "25px";
  notes.forEach((x) => {
    x.style.marginLeft = newMargin;
    x.style.marginBottom = newMargin;
  });
}

function addNote(titl, tex) {
  const newID = `id_${(Math.random() * 100000) >> 0}`;
  notes[newID] = {
    id: newID,
    title: titl,
    text: tex,
  };
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  document.querySelector(".noteWrap").innerHTML = "";
  if (JSON.stringify(notes) == "{}") return;
  const newNote = document.createDocumentFragment();
  for (const oneNote in notes) {
    const note = document.createElement("div");
    note.innerHTML = `<div class="note_title">${notes[oneNote].title}</div>
    <div class="note_body">${notes[oneNote].text}</div>
    </div>`;
    note.classList.add("note");
    newNote.appendChild(note);
  }
  document.querySelector(".noteWrap").appendChild(newNote);
  orderNotes();
}

// Event Listeners

//Submit adding
document
  .querySelector(".btn-submit-note")
  .addEventListener("click", function (e) {
    addNote(
      document.querySelector(".titleTextArea").value,
      document.querySelector(".bodyTextArea").value
    );
    // document.body.style = "";
    renderNotes();
  });

//Closing
document.querySelectorAll(".btn-add").forEach((y) => {
  y.addEventListener("click", function () {
    [...document.querySelectorAll(".form-control")].forEach(
      (x) => (x.value = "")
    );
  });
});

//Hell
window.onresize = orderNotes;

// Start
renderNotes();
