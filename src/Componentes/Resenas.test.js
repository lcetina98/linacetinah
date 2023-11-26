import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Resenas from './resenas';

test('renders Resenas component', () => {
  const { getByText } = render(<Resenas />);
  const agregarResenaText = getByText(/Agregar Reseña/i);
  expect(agregarResenaText).toBeInTheDocument();
});

test('adding a review updates the reviews list', () => {
  const { getByText, getByLabelText } = render(<Resenas />);
  const nombreInput = getByLabelText(/Nombre/i);
  const estrellasInput = getByLabelText(/Estrellas/i);
  const comentarioInput = getByLabelText(/Comentario/i);
  const agregarResenaButton = getByText(/Agregar Reseña/i);

  fireEvent.change(nombreInput, { target: { value: 'TestUser' } });
  fireEvent.change(estrellasInput, { target: { value: '5' } });
  fireEvent.change(comentarioInput, { target: { value: 'Great experience!' } });
  fireEvent.click(agregarResenaButton);

  const userReview = getByText(/TestUser/i);
  const estrellasElement = getByText(/Calificación: 5 estrellas/i);
  const comentarioElement = getByText(/Great experience!/i);

  expect(userReview).toBeInTheDocument();
  expect(estrellasElement).toBeInTheDocument();
  expect(comentarioElement).toBeInTheDocument();
});