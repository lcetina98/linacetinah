import React from 'react';
import { render } from '@testing-library/react';
import Card from './card';

test('renders Card component', () => {
  const mockData = {
    ciudad: 'Test City',
    direccion: 'Test Address',
    horarios: 'Test Hours',
    telefono: 'Test Phone',
    imagen: 'Test Image URL',
  };

  const { getByText } = render(<Card {...mockData} />);
  const cityElement = getByText(/Test City/i);
  const addressElement = getByText(/Test Address/i);
  const phoneElement = getByText(/Test Phone/i);

  expect(cityElement).toBeInTheDocument();
  expect(addressElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();
});