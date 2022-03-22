import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../services/renderWithRouter';

import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);
    // Acessa os elementos da tela
    const firstLink = screen.getByRole('link', { name: /Home/i });
    // Interagir com esses elementos - SE NECESSAARIO
    // Fazer testes
    expect(firstLink).toBeInTheDocument();
  });
  test('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);
    // Acessa os elementos da tela
    const secondLink = screen.getByRole('link', { name: /About/i });
    // Interagir com esses elementos - SE NECESSAARIO
    // Fazer testes
    expect(secondLink).toBeInTheDocument();
  });

  test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    // Acessa os elementos da tela
    const thirdLink = screen.getByRole('link', { name: /Pokémons/i });
    // Interagir com esses elementos - SE NECESSAARIO
    // Fazer testes
    expect(thirdLink).toBeInTheDocument();
  });
});
