// import from model.js
import { Note } from "../models/note.js";



export const postNotes = async (req, res) => {
  const note = new Note(req.body);
  const newNote = await note.save();

  res.status(200).json({ notes: newNote });

  // res.send("Hello World, I am ready!");
};

export const getNotes = async (req, res) => {
  const allNote = await Note.find();
  res.status(200).json({ "note": allNote });
};

export const getNoteById = async (req, res) => {
  const noteId = await Note.findById(req.params.id);
  res.status(200).json({"note": noteId});
};
