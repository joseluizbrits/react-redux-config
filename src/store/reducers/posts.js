import { createSlice } from "@reduxjs/toolkit";

// Criando o reducer com as ações para a asyncAction
const slice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

// Desestruturando as ações para serem utilizadas na asyncAction
const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

// Criando a asyncAction que puxará os dados da API
export const fetchPosts =
  (id = "") =>
  async (dispatch, getState) => {
    try {
      // Setado o loading para true
      dispatch(fetchStarted());

      // Lógica para puxar os dados da API
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments${id}`
      );
      const data = await response.json();

      // Setando o loading para false
      // e inserindo os dados da API no estado do reducer
      dispatch(fetchSuccess(data));
    } catch (error) {
      // Setando o loading para false
      // e inserindo a mensagem de erro
      dispatch(fetchError(error.message));
    }
  };

// Exportando o reducer para configurá-lo na store
export default slice.reducer;
