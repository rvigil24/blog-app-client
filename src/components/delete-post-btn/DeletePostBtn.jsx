import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useGetToken } from '@hooks';

export const DeletePostBtn = ({ postId }) => {
  const { token } = useGetToken();
  const history = useHistory();
  const [error, setError] = useState(null);
  const handleClick = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}posts/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      history.push('/');
    } catch (ex) {
      setError('Post no pudo ser eliminado');
    }
  };

  return (
    <button onClick={handleClick} className="mx-3 badge text-bg-danger">
      Eliminar 🔥
    </button>
  );
};
