import React, { useEffect, useState } from 'react';
import Message from './Message';
import SearchBar from './SearchBar';
import ReposResult from './ReposResult';
import '../styles/index.scss';

import { Repo, ResultAPI } from './types';

const ReposFinder: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const [resultAPI, setResultAPI] = useState<ResultAPI>();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${page}&per_page=9`
    )
      .then((response) => response.json())
      .then((data: ResultAPI) => {
        if (page === 1) {
          setResultAPI(data);
        } else if (page > 1) {
          setResultAPI((prevstate: any) => {
            if (!prevstate || !prevstate.items) return { ...prevstate };

            const newItems: Repo[] = [
              ...prevstate.items,
              ...(data.items as Repo[]),
            ];

            return {
              ...prevstate,
              items: newItems,
            } as ResultAPI;
          });
        }
      })
      .catch((err) => console.error(err));
  }, [search, page]);

  const totalCountPicker = (): number => {
    if (!resultAPI || resultAPI.message === 'Validation Failed') return -1;
    return resultAPI.total_count || -1;
  };

  const reposPicker = (): Repo[] => {
    if (!resultAPI || resultAPI.message === 'Validation Failed') return [];
    return resultAPI.items || [];
  };

  const incrementPage = () => {
    setPage((prevstate) => prevstate + 1);
  };

  return (
    <main>
      <img src="../src/assets/images/logo-github.png" alt="Github" />
      <SearchBar setPage={setPage} setSearch={setSearch} />
      <Message total_count={totalCountPicker()} />
      <ReposResult incrementPage={incrementPage} repos={reposPicker()} />
    </main>
  );
};

export default ReposFinder;
