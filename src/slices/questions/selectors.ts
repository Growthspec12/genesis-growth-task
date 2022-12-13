/* eslint-disable import/prefer-default-export */
import { RootState } from "../store";

export const selectQuestionsState = (state: RootState) => state.questions;
