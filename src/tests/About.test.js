import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from '../renderWithRouter';
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
    const title2 = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    // Testa
    expect(title2).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/About');
    // Acessa os elementos
    const pOne = screen.getByText(/This application simulates /i);
    // Testa
    expect(pOne).toBeDefined();
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/About');
    // Acessa os elementos
    const altImage = screen.getByAltText(/pokédex/i).src;
    // Testa
    expect(altImage).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
