import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/Search.module.css';

function Search() {
  const [term, setTerm] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/logs/search?term=${term}`);
    setTerm('');
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search the logs'
        />
      </form>
    </div>
  );
}

export default Search;
