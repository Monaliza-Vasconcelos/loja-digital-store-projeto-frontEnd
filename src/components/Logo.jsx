import logo from '../assets/logo-header.svg';

const Logo = () => {
    return ( 
        <div>
            <img 
                src={logo} 
                alt="Logo da empresa" 
                style={{ width: "253px", height: "44px" }}
            />
        </div>
     );
}
 
export default Logo;