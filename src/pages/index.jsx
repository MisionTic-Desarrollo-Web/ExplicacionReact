import gatoPersa from 'media/gato-persa-solid.jpg';
import gatoSiames from 'media/siames.jpg';
import logoGato from 'media/logo-gatos.png';
import CardRazasGatos from 'components/CardRazasGatos';

function Index(){
    return(
        <div>
            <header>               
        <ul className="navbar">
            <li><img src={logoGato} alt="imagen-gato" className="logo"/></li>
            <li><button className="button main-button">Nuevo Post</button></li>
            <li><button className="button main-button">Login</button></li>
            <li><button className="button secondary-button">Registro</button></li>
            <li>
                <div className="busqueda">
                    <input type="text" placeholder="Buscar una raza de gatos" className="enter"/>
                    <i className="fas fa-search lupa"></i>
                </div>
            </li>
        </ul>
    </header>
    <main>
        <section>            
            <h1>Razas de Gatos</h1>
            <ul className="beerdContainerCard">                
                <CardRazasGatos nombreRazas='Gato Persa' imagen={gatoPersa}  />
                <CardRazasGatos nombreRazas='Gato Siames' imagen={gatoSiames}  />                         
            </ul>            
        </section>
    </main>

    <footer>        
    </footer>
        </div>
    );
}

export default Index;