const notes = document.querySelector(".notes");
const btn = document.querySelector("button");

getLS().forEach((arr) => {
  createNoteEl(arr.id, arr.content);
});

btn.addEventListener("click", addNote);

function addNote() {
  const noteArr = getLS();

  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  createNoteEl(noteObj.id, noteObj.content);

  noteArr.push(noteObj);

  updateLS(noteArr);
}

function createNoteEl(id, content) {
  const div = document.createElement("div");
  div.className = "note";
  div.id = id;

  const textArea = document.createElement("textarea");
  textArea.placeholder = "Empty Note";
  textArea.resize = false;
  textArea.value = content;
  div.append(textArea);

  textArea.addEventListener("input", () => updateNote(id, textArea.value));

  textArea.addEventListener("dblclick", () => {
    const warning = confirm("Are you sure you want to delete this note?");
    if (warning) {
      deleteNote(id, div);
    }
  });

  notes.prepend(div);
  return div;
}

function updateNote(id, content) {
  const noteArr = getLS();
  const targetNote = noteArr.filter((note) => note.id == id)[0];
  targetNote.content = content;
  updateLS(noteArr);
}

function deleteNote(id, div) {
  const noteArr = getLS().filter((note) => note.id != id);
  updateLS(noteArr);
  notes.removeChild(div);
}

function updateLS(noteArr) {
  localStorage.setItem("note", JSON.stringify(noteArr));
}

function getLS() {
  return JSON.parse(localStorage.getItem("note")) || [];
}
