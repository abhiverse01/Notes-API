// controllers/notesController.js
const notesData = require('../data/notesData');

// Get all notes
exports.getAllNotes = (req, res) => {
  res.json(notesData.notes);
};

// Get a note by ID
exports.getNoteById = (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notesData.notes.find(n => n.id === noteId);
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }
  res.json(note);
};

// Create a new note
exports.createNote = (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: notesData.notes.length + 1,
    title,
    content
  };
  notesData.notes.push(newNote);
  res.status(201).json(newNote);
};

// Update a note
exports.updateNote = (req, res) => {
  const noteId = parseInt(req.params.id);
  const { title, content } = req.body;
  const note = notesData.notes.find(n => n.id === noteId);
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }
  note.title = title;
  note.content = content;
  res.json(note);
};

// Delete a note
exports.deleteNote = (req, res) => {
  const noteId = parseInt(req.params.id);
  const noteIndex = notesData.notes.findIndex(n => n.id === noteId);
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }
  notesData.notes.splice(noteIndex, 1);
  res.status(204).send();
};
