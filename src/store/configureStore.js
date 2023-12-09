import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";
import posts from "./reducers/posts";
import logger from "./middlewares/logger";

// Combinando os reducers
const reducer = combineReducers({ counter, posts });

// Configurando a store
const store = configureStore({
  reducer,
  // Pegando os middlewares padrão e adicionando um novo middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
