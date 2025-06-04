import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListaTarefas from '../components/ListaTarefas';


describe('ListaTarefas Component', () => {
  test('Renderiza input e botão corretamente', () => {
    render(
        <ListaTarefas />
    );

    expect(screen.getByPlaceholderText('Digite sua tarefa')).toBeInTheDocument();
    expect(screen.getByText('Adicionar')).toBeInTheDocument();
  });

  test('Adiciona tarefa corretamente à lista', () => {
    render(
     
        <ListaTarefas />
  
    );

    const input = screen.getByPlaceholderText('Digite sua tarefa');
    const botao = screen.getByText('Adicionar');

    expect(screen.queryByText('Nova tarefa')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Nova tarefa' } });
    fireEvent.click(botao);

    expect(screen.getByText('Nova tarefa')).toBeInTheDocument();
  });
});
