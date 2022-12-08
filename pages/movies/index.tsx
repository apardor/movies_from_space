import Axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/Movies.module.css'


const myLoader = ({ src }) => {
    return `${process.env.URL_IMAGE }${src}`
  }


 const defaultEndPoint = `${process.env.API_URL}discover/movie?api_key=${process.env.API_KEY}&with_genres=878&year=1960&with_keywords=space`;
 console.log(defaultEndPoint)


const handleSubmit = (e) =>{
    e.preventDefault();
};

const handleChange = (e) => {

};

const MovieList = ({movies}) => {
    console.log(movies.results, 'here are movies')
  
    return(
        <div>
             <form className={styles.form} onSubmit={handleSubmit}>
                 <input type='text' placeholder='search movie' className='search' onChange={handleChange}/>
                 <button>search</button>
             </form>

        <ul className={styles.grid}>
            {movies.results?.map( (el, index) => {   
                const { title, backdrop_path } = el;
                return (
                <li key={index} className={styles.card}>
                <h1>{title}</h1>
                { backdrop_path ?
                <Image 
                    className={styles.images} 
                    width={500} 
                    height={350} 
                    loader={myLoader} 
                    src= {backdrop_path}
                    alt="Picture of the author"/> : ''}
                </li>
            )}
            )}
         </ul>
           
        </div>
    )

};

export const getStaticProps = async () => {
    const data = await Axios.get(defaultEndPoint);
    return{
        props:{
            movies: data.data,
        }
    }
}

export default MovieList;
