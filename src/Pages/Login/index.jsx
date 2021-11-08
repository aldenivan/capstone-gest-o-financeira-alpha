import {Container, ImageDiv, SigninDiv, Image, LoginForm, Paragrafo} from './style.js'
import AlphaImage from '../../Assets/Alpha.png'
import Person from '../../Assets/Icons/Person.png'
import Padlock from '../../Assets/Icons/Padlock.png'



export default function Login(){

    return(
        <Container>
            <ImageDiv>
            </ImageDiv>
            <SigninDiv>
                <Image src={AlphaImage} alt="Icon Alpha" />

                <LoginForm>
                    <div className="input-primary-div">
                        <img src={Person} alt="person" className="input-primary-image"/>
                        <input className="input-primary" placeholder="Email"/>
                    </div>

                    <div className="input-primary-div">
                        <img src={Padlock} alt="person" className="input-primary-image"/>
                        <input className="input-primary" placeholder="Senha"/>
                    </div>
                </LoginForm>

                <button className="btn-primary">Entrar</button>
                <Paragrafo>Não é cadastrado? Cadastre-se</Paragrafo>
            </SigninDiv>
        </Container>
    )
}