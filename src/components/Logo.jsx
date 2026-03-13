import logo from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg'

const Logo = (props) => {
    
    const returnLogo = () =>{
        

        if(props.cordafonte === 'header'){
            return logo
        } else{
            return logoFooter
        }
    }
    return ( 
        <div>
            <img className='img-logo' src={returnLogo()} alt="Logo da empresa" />
        </div>
     );
}
 
export default Logo;