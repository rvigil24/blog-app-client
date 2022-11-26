import { useState, useEffect } from 'react';
import { useForm } from '@hooks';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});

  const { form, handleSubmit, handleInputChange } = useForm(
    {
      email: '',
      password: '',
    },
    async () => {
      const url = `${import.meta.env.VITE_API_URL}auth/login`;
      try {
        const body = JSON.stringify({ ...form });
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        });
        if (res.status === 401) return setError('Credenciales no validas');
        const { data } = await res.json();
        const { username, email, id, token } = data || {};
        setResponse({ username, email, id, token });
      } catch (err) {
        setError('Error de servidor');
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
