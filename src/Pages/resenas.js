'use client'

import React, { useState } from 'react';
import styles from '@/app/page.module.css';

const Resena = ({ nombre, estrellas, comentario }) => {
  return (
    <div className={styles.resena}>
      <p>{nombre}</p>
      <div className={styles.calificacion}>
        <p>{`Calificación: ${estrellas} estrellas`}</p>
      </div>
      <p>{comentario}</p>
    </div>
  );
};

const Resenas = () => {
  const [resenas, setResenas] = useState([
    { nombre: 'Usuario1', estrellas: 4, comentario: 'Buena experiencia' },
    { nombre: 'Usuario2', estrellas: 5, comentario: 'Excelente servicio' },
    // Agrega más reseñas según sea necesario
  ]);

  const [nuevaResena, setNuevaResena] = useState({
    nombre: '',
    estrellas: 1,
    comentario: '',
  });

  const handleNombreChange = (e) => {
    setNuevaResena({ ...nuevaResena, nombre: e.target.value });
  };

  const handleEstrellasChange = (e) => {
    setNuevaResena({ ...nuevaResena, estrellas: parseInt(e.target.value) });
  };

  const handleComentarioChange = (e) => {
    setNuevaResena({ ...nuevaResena, comentario: e.target.value });
  };

  const agregarResena = () => {
    setResenas([...resenas, nuevaResena]);
    // Puedes agregar lógica adicional aquí, como enviar la nueva reseña al servidor
    // y luego actualizar la lista de reseñas en consecuencia
    setNuevaResena({ nombre: '', estrellas: 1, comentario: '' });
  };

  return (
    <div className={styles.resenasContainer}>
      <div className={styles.resenasLista}>
        {resenas.map((resena, index) => (
          <Resena key={index} {...resena} />
        ))}
      </div>
      <div className={styles.agregarResena}>
        <h2>Agregar Reseña</h2>
        <label className={styles.labelResena}>
          Nombre:
          <input className={styles.inputResena} type="text" value={nuevaResena.nombre} onChange={handleNombreChange} />
        </label>
        <label className={styles.labelResena}>
          Estrellas:
          <select className={styles.selectResena} value={nuevaResena.estrellas} onChange={handleEstrellasChange}>
            {[1, 2, 3, 4, 5].map((estrella) => (
              <option key={estrella} value={estrella}>
                {estrella}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.labelResena}>
          Comentario:
          <textarea className={styles.textareaResena} value={nuevaResena.comentario} onChange={handleComentarioChange} />
        </label>
        <button className={styles.buttonResena} onClick={agregarResena}>Agregar Reseña</button>
      </div>
    </div>
  );
};

export default Resenas;
