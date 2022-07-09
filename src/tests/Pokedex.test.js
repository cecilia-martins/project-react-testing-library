import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    // acessa os elememntos
    const title = screen.getByRole('heading',
      { level: 2, name: /Encountered pokémons/i });
    // testa
    expect(title).toBeInTheDocument();
  });
  test('Teste se é exibido Pokémon da lista quando o botão Próximo pokémon é clicado',
    () => {
      renderWithRouter(<App />);
      // acessa os elememntos
      const btnNext = screen.getByRole('button', { name: /Próximo pokémon/i }); // pega o botão
      // interagi com esses elementos
      userEvent.click(btnNext); // clica no botão
      const nextPokemon = screen.getByText(/Charmander/i);
      // testa
      expect(btnNext).toBeInTheDocument();
      expect(nextPokemon).toBeInTheDocument();
    });
  test('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    // acessa os elememntos
    const firstPokemon = screen.getByText(/Pikachu/i);
    const btnNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    // interagi com esses elementos
    userEvent.click(btnNext);
    const secondPokemon = screen.getByText(/Charmander/i);
    // testa
    expect(firstPokemon).toBeInTheDocument();
    expect(secondPokemon).toBeInTheDocument();
  });
  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    // acessa os elememntos
    const btnAll = screen.getByRole('button', { name: /All/i });
    const btnElectric = screen.getByRole('button', { name: /Electric/i });
    const btnFire = screen.getByRole('button', { name: /Fire/i });
    const btnBug = screen.getByRole('button', { name: /Bug/i });
    const btnPoison = screen.getByRole('button', { name: /Poison/i });
    const btnPsychic = screen.getByRole('button', { name: /Psychic/i });
    const btnNormal = screen.getByRole('button', { name: /Normal/i });
    const btnDragon = screen.getByRole('button', { name: /Dragon/i });
    // testa
    expect(btnAll).toBeInTheDocument();
    expect(btnElectric).toBeInTheDocument();
    expect(btnFire).toBeInTheDocument();
    expect(btnBug).toBeInTheDocument();
    expect(btnPoison).toBeInTheDocument();
    expect(btnPsychic).toBeInTheDocument();
    expect(btnNormal).toBeInTheDocument();
    expect(btnDragon).toBeInTheDocument();
  });
  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    // acessa os elememntos
    const typeBtn = screen.getAllByTestId('pokemon-type-button')[1];
    userEvent.click(typeBtn);
    expect(typeBtn).toBeInTheDocument();
    const btnAll = screen.getByRole('button', { name: /All/i });
    const btnNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    // interagi com esses elementos
    userEvent.click(btnAll);
    userEvent.click(btnNext);
    const secondPokemon = screen.getByText(/Charmander/i);
    // testa

    expect(btnAll).toBeInTheDocument();
    expect(secondPokemon).toBeInTheDocument();
  });
});
