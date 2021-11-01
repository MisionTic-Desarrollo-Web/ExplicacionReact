import gatoPersa from 'media/gato-persa-solid.jpg';
import gatoSiames from 'media/siames.jpg';

import CardRazasGatos from 'components/CardRazasGatos';

function Index(){
    return(         
    
        <section>            
            <h1>Razas de Gatos</h1>
            <ul className="beerdContainerCard">                
                <CardRazasGatos nombreRazas='Gato Persa' imagen={gatoPersa}  />
                <CardRazasGatos nombreRazas='Gato Siames' imagen={gatoSiames}  />                         
            </ul>            
        </section>
    );
}

export default Index;