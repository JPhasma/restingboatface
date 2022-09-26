import styles from '../styles/Navlist.module.css';

function Navlist({ tags }) {
  console.log('TAGS', tags);
  return (
    <div className={styles.navlist}>
      <ul>
        <li>HomePort</li>
      </ul>
    </div>
  );
}

export default Navlist;

// export async function getStaticProps() {
//   const res = await fetch(
//     `https://mystrapi-restingboatface.herokuapp.com/api/taglists`
//   );
//   const tags = await res.json();

//   return {
//     props: { tags: tags.data },
//     revalidate: 1,
//   };
// }
