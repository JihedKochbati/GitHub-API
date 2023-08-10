import React from 'react';
import { Repo } from './types';

type Props = {
  repos: Repo[];
  incrementPage: () => void;
};

const ReposResult: React.FC<Props> = ({ repos, incrementPage }) => {
  return (
    <section id="repos_result">
      {repos.map((repo: Repo, key: number) => {
        return (
          <a
            href={repo.svn_url}
            key={`${key} ${repo.name}`}
            title={`Aller vers ${repo.name} sur GitHub`}
            style={{ animation: `0.3s fadeIn 0.${key}s 1 ease backwards ` }}
          >
            <article>
              <img src={repo.owner?.avatar_url} alt={repo.name} />
              <div>
                <h3>{repo.name}</h3>
                <i>{repo.owner?.login}</i>
                <p>{repo.description}</p>
              </div>
            </article>
          </a>
        );
      })}
      {repos.length !== 0 && (
        <button type="button" id="more_repos" onClick={incrementPage}>
          Charger plus de repos
        </button>
      )}
    </section>
  );
};

export default ReposResult;
