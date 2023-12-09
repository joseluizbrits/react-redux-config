// Criando um middleware que irá rodar entre o
// disparo da ação e a execução da função reducer
const logger = (store) => (next) => (action) => {
  // Passando a ação para a função reducer
  const result = next(action);

  // Lógica do middleware
  console.log("Passando pelo middleware", result);

  // Sempre tem que retornar a passagem da action
  return result;
};

// Exportando o middleware para configurá-lo na store
export default logger;
