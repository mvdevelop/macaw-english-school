
import { Request, Response } from "express";
import { LessonService } from "../services/LessonService";

const lessonService = new LessonService();

export class LessonController {
  static getAll(req: Request, res: Response) {
    return res.json(lessonService.getAll());
  }
}
