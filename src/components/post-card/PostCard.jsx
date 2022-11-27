import { Link } from 'react-router-dom';
import { DeletePostBtn } from '@components';

export const PostCard = ({ post }) => {
  return (
    <div className="col-md-6 mb-3 card">
      <Link to={`/post/${post.id}`}>
        <img
          className="card-img-top"
          src={post.photo? post.photo : 'https://dummyimage.com/900x400/ced4da/6c757d.jpg'}
          alt="..."
        />
      </Link>
      <div className="card-body">
        <div className="d-flex justify-content-between my-2">
          <span className="badge text-bg-light">
            Categoria: {post.category?.slug}
          </span>
          <span className="badge text-bg-light">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
        <h2 className="card-title h4">{post.title}</h2>
        <p className="card-text">{post.desc.slice(0, 180)}...</p>
        <div className="d-flex justify-content-between">
          <Link className="btn btn-primary" to={`/post/${post.id}`}>
            Leer mas 📝
          </Link>
        </div>
      </div>
    </div>
  );
};
