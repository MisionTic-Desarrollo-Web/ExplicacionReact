import logo from './logo.svg';
import './styles/styles.css';
import gatoPersa from './media/gato-persa-solid.jpg';
import gatoSiames from './media/siames.jpg';
import logoGato from './media/logo-gatos.png';

function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
            <li><img src={logoGato} alt="imagen-gato" class="logo"/></li>
            <li><button class="button main-button">Nuevo Post</button></li>
            <li><button class="button main-button">Login</button></li>
            <li><button class="button secondary-button">Registro</button></li>
            <li>
                <div class="busqueda">
                    <input type="text" placeholder="Buscar una raza de gatos" class="enter"/>
                    <i class="fas fa-search lupa"></i>
                </div>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1>Razas de Gatos</h1>
            <ul class="beerdContainerCard">
                <li class="beerdcard">
                    <div class="contenedorImagen">
                        <img src={gatoPersa} alt="gato persa"/>                        
                    </div>          
                    <span class="breedTitle">Gato Persa</span>
                </li>
                <li class="beerdcard">
                    <div class="contenedorImagen">
                        <img src={gatoSiames} alt="gato siames"/>
                    </div>
                    <span class="breedTitle">Gato Siames</span>                                     
                </li>
            </ul>
        </section>
    </main>

    <footer>

    </footer>
    </div>
  );
}

export default App;
