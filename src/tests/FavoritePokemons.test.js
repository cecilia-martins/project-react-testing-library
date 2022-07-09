import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<App />);
    // Acessa os elementos
    const linkFavPokemons = screen.getByText(/Favorite Pokémons/i); // pegando o link na pag principal
    userEvent.click(linkFavPokemons); // entrando em favorite pokemons
    const noFound = screen.getByText(/no favorite pokemon found/i);
    // Testa
    expect(noFound).toBeInTheDocument();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);
    // Acessa os elementos
    const linkMoreDetails = screen.getByText(/More details/i); // Procurando o link na pag principal
    userEvent.click(linkMoreDetails); // clicando no link
    const noFavorite = screen.getByRole('checkbox', { checked: false }); // pegando o input
    userEvent.click(noFavorite); // dando check no input
    const linkFavPokemons = screen.getByText(/Favorite Pokémons/i); // pegando o link
    userEvent.click(linkFavPokemons); // entrando em favorite pokemons
    const imageCard = screen.getByRole('link', { name: /More details/i });
    // Testa
    expect(imageCard).toBeInTheDocument();
  });
});
