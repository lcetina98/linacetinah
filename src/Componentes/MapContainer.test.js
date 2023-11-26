import React from 'react';
import { render } from '@testing-library/react';
import MapContainer from './MapContainer';

test('renders MapContainer component', () => {
  const { getByText } = render(<MapContainer/>);
  const mapElement = getByText(/La tienda más cercana es/i);
  expect(mapElement).toBeInTheDocument();
});