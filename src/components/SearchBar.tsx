import { Dispatch, SetStateAction, FC, FormEvent } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
};

interface CustomElements extends HTMLFormControlsCollection {
  keywords?: HTMLInputElement;
}

const SearchBar: FC<Props> = ({ setSearch, setPage }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formElements = (e.target as HTMLFormElement).elements;
    const keywords = (formElements as CustomElements).keywords?.value;

    setPage(1);
    setSearch(keywords || '');
  };

  return (
    <section id="search_bar">
      <form onSubmit={handleSubmit}>
        <BiSearchAlt2 />
        <input
          type="text"
          name="keywords"
          id=""
          placeholder="Entrez un mot-clé"
        />
      </form>
    </section>
  );
};

export default SearchBar;
