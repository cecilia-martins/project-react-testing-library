import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  renderWithRouter(<App />);

  const nameId = 'pokemon-name';
  const pokemonName = screen.getByTestId(nameId); // pego o nome
  const namePok = pokemonName.innerHTML;

  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas',
    () => {
      const linkMoreDetails = screen.getByText(/More details/i);

      expect(linkMoreDetails).toBeInTheDocument();
      userEvent.click(linkMoreDetails);

      const nameDetails = screen.getByText(`${namePok} Details`);

      expect(nameDetails).toBeInTheDocument();
      expect(linkMoreDetails).not.toBeInTheDocument();

      const summary = screen.getByRole('heading', { level: 2, name: /Summary/i });

      expect(summary).toBeInTheDocument();

      const sectionDetails = screen.getByText(/This intelligent Pokémon roasts/i);

      expect(sectionDetails).toBeInTheDocument();
    });
  test('Teste se existe na pág uma seção com mapas contendo as localizações do pokémon',
    () => {
      renderWithRouter(<App />);

      const linkMoreDetails = screen.getByText(/More details/i);

      expect(linkMoreDetails).toBeInTheDocument();
      userEvent.click(linkMoreDetails);

      const gameLocations = screen
        .getByRole('heading', { level: 2, name: `Game Locations of ${namePok}` });
      expect(gameLocations).toBeInTheDocument();

      const locationAltOne = screen.getAllByAltText(`${namePok} location`)[0];
      const locationAltTwo = screen.getAllByAltText(`${namePok} location`)[1];
      const locationOneText = screen.getByText(/Kanto Viridian Forest/i);
      const locationTwoText = screen.getByText(/Kanto Power Plant/i);

      expect(locationAltOne).toBeInTheDocument();
      expect(locationAltTwo).toBeInTheDocument();
      expect(locationOneText).toBeInTheDocument();
      expect(locationTwoText).toBeInTheDocument();
      expect(locationAltOne).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
      expect(locationAltTwo).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    });
  test('Teste se o usuário pode favoritar pokémon através da pág de detalhes',
    () => {
      renderWithRouter(<App />);
      const linkMoreDetails = screen.getByText(/More details/i);
      expect(linkMoreDetails).toBeInTheDocument();
      userEvent.click(linkMoreDetails);
      const favCheckbox = screen.getByLabelText(/Pokémon favoritado?/i); // LABEL COM TEXTO Pokémon favoritado?

      expect(favCheckbox).toBeInTheDocument(); // A PAG DEVE EXIBIR CHECKBOX
      userEvent.click(favCheckbox);

      const linkFavPokemons = screen.getByText(/Favorite Pokémons/i);
      expect(linkFavPokemons).toBeInTheDocument();
      userEvent.click(linkFavPokemons);

      const altImage = screen.getByAltText(`${namePok} is marked as favorite`);
      expect(altImage).toBeDefined();
      const srcImage = altImage.src;
      expect(srcImage).toContain('/star-icon.svg');

      const linkDetails = screen.getByText(/More details/i);
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);

      const stillFav = screen.getByRole('checkbox', { checked: true });
      expect(stillFav).toBeInTheDocument();
      userEvent.click(stillFav);
      const noMoreFav = screen.getByRole('checkbox', { checked: false });
      expect(noMoreFav).toBeInTheDocument();
    });
});
