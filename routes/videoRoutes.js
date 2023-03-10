import { Router } from "express";
import {
  addComments,
  addLike,
  addVideo,
  getVideo,
  getVideoDetails,
} from "../controller/videoController.js";
import { isAuthenticated } from "../middleware/auth.js";
import singleUpload from "../middleware/multer.js";

const router = Router();

router.route("/add-video/:id").post(addVideo);
router.route("/get-video/:id").get(getVideo);
router.route("/get-video-details/:id").get(getVideoDetails);
router.route("/add-comment/:id").post(isAuthenticated, addComments);
router.route("/add-like/:id").post(addLike);

export default router;
