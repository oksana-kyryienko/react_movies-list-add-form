import { FormEvent, useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void,
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbId, setImdbId] = useState('');
  const [description, setDescription] = useState('');

  const newMovie = {
    title,
    description,
    imgUrl,
    imdbUrl,
    imdbId,
  };

  const resetStates = () => {
    onAdd(newMovie);
    setDescription('');
    setImdbId('');
    setImgUrl('');
    setTitle('');
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setCount(counts => counts + 1);
    resetStates();
  };

  const error = !title.trim()
  || !imgUrl.trim()
  || !imdbUrl.trim()
  || !imdbId.trim();

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={handleSubmit}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={setTitle}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={(discribe) => setDescription(discribe)}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={(movieImgUrl) => setImgUrl(movieImgUrl)}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={(movieimdbUrl) => setImdbUrl(movieimdbUrl)}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={(movieimdbId) => setImdbId(movieimdbId)}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={error}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};