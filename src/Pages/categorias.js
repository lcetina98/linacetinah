import React from 'react';
import Carousel from '../Componentes/carousel';
import styles from '@/app/page.module.css';

const images = [
  {
    url: "./Images/BAILEYS.jpg",
    titulo: 'Baileys',
    description: 'Bizcochuelo de vainilla bañado en una mezcla majestuosa de crema de whiskey Baileys y el original tres leches Genovesa',
    precio: '$ 25,000',
  },
  {
    url: "./Images/Chocolatosa.jpg",
    titulo: 'Chocolatosa',
    description: 'Bizcochuelo de vainilla bañado en una deliciosa mezcla de chocomalta y el original tres leches Genovesa®, cubierto con crema tipo Chantilly de chocolate galleta.',
    precio: '$ 21,000',
  },
  {
    url: "./Images/Clasica.jpg",
    titulo: 'Clasica',
    description: 'Bizcochuelo de vainilla bañado en el original tres leches Genovesa®, cubierto con crema tipo chantilly, decorado con ralladura de chocolate.',
    precio: '$ 17,000',
  },
  {
    url: "./Images/Cremosodemaracuya.jpg",
    titulo: 'cremoso de Maracuya',
    description: 'Mitad Mouse Cremoso de maracuyá, mitad original tres leches Genovesa®, decorado con crema tipo chantilly y chocolate blanco.',
    precio: '$ 35,000',
  },
  {
    url: "./Images/Redvelvet.jpg",
    titulo: 'Red Velvet',
    description: 'Bizcochuelo de Red velvet bañado en el original tres leches Genovesa® Cubierta en una suave y deliciosa crema de queso.',
    precio: '$ 39,000',
  },
  {
    url: "./Images/mora.jpg",
    titulo: 'Mora silvestre',
    description: 'Bizcochuelo de vainilla bañado en el original tres leches Genovesa® con un irresistible centro de dulce de mora, cubierto con crema tipo chantilly y ralladura de chocolate blanco',
    precio: '$ 21,000',
  },
  {
    url: "./Images/ZEPELIN MORA AMAPOLA.jpg",
    titulo: 'Zepelin',
    description: 'Torta casera de vainilla con semillas de amapola y salsa de mora decorada con un delicioso y crocante streusel.',
    precio: '$ 52,000',
  },
  {
    url: "./Images/Milhojas.jpg",
    titulo: 'Milhoja',
    description: 'Bizcochuelo de vainilla remojado en el original tres leches Genovesa®, centro de arequipe con milhoja, decorado con crema tipo chantilly y trocitos de milhoja.',
    precio: '$ 33,000',
  },
  {
    url: "./Images/Postremedianoche.jpg",
    titulo: 'Postre media noche',
    description: 'Suave flan de leche sobre torta de chocolate y un centro irresistible de salsa arequipe , deliciosa combinación de texturas.',
    precio: '$ 17,000',
  },
  
];

const Categorias = () => {
  return (
    <div>
      <h1 className={styles.h1Carousel}>Productos disponibles</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Categorias;