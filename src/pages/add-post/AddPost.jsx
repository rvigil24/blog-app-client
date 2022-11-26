import { Main } from '@layout';
import { Alert } from '@components/ui';
import { useCreatePost } from '@hooks';

export const AddPost = () => {
  const {
    categories,
    error,
    isCreated,
    form,
    handleInputChange,
    handleSubmit,
  } = useCreatePost();

  return (
    <Main>
      {error && <Alert content={error} />}
      {isCreated && <Alert alertType="success" content="Post creado exitosamente" />}
      <form onSubmit={handleSubmit} className="mb-3">
        {/* titulo del post */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Titulo del post
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            required
            onChange={handleInputChange}
            aria-describedby="title"
          />
        </div>
        {/* categoria del post */}
        <div className="mb-3">
          <label htmlFor="formFileLg" className="form-label">
            Categoria del post
          </label>
          <select
            required
            id="categoryId"
            name="categoryId"
            onChange={handleInputChange}
            defaultValue="null"
            className="form-select"
            aria-label="Seleccione categoria"
          >
            <option disabled value="null">
              Seleccione categoria
            </option>
            {categories.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {/* foto de portada del post */}
        <div>
          <label htmlFor="formFileLg" className="form-label">
            Agregar foto de portada
          </label>
          <input
            className="form-control form-control-lg"
            id="photo"
            onChange={handleInputChange}
            type="file"
            name="photo"
            accept="image/png, image/gif, image/jpeg"
          />
        </div>
        {/* contenido del post */}
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Contenido
          </label>
          <textarea
            required
            onChange={handleInputChange}
            className="form-control"
            id="desc"
            name="desc"
            rows="8"
          />
        </div>
        {/* boton de enviar */}
        <button type="submit" className="btn btn-primary">
          Crear Post
        </button>
      </form>
    </Main>
  );
};
