import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import { Main } from '@layout';
import { PostCard, Banner } from '@components';
import { useFetchData } from '@hooks';

export const Blog = () => {
  const location = useLocation();
  const parsed = qs.parse(location.search);
  const getCategory = parsed.category ? `?category=${parsed.category}` : '';
  const { data, isLoading, errors } = useFetchData(`posts${getCategory}`);

  return (
    <>
      <Main banner={<Banner />}>
        <div className="row">
          {data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Main>
    </>
  );
};
