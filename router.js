import { Router } from "express";
import * as rh from "./requestHandler.js"


const router=Router()
router.route("/addmovie").post(rh.addMovie)
router.route("/getmovies").get(rh.getMovies)
router.route("/getmovie/:_id").get(rh.getMovie)
router.route("/updatemovie/:_id").put(rh.updateMovie)
router.route("/deletemovie/:_id").delete(rh.deleteMovie)

export default router;