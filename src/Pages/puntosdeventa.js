import React from 'react';
import styles from '@/app/page.module.css';
import PuntoDeVentaCard from '../Componentes/card';

const PuntosDeVenta = () => {
  // Puedes reemplazar estos datos con la información real de tus puntos de venta
  const puntosDeVentaData = [
    {
      ciudad: 'Laureles',
      direccion: 'Dirección: Cra.66 #48-30',
      horarios: 'Horario Lunes a sábado: 9:00 am a 8:00 pm',
      telefono: 'Telefono:3008251975',
      imagen: '/Images/ITAGUI.jpg', // Reemplaza con la ruta correcta de la imagen
    },
    {
      ciudad: 'Poblado',
      direccion: 'Dirección: Cra. 44 #20-65',
      horarios: 'Horario Lunes a sábado: 9:00 am a 8:00 pm',
      telefono: 'Telefono:3008251975',
      imagen: '/Images/ENVIGADO.jpg',
    },
    {
      ciudad: 'Sabaneta',
      direccion: 'Cra. 44 #50 Sur-1 a 50 Sur-279',
      horarios: 'Horario Lunes a sábado: 9:00 am a 8:00 pm',
      telefono: 'Telefono:3008251975',
      imagen: '/Images/SAN ANTONIO.jpg',
    },
    {
      ciudad: 'Aranjuez',
      direccion: 'Cl. Barranquilla #53-288',
      horarios: 'Horario Lunes a sábado: 9:00 am a 8:00 pm',
      telefono: 'Telefono:3008251975',
      imagen: '/Images/BELLO.jpg',
    },
  ];

  return (
    <div className={styles.puntosDeVentaContainer}>
      {puntosDeVentaData.map((punto, index) => (
        <PuntoDeVentaCard key={index} {...punto} />
      ))}
    </div>
  );
};

export default PuntosDeVenta;