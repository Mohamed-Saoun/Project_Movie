import Cardmovie from './Cardmovie.jsx';
import Pagination from '../Pagination.js'
const Movieslist = (props) => {
    return (
        <>
        <div className='ajustment'>
            {props.movies.length > 0 ? 
                props.movies.map((film) => {
                    return <Cardmovie key={film.id} film={film} />;
                })
                : <h1 style={{marginTop:'200px',textAlign:'center',width:'1000px'}}>There Is No Movie To Show!!</h1>
            }
            
        </div>
        {props.movies.length < 1 ?
        ''
        : <Pagination getSelectedPage={props.getSelectedPage} total_pages={props.total_pages}></Pagination>}
        </>
    );
};

export default Movieslist;
