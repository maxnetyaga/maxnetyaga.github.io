function orderNotes() {
  const vieww = parseInt(window.getComputedStyle(document.body).width);
  const notew = 310;
  const newMargin = `${
    ((vieww % notew) / (((vieww / notew) >> 0) + 1)) >> 0
  }px`;
  const notes = [...document.querySelectorAll(".note")];
  notes.forEach((x) => {
    x.style.marginLeft = newMargin;
    x.style.marginBottom = newMargin;
  });
  notes[notes.length - 1].style.marginBottom = "0px";
}

orderNotes();
window.onresize = orderNotes;
