export type CategoryType = {
  subcategories: any;
  id: number | null;
  catName: string;
  progress: number;
  themeId: number;
  Questions: [];
};

export type LevelType = {
  number: number;
};

export type ThemesType = {
  catName: string;
  id: number;
  themeId: number;
};

export type QuestType = {
  id: number;
  questions: string;
  video: string;
  answers: AnswersType[];
};

export type AnswersType = {
  id: number;
  answers: string;
  isCorrect: boolean;
  qId: number;
};
