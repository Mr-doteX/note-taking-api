import { Router } from "express";
import { getNoteById, getNotes, postNotes } from "../controllers/note.js";

const noteRouter = Router();

noteRouter.get("/notes", getNotes);
noteRouter.post("/notes", postNotes);

noteRouter.get("/notes", getNotes);
noteRouter.get("/notes/:id", getNoteById);

export default noteRouter;
