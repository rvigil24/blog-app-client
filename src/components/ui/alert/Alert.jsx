import React from 'react';

export const Alert = ({ content, alertType = 'danger' }) => {
  return (
    <div
      className={`alert alert-${alertType} text-center alert-dismissible`}
      role="alert"
    >
      {content}
    </div>
  );
};
