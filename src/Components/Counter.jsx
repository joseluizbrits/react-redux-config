import { useSelector, useDispatch } from "react-redux";
import { incrementar, reduzir } from "../store/reducers/counter";

function Counter() {
  // Pegando o estado do reducer
  const counter = useSelector((state) => state.counter);

  // Inicializando o hook para disparar a ações
  const dispatch = useDispatch();

  return (
    <div>
      {/* Disparando as ações */}
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(reduzir())}>-</button>
      <p>{counter}</p>
    </div>
  );
}

export default Counter;
