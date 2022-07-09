import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);
    // Acessa os elementos da tela
    const firstLink = screen.getByRole('link', { name: /Home/i });
    // Fazer testes
    expect(firstLink).toBeInTheDocument();
  });
  test('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);
    // Acessa os elementos da tela
    const secondLink = screen.getByRole('link', { name: /About/i });
    // Fazer testes
    expect(secondLink).toBeInTheDocument();
  });

  test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    // Acessa os elementos da tela
    const thirdLink = screen.getByRole('link', { name: /Pokémons/i });
    // Fazer testes
    expect(thirdLink).toBeInTheDocument();
  });
});
