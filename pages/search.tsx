import Axios from 'axios';
import Image from 'next/image';
import styles from '../styles/Search.module.css'


const Search = () => {
  return (
    <div>
        <form className={styles.form}>
        <input type='text' placeholder='search movie' className='search'></input>
        <button>search</button>
        </form>

    </div>
  )
}

export default Search