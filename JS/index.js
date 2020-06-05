function orderNotes() {
  const vieww = parseInt(window.getComputedStyle(document.body).width);
  const notew = 310;
  const numOfNotes = (vieww / notew) >> 0;
  const newMargin = `${((vieww % notew) / (numOfNotes + 1)) >> 0}px`;
  const notes = [...document.querySelectorAll(".note")];
  if (notes.length < numOfNotes) newMargin = "25px";
  notes.forEach((x) => {
    x.style.marginLeft = newMargin;
    x.style.marginBottom = newMargin;
  });
  notes[notes.length - 1].style.marginBottom = "0px";
}

orderNotes();
window.onresize = orderNotes;

// window.onscroll = function() {
//   let scroll = window.pageYOffset || document.documentElement.scrollTop;
//   document.getElementById('showScroll').innerHTML = scroll + 'px';

window.onscroll = function () {
  console.log(window.pageYOffset);
};
