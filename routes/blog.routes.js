import { Router } from "express";
import {
  getAllBlogs,
  createBlog,
  deleteBlog,
  getBlog,
} from "../controllers/blog.controller.js";

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);

export default router;
