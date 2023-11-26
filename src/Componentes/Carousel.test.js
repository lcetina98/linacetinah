import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './carousel';

test('renders Carousel component', () => {
  const mockImages = [
    { url: 'image1.jpg', titulo: 'Image 1', description: 'Description 1', precio: '$10' },
    { url: 'image2.jpg', titulo: 'Image 2', description: 'Description 2', precio: '$20' },
    { url: 'image3.jpg', titulo: 'Image 3', description: 'Description 3', precio: '$30' },
  ];

  const { getByAltText, getByText } = render(<Carousel images={mockImages} />);
  const image1 = getByAltText(/Image 1/i);
  const image2 = getByAltText(/Image 2/i);
  const image3 = getByAltText(/Image 3/i);
  const priceElement = getByText(/\$10/i);

  expect(image1).toBeInTheDocument();
  expect(image2).toBeInTheDocument();
  expect(image3).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});

test('clicking next button updates current image', () => {
  const mockImages = [
    { url: 'image1.jpg', titulo: 'Image 1', description: 'Description 1', precio: '$10' },
    { url: 'image2.jpg', titulo: 'Image 2', description: 'Description 2', precio: '$20' },
    { url: 'image3.jpg', titulo: 'Image 3', description: 'Description 3', precio: '$30' },
  ];

  const { getByText, getByAltText } = render(<Carousel images={mockImages} />);
  const nextButton = getByText(/Siguiente/i);

  fireEvent.click(nextButton);

  const image2 = getByAltText(/Image 2/i);
  const priceElement = getByText(/\$20/i);

  expect(image2).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});