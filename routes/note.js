import { Router } from "express";
import { registerUser } from "../controllers/user.js";
import { getNoteById, getNotes, postNotes } from "../controllers/note.js";

const noteRouter = Router();

noteRouter.get("/notes", getNotes);

noteRouter.post("/notes", postNotes);

noteRouter.post("/notes/register",registerUser);

noteRouter.get("/notes", getNotes);

noteRouter.get("/notes/:id", getNoteById);

export default noteRouter;
