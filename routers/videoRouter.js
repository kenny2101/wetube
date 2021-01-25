import express from "express";
import {
  deleteVideo,
  editVideo,
  upload,
  videoDetail,
  videos,
} from "../controllers/videoController copy";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.videos, videos);
userRouter.get(routes.upload, upload);
userRouter.get(routes.videoDetail, videoDetail);
userRouter.get(routes.editVideo, editVideo);
userRouter.get(routes.deleteVideo, deleteVideo);

export default userRouter;
