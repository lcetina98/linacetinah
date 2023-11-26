
import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const Navegador = () => {

  return (
    <div className={styles.containerNavegador}>
        <nav className={styles.menu}>
          <Link legacyBehavior href="/categorias">
            <a className={styles.menuItem}>Categorias</a>
          </Link>
          <Link legacyBehavior href="/contactenos">
            <a className={styles.menuItem}>Contactenos</a>
          </Link>
          <Link legacyBehavior href="/puntosdeventa">
            <a className={styles.menuItem}>Puntos de Venta</a>
          </Link>
          <Link legacyBehavior href="/resenas">
            <a className={styles.menuItem}>Reseñas</a>
          </Link>
        </nav>
      </div>
  );
};

export default Navegador;