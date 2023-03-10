import { Router } from "express";
import { addVideo } from "../controller/videoController.js";
import singleUpload from "../middleware/multer.js";

const router = Router();

router.route("/add-video").post(addVideo);

export default router;
