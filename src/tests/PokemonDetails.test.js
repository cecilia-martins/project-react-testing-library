import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  renderWithRouter(<App />);

  const nameId = 'pokemon-name';
  // const typeId = 'pokemon-type';
  // const weightId = 'pokemon-weight';

  const pokemonName = screen.getByTestId(nameId); // pego o nome
  // const pokemonType = screen.getByTestId(typeId); // pego o tipo
  // const pokemonWeight = screen.getByTestId(weightId); // pego o peso

  const namePok = pokemonName.innerHTML;
  // console.log(namePok); // Pikachu

  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas',
    () => {
      // NA PAG PRINCIPAL
      const linkMoreDetails = screen.getByText(/More details/i);
      expect(linkMoreDetails).toBeInTheDocument();
      userEvent.click(linkMoreDetails);
      // NA PAG DE DETALHES DO POKEMON
      // TESTE O NOME DETAILS EXIBIDO OK
      const nameDetails = screen.getByText(`${namePok} Details`);
      expect(nameDetails).toBeInTheDocument();
      // NÃO DEVE EXISTIR LINK DE NAVEGAÇÃO
      expect(linkMoreDetails).not.toBeInTheDocument();
      // SEÇÃO DETALHES DEVE CONTER HEADING SUMMARY
      const summary = screen.getByRole('heading', { level: 2, name: /Summary/i });
      expect(summary).toBeInTheDocument();
      // SEÇÃO DE DETALHES COM PARAGRAFO ETC..
      const sectionDetails = screen.getByText(/This intelligent Pokémon roasts/i);
      expect(sectionDetails).toBeInTheDocument();
    });
  test('Teste se existe na pág uma seção com mapas contendo as localizações do pokémon',
    () => {
      renderWithRouter(<App />);
      // PAG INICIAL
      const linkMoreDetails = screen.getByText(/More details/i);
      expect(linkMoreDetails).toBeInTheDocument();
      userEvent.click(linkMoreDetails);
      // NA PAG DE DETAILS
      // DEVERAR TER UM HEADING 2 CM NOME DO POKEMON
      const gameLocations = screen
        .getByRole('heading', { level: 2, name: `Game Locations of ${namePok}` });
      expect(gameLocations).toBeInTheDocument();
      // TODAS AS LOCALIZAÇÕES DO POKEMON
      // pegando pelo alt
      const locationAltOne = screen.getAllByAltText(`${namePok} location`)[0];
      const locationAltTwo = screen.getAllByAltText(`${namePok} location`)[1];
      // pegando pelo nome da localização
      const locationOneText = screen.getByText(/Kanto Viridian Forest/i);
      const locationTwoText = screen.getByText(/Kanto Power Plant/i);

      // console.log(locationOne);
      expect(locationAltOne).toBeInTheDocument();
      expect(locationAltTwo).toBeInTheDocument();
      expect(locationOneText).toBeInTheDocument();
      expect(locationTwoText).toBeInTheDocument();
      // A IMG DEVER TER ATRIBUTO SRC COM URL LOCALIZAÇÃO
      expect(locationAltOne).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
      expect(locationAltTwo).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    });
  test('Teste se o usuário pode favoritar pokémon através da pág de detalhes',
    () => {
      renderWithRouter(<App />);
      // console.log(history);
      // PAG INICIAL
      const linkMoreDetails = screen.getByText(/More details/i);
      expect(linkMoreDetails).toBeInTheDocument();
      userEvent.click(linkMoreDetails);
      // NA PAG DE DETAILS

      const favCheckbox = screen.getByLabelText(/Pokémon favoritado?/i); // LABEL COM TEXTO Pokémon favoritado?
      expect(favCheckbox).toBeInTheDocument(); // A PAG DEVE EXIBIR CHECKBOX
      // CLICKS PRA ADD
      userEvent.click(favCheckbox);
      // INDO PRA LISTA DE FAVS
      const linkFavPokemons = screen.getByText(/Favorite Pokémons/i);
      expect(linkFavPokemons).toBeInTheDocument();
      userEvent.click(linkFavPokemons);
      // NA LISTA DE FAVS
      // const imageCard = screen.getByRole('link', { name: /More details/i });
      // expect(imageCard).toBeInTheDocument();
      // VEJO SE ESTÁ MARCADO COMO FAV
      const altImage = screen.getByAltText(`${namePok} is marked as favorite`);
      expect(altImage).toBeDefined();
      const srcImage = altImage.src;
      expect(srcImage).toContain('/star-icon.svg');
      // AGORA VOLTAR PRA DETAILS
      const linkDetails = screen.getByText(/More details/i);
      expect(linkDetails).toBeInTheDocument();
      userEvent.click(linkDetails);
      // DESFAVORITA O POK
      const stillFav = screen.getByRole('checkbox', { checked: true });
      expect(stillFav).toBeInTheDocument();
      userEvent.click(stillFav);
      const noMoreFav = screen.getByRole('checkbox', { checked: false });
      expect(noMoreFav).toBeInTheDocument();
      // userEvent.click(favCheckbox);
      // expect(noMoreFav).toBeInTheDocument();
    });
});
