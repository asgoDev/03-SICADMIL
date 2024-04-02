import React from "react";
import AppSectionLayout from "../AppSectionLayout";

function Welcome() {
  return (
    <AppSectionLayout title={"Bienvenido"}>
      <p>
        Acabas de entrar al <strong>Sistema de Captación y Administración Militar</strong> (SICADMIL).
      </p>
      <br />
      <p>
        Nuestra plataforma está diseñada para facilitar y optimizar los procesos
        de captación de nuevas tropas, con el objetivo de mantener y defender
        activamente nuestra Soberanía y Seguridad Nacional. Además, busca agilizar los
        procesos administrativos que se llevan a cabo en los diferentes
        cuarteles a lo largo y ancho de nuestro territorio.
      </p>
      <br />
      <p>
        Estamos comprometidos con el fortalecimiento de nuestra defensa nacional
        y la garantía de la integridad de nuestra Fuerza Armada Nacional Bolivariana. ¡Gracias por
        tu servicio y dedicación!
      </p>
      <br />
      <p>Por favor, selecciona una opción del menú para comenzar...</p>

      {/* 
      <p>Este sistema tiene como propósito ayudar en los procesos de captación de nuevas tropas que quieran mantener y defender activamente la Soberanía y Seguridad Nacional; así como tambíen agilizar los procesos administrativos que se llevan a cabo en los diferentes cuarteles a lo largo y ancho de nuestro territorio. </p>
      <br />
      <p>Selecciona una opción del menú para comenzar.</p> */}
      {/* // V2 */}
      {/* <p>
        Este es el Sistema de Captación y Administración Militar (SICADMIL).Este
        sistema tiene como propósito facilitar y optimizar los procesos de
        captación de nuevas tropas, contribuyendo al mantenimiento y defensa
        activa de la Soberanía y Seguridad Nacional. Además, busca agilizar los
        procesos administrativos que se llevan a cabo en los diferentes
        cuarteles a lo largo y ancho de nuestro territorio.
      </p>
      <br />
      <p>Por favor, selecciona una opción del menú para comenzar:</p>
      <ol style={{ display: "none" }}>
        <li>
          <strong>Registro de Nuevo Aspirante:</strong> Completa el proceso de
          registro para aquellos que desean unirse a nuestras fuerzas armadas y
          servir con honor y compromiso.
        </li>
        <li>
          <strong>Gestión de Tropas:</strong> Accede a herramientas para
          administrar y coordinar las actividades de las tropas existentes,
          manteniendo un control efectivo y garantizando la eficiencia en las
          operaciones.
        </li>
        <li>
          <strong>Información del Cuartel:</strong> Consulta y actualiza
          información relevante sobre los diferentes cuarteles distribuidos en
          todo nuestro territorio, garantizando una gestión logística eficiente.
        </li>
        <li>
          <strong>Procesos Administrativos:</strong> Simplifica y acelera los
          trámites administrativos relacionados con las fuerzas armadas,
          optimizando los recursos y mejorando la efectividad en la toma de
          decisiones.
        </li>
        <li>
          <strong>Estadísticas y Reportes:</strong> Accede a datos estadísticos
          y generación de informes para evaluar el desempeño, la eficacia y la
          preparación de nuestras tropas.
        </li>
      </ol>
      <br />

      <p>
        Este sistema está diseñado para fortalecer nuestra defensa nacional y
        garantizar la integridad de nuestras fuerzas armadas. ¡Gracias por tu
        servicio y dedicación!
      </p> */}
    </AppSectionLayout>
  );
}

export default Welcome;
