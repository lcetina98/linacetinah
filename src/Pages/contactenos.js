'use client'

import styles from '@/app/page.module.css';
import MapContainer from '@/Componentes/apimaps';

const Contactenos = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega la lógica necesaria para manejar el envío del formulario aquí
    console.log('Formulario enviado');
    // Limpia los campos del formulario
    e.target.reset();
  };

  return (
    <div className={styles.contactenosContainer}>
      {/* Parte izquierda - Formulario de contacto */}
      <div className={styles.formContainer}>
        <h2>Contáctenos</h2>
        <h6>Contáctenos sobre cualquier cosa relacionada con nuestra empresa o servicios.
            Haremos todo lo posible para llamarte lo antes posible.</h6>
        <form className={styles.formContactenos} onSubmit={handleSubmit}>
          <label className={styles.labelFormContactenos}>
            Nombre:
            <input className={styles.inputFormContactenos} type="text" name="nombre" required />
          </label>
          <label className={styles.labelFormContactenos}>
            Teléfono:
            <input className={styles.inputFormContactenos} type="tel" name="telefono" required />
          </label>
          <label className={styles.labelFormContactenos}>
            Correo:
            <input className={styles.inputFormContactenos} type="email" name="correo" required />
          </label>
          <label className={styles.labelFormContactenos}>
            Asunto:
            <input className={styles.inputFormContactenos} type="text" name="asunto" required />
          </label>
          <label className={styles.labelFormContactenos}>
            Pregunta:
            <textarea className={styles.textareaFormContactenos} name="pregunta" required />
          </label>
          <button className={styles.buttonFormContactenos} type="submit">Enviar</button>
        </form>
      </div>

      {/* Parte derecha - Redes sociales */}
      <div className={styles.redesSocialesContainer}>
        <h2>Redes sociales</h2>
        <div className={styles.redesSocialesItem}>
          <img src="/Images/Facebook.png" alt="Facebook" />
          <p>Facebook</p>
        </div>
        <div className={styles.redesSocialesItem}>
          <img src="/Images/tiktok.png" alt="TikTok" />
          <p>TikTok</p>
        </div>
        <div className={styles.redesSocialesItem}>
          <img src="/Images/instagram.png" alt="Instagram" />
          <p>Instagram</p>
        </div>
      </div>
      <div>
        <h1>Encuentra tu ubicación más cercana</h1>
        <h5>Da click en el lugar donde estas ubicado para validar cual es la tienda más cercana</h5>
        <MapContainer />
    </div>
    </div>
  );
};

export default Contactenos;