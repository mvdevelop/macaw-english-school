
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface CourseContent {
  id: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  completed: boolean;
}

interface CourseState {
  currentLevel: Level;
  contents: Record<Level, CourseContent[]>;
  progress: Record<Level, number>;
}

const initialContents: Record<Level, CourseContent[]> = {
  A1: [
    { id: 'a1-1', title: 'Introdução ao Inglês', description: 'Saudações e vocabulário básico', lessons: 5, duration: '2h', completed: false },
    { id: 'a1-2', title: 'Verb To Be', description: 'Uso do verbo ser/estar', lessons: 4, duration: '1.5h', completed: false },
  ],
  A2: [
    { id: 'a2-1', title: 'Present Simple', description: 'Fatos e rotinas', lessons: 6, duration: '2.5h', completed: false },
    { id: 'a2-2', title: 'Vocabulário Intermediário', description: 'Ampliando o vocabulário', lessons: 5, duration: '2h', completed: false },
  ],
  B1: [
    { id: 'b1-1', title: 'Past Tenses', description: 'Passado simples e contínuo', lessons: 7, duration: '3h', completed: false },
    { id: 'b1-2', title: 'Future Tenses', description: 'Futuro simples e contínuo', lessons: 6, duration: '2.5h', completed: false },
  ],
  B2: [
    { id: 'b2-1', title: 'Conditionals', description: 'Condicionais 0, 1, 2, 3', lessons: 8, duration: '3.5h', completed: false },
    { id: 'b2-2', title: 'Reported Speech', description: 'Discurso indireto', lessons: 7, duration: '3h', completed: false },
  ],
  C1: [
    { id: 'c1-1', title: 'Advanced Grammar', description: 'Estruturas complexas', lessons: 10, duration: '4h', completed: false },
    { id: 'c1-2', title: 'Academic English', description: 'Inglês acadêmico', lessons: 9, duration: '4h', completed: false },
  ],
  C2: [
    { id: 'c2-1', title: 'Mastery Level', description: 'Fluência nativa', lessons: 12, duration: '5h', completed: false },
    { id: 'c2-2', title: 'Professional English', description: 'Inglês corporativo avançado', lessons: 10, duration: '4.5h', completed: false },
  ],
};

const initialState: CourseState = {
  currentLevel: 'A1',
  contents: initialContents,
  progress: {
    A1: 0,
    A2: 0,
    B1: 0,
    B2: 0,
    C1: 0,
    C2: 0,
  },
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCurrentLevel: (state, action: PayloadAction<Level>) => {
      state.currentLevel = action.payload;
    },
    toggleComplete: (state, action: PayloadAction<{ level: Level; contentId: string }>) => {
      const { level, contentId } = action.payload;
      const content = state.contents[level].find(item => item.id === contentId);
      if (content) {
        content.completed = !content.completed;
        // Atualizar progresso
        const total = state.contents[level].length;
        const completed = state.contents[level].filter(item => item.completed).length;
        state.progress[level] = Math.round((completed / total) * 100);
      }
    },
  },
});

export const { setCurrentLevel, toggleComplete } = courseSlice.actions;
export default courseSlice.reducer;
