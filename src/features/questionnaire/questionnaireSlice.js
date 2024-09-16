// src/features/questionnaire/questionnaireSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Какой ваш любимый цвет?",
      options: ["Красный", "Синий", "Зеленый", "Желтый"],
    },
    {
      id: 2,
      question: "Какой ваш любимый питомец?",
      options: ["Кошка", "Собака", "Птица", "Рыбка"],
    },
    {
      id: 3,
      question: "Какой ваш любимый сезон года?",
      options: ["Зима", "Весна", "Лето", "Осень"],
    },
    {
      id: 4,
      question: "Какой ваш любимый вид спорта?",
      options: ["Футбол", "Баскетбол", "Теннис", "Плавание"],
    },
    {
      id: 5,
      question: "Какой ваш любимый жанр музыки?",
      options: ["Рок", "Поп", "Джаз", "Классика"],
    },
    {
      id: 6,
      question: "Какой ваш любимый напиток?",
      options: ["Чай", "Кофе", "Сок", "Вода"],
    },
  ],
  answers: {},
  submitted: false,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      state.answers[action.payload.id] = action.payload.answer;
    },
    submitAnswers: (state) => {
      state.submitted = true;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
