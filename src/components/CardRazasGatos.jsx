function CardRazasGatos({nombreRazas, imagen}) {
    return (
        <li className="beerdcard " >               
            <div className="contenedorImagen">
                <img src={imagen} alt={nombreRazas}/>
            </div>
            <span className="breedTitle">{nombreRazas}</span>                                                  
        </li>
    );
}

export default CardRazasGatos;