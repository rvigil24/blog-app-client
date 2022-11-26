import { useSelector } from 'react-redux';

export const useGetToken = () => {
  const { token } = useSelector((state) => state.auth);

  return {
    token,
  };
};
