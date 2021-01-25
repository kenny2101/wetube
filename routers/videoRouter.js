import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.videos, (req, res) => res.send("Videos"));
userRouter.get(routes.upload, (req, res) => res.send("Upload"));
userRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));
userRouter.get(routes.editVideo, (req, res) => res.send("Edit Video"));
userRouter.get(routes.deleteVideo, (req, res) => res.send("Delete Video"));

export default userRouter;
