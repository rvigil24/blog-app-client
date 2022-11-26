import React from 'react';
import { useParams } from 'react-router-dom';
import { Main } from '@layout';
import { DeletePostBtn } from '@components';
import { useFetchData, useIsLoggedIn } from '@hooks';

const PostNotFound = () => {
  return (
    <div class="d-flex align-items-center justify-content-center py-5">
      <h1 class="display-1 fw-bold  text-center">Publicacion no encontrada</h1>
    </div>
  );
};

export const Post = () => {
  const { postId } = useParams();
  const { isLoggedIn } = useIsLoggedIn();
  const { data: post, isLoading, errors } = useFetchData(`posts/${postId}`);
  const postNotFound = !post && !isLoading;

  if (postNotFound) {
    return (
      <Main>
        <PostNotFound />
      </Main>
    );
  }

  return (
    <Main>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <article>
              {/* Post header */}
              <header className="">
                {/* titulo */}
                <h1 className="fw-bolder mb-1">{post.title}</h1>
                {/* fecha y autor */}
                <div className="text-muted fst-italic mb-2">
                  {post.createdAt}, Autor: {post.user?.username}
                </div>
                {/* categoria */}
                <div className="badge bg-secondary text-decoration-none link-light my-2">
                  {post.category?.name}
                </div>

                {isLoggedIn && <DeletePostBtn postId={post.id} />}
              </header>
              {/* Preview image figure */}
              <figure className="mb-4">
                <img
                  className="img-fluid rounded"
                  src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
                  alt="..."
                />
              </figure>
              <section className="mb-5">{post.desc}</section>
            </article>
          </div>
        </div>
      </div>
    </Main>
  );
};
