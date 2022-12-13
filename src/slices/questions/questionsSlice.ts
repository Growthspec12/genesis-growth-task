/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import questions from "configs/questions.json";
import type { QuestionModel } from "models/Question";

interface QuestionsState {
  isAnswerCorrect: boolean;
  shouldCheck: boolean | null;
  selectedAnswerIndex: number | null;
  currentQuestionIndex: number;
  questions: Array<QuestionModel>;
}

const initialState: QuestionsState = {
  isAnswerCorrect: false,
  shouldCheck: null,
  selectedAnswerIndex: null,
  currentQuestionIndex: 0,
  questions,
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<number>) => {
      state.selectedAnswerIndex = action.payload;
    },
    clearAnswer: (state) => {
      state.selectedAnswerIndex = null;
    },
    checkAnswer: (state) => {
      const question = state.questions[state.currentQuestionIndex];

      state.shouldCheck = true;
      state.isAnswerCorrect =
        question.correctAnswer === state.selectedAnswerIndex;
    },
    goNextQuestion: (state) => {
      state.currentQuestionIndex += 1;
      state.selectedAnswerIndex = null;
      state.shouldCheck = null;
    },
    resetAnswers: () => initialState,
  },
});

export default questionSlice.reducer;
export const {
  checkAnswer,
  clearAnswer,
  goNextQuestion,
  setAnswer,
  resetAnswers,
} = questionSlice.actions;
