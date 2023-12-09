import { createSlice } from "@reduxjs/toolkit";

// Criando o reducer com as ações
const slice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incrementar: (state) => state + 1,
    reduzir: (state) => state - 1,
  },
});

// Exportando as ações para serem disparadas em qualquer componente
export const { incrementar, reduzir } = slice.actions;

// Exportando o reducer para configurá-lo na store
export default slice.reducer;
