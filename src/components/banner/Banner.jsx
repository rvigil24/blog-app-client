import React from 'react';

export const Banner = () => {
  return (
    <header className="py-5 bg-light border-bottom">
      <div className="container">
        <div className="text-center my-5">
          <h1 className="fw-bolder">¡Bienvenido a mi proyecto!</h1>
          <p className="lead mb-0">
            Este es un blog, una aplicacion web montada en AWS para el proyecto
            final de ATW
          </p>
        </div>
      </div>
    </header>
  );
};
