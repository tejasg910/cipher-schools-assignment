import { Router } from "express";
import {
  addComments,
  addLike,
  addVideo,
  getAllVideos,
  getVideo,
  getVideoDetails,
} from "../controller/videoController.js";
import { isAuthenticated } from "../middleware/auth.js";
import singleUpload from "../middleware/multer.js";

const router = Router();

router.route("/add-video").post(addVideo);
router.route("/get-all-videos").get(getAllVideos);
router.route("/get-video/:id").get(getVideo);
router.route("/get-video-details/:id").get(getVideoDetails);
router.route("/add-comment/:id").post(isAuthenticated, addComments);
router.route("/add-like/:id").get(isAuthenticated, addLike);

export default router;
