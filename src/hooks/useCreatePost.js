import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetchData, useForm, useGetToken } from '@hooks';

export const useCreatePost = () => {
  const { token } = useGetToken();
  const { data: categories } = useFetchData(`categories`);
  const [error, setError] = useState(null);
  const [isCreated, setIsCreated] = useState(false);
  const { form, handleInputChange, handleSubmit } = useForm(
    {
      title: '',
      desc: '',
      photo: null,
      categoryId: null,
    },
    async (formData) => {
      const form = new FormData();
      if (!formData.title) return setError('Por favor ingrese titulo del post');
      if (!formData.desc)
        return setError('Por favor ingrese contenido en el post');
      if (!formData.categoryId) {
        return setError('Por favor seleccione una categoria');
      }
      form.append('title', formData.title);
      form.append('desc', formData.desc);
      form.append('categoryId', formData.categoryId);
      photo && form.append('photo', photo.files[0]);
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}posts`,
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        if (res.status !== 201) throw Error('error al crear post');
        setIsCreated(true);
      } catch (err) {
        setError('El Post no pudo ser creado, intente nuevamente');
      }
    }
  );

  useEffect(() => {
    setError(null);
  }, [form]);

  return {
    categories,
    error,
    isCreated,
    form,
    handleInputChange,
    handleSubmit,
  };
};
