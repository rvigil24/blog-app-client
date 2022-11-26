import { useState, useEffect } from 'react';
import { useForm } from '@hooks';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});

  const { form, handleSubmit, handleInputChange } = useForm(
    {
      email: '',
      username: '',
      password: '',
    },
    async () => {
      const url = `${import.meta.env.VITE_API_URL}auth/register`;
      try {
        const body = JSON.stringify({ ...form });
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        });
        if (res.status !== 201)
          return setError(
            'Usuario no pudo ser creado, verifique sus datos e intente nuevamente'
          );
        const { data } = await res.json();
        const { username, email, id, token } = data || {};
        setResponse({ username, email, id, token });
      } catch (err) {
        setError('Usuario ya existe');
      }
    }
  );

  useEffect(() => {
    setError(null);
  }, [form]);

  return {
    form,
    handleSubmit,
    handleInputChange,
    error,
    response,
  };
};
