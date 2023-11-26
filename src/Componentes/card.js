import React from 'react';
import styles from '@/app/page.module.css';

const Card = ({ ciudad, direccion, horarios, telefono, imagen }) => {
  const whatsappLink = `https://wa.me/${telefono.replace(/\D/g, '')}`; // Elimina caracteres no numéricos del teléfono

  return (
    <div className={styles.card}>
      <img src={imagen} alt={ciudad} className={styles.imagenCard} />
      <div className={styles.informacionCard}>
        <p className={styles.ciudadCard}>{ciudad}</p>
        <p>{direccion}</p>
        <p>{horarios}</p>
        <p> 
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            {telefono}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;