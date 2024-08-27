import { createContext, useState } from "react";
import { api } from "../services/api";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [autor, setAutor] = useState("Rafael");
  const [tarefas, setTarefas] = useState([]);

  const carregarTerefas = async () => {
    const responsse = await api.get("/tarefas");
    console.log(response);
  };

  const adicionarTarefa = (nomeTarefa) => {
    const novaTarefa = {
      id: Math.floor(Math.random() * 100000),
      nome: nomeTarefa,
    };

    setTarefas((estadoAtual) => [...estadoAtual, novaTarefa]);
  };

  const removerTarefa = (idTarefa) => {
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.filter(
        (tarefa) => tarefa.id != idTarefa
      );

      return [...tarefasAtualizadas];
    });
  };

  const editarTarefa = (idTarefa, nomeTarefa) => {
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.map((tarefa) => {
        return tarefa.id === idTarefa
          ? {
              ...tarefa,
              nome: nomeTarefa,
            }
          : tarefa;
      });
      return [...tarefasAtualizadas];
    });
  };

  return (
    <AppContext.Provider
      value={{
        autor,
        tarefas,
        adicionarTarefa,
        removerTarefa,
        editarTarefa,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
