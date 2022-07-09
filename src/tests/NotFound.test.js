import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se página contém um heading h2 com o texto Page requested not found 😭',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/qualquercoisa');
      // Acessa os elementos
      const noFound = screen.getByRole('heading', { name: /Page requested not found/i });
      // testa
      expect(noFound).toBeInTheDocument();
    });
  test('Teste se página mostra a imagem', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/qualquercoisa');
    // Acessa os elementos
    const image = screen.getByAltText(/Pikachu crying/i).src;
    // testa
    expect(image).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
