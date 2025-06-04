import React, { useState } from 'react';

const ListaTarefas = () => {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setLista([...lista, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={tarefa} 
        onChange={(e) => setTarefa(e.target.value)} 
        placeholder="Digite sua tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
