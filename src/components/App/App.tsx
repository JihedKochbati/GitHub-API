import { useEffect } from 'react';
import ReposFinder from '../ReposFinder';

const App = () => {
  useEffect(() => {
    document.title = 'Repos Finder - GHub API';
  }, []);

  return <ReposFinder />;
};

export default App;
