import React from 'react';
import styles from './Page.module.css'; // Estilo CSS para el componente
import Categorias from '../Pages/categorias';
import Contactenos from '../Pages/contactenos';
import PuntosdeVenta from '../Pages/puntosdeventa';
import Reseñas from '../Pages/resenas';
import Navegador from '../Componentes/navegador';

const Page = () => {
  return (
    <div className={styles.container}>
      <Navegador />
      <div>
        <Categorias />
      </div>
      <div>
        <Contactenos />
      </div>
      <div>
        <PuntosdeVenta />
      </div>
      <div>
        <Reseñas />
      </div>
    </div>
  );
};

export default Page;