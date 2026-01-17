
import { Lesson } from "../models/Lesson";

export class LessonService {
  private lessons: Lesson[] = [
    { id: 1, title: "Verb To Be", level: "basic" }
  ];

  getAll() {
    return this.lessons;
  }
}
