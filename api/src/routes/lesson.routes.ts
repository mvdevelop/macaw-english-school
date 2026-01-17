
import { Router } from "express";
import { LessonController } from "../controllers/LessonController";

const router = Router();

/**
 * @swagger
 * /api/lessons:
 *   get:
 *     summary: Lista todas as aulas
 *     tags:
 *       - Lessons
 *     responses:
 *       200:
 *         description: Lista de aulas
 */
router.get("/", LessonController.getAll);

export default router;
