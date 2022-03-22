import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import renderWithRouter from '../services/renderWithRouter';
import App from '../App';

describe('Teste o componente <About.js />.', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/About');
    // Acessa os elementos
    const infoPokedex = screen.getByText(/This application simulates a Pokédex/i);
    // Interage com esses elementos - se necessario
    // Testa
    expect(infoPokedex).toBeDefined();
  });
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/About');
    // Acessa os elementos
    const title2 = screen.getByRole('heading', { level: 2 });
    // Interage com esses elementos - se necessario
    // Testa
    expect(title2).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    // Acessa os elementos
    // Interage com esses elementos - se necessario
    // Testa
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    // Acessa os elementos
    // Interage com esses elementos - se necessario
    // Testa
  });
  // test('', () => {

  // });
});
