import {Link} from "react-router-dom";

function CardRazasGatos({nombreRazas, imagen}) {
    return (
        <li className="beerdcard" >
            <Link to='/gatoSiames'>     
            <div className="contenedorImagen">                
                <img src={imagen} alt={nombreRazas}/>
            </div>
            </Link>            
            <span className="breedTitle">{nombreRazas}</span>                                                  
        </li>
    );
}

export default CardRazasGatos;