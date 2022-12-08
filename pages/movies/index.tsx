import Axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/Movies.module.css'


const myLoader = ({ src }) => {
    return `${process.env.URL_IMAGE }${src}`
  }

const MovieList = ({movies}) => {
    console.log(movies.results, 'here are movies')
    return(
        <div>
             <form className={styles.form}>
                 <input type='text' placeholder='search movie' className='search'></input>
                 <button>search</button>
             </form>

        <ul className={styles.grid}>
            {movies.results.map( (el, index) => {   
                return (
                <li key={index} className={styles.card}>
                <h1>{el.title}</h1>
                <Image 
                    className={styles.images} 
                    width={500} 
                    height={350} 
                    loader={myLoader} 
                    src={el.backdrop_path} 
                    alt="Picture of the author"/>
                </li>
            )}
            )}
         </ul>
           
        </div>
    )

};

export const getStaticProps = async () => {
    const data = await Axios.get(`${process.env.API_URL}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    return{
        props:{
            movies: data.data,
        }
    }
}

export default MovieList;