import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  const nameId = 'pokemon-name';
  const typeId = 'pokemon-type';
  const weightId = 'pokemon-weight';

  test('Teste se é renderizado um card com informações de determinado pokémon',
    () => {
      renderWithRouter(<App />);
      // acessar os elementos
      const pokemonName = screen.getByTestId(nameId);
      const pokemonType = screen.getByTestId(typeId);
      const pokemonWeight = screen.getByTestId(weightId);

      const value = pokemonWeight.innerHTML;
      // console.log(value);
      const name = pokemonName.innerHTML;
      // console.log(name);
      const textWeight = screen.getByText(value);
      const imgPokemon = screen.getByAltText(`${name} sprite`);
      // interagir com esses elementos
      // testar
      expect(pokemonName).toBeInTheDocument();
      expect(pokemonType).toBeInTheDocument();
      expect(pokemonWeight).toBeInTheDocument();
      expect(textWeight).toBeInTheDocument();
      expect(imgPokemon).toBeInTheDocument();
    });
  test('Teste se card do Pokémon indicado na Pokédex contém link de navegação',
    () => {
      const { history } = renderWithRouter(<App />);
      // history.push('/pokemons/25');
      // acessar os elementos
      const linkMoreDetails = screen.getByText(/More details/i);
      // console.log(linkMoreDetails.id);
      // interagir com esses elementos
      expect(linkMoreDetails).toBeInTheDocument();
      userEvent.click(linkMoreDetails);
      const summary = screen.getByRole('heading', { level: 2, name: /Summary/i });
      // console.log(history);
      const url = history.location.pathname;
      // console.log(url);
      // testar
      expect(url).toBe('/pokemons/25');
      expect(summary).toBeInTheDocument();
    });
  // test.only('Teste se é feito redirecionamento para página de detalhes do Pokémon',
  //   () => {
  //     // acessar os elementos
  //     // interagir com esses elementos
  //     // testar
  //   });
  test('Teste também se a URL exibida no navegador muda', () => {
    // acessar os elementos
    // interagir com esses elementos
    // testar
  });
  test('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    // acessar os elementos
    // interagir com esses elementos
    // testar
  });
});
