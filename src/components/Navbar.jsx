import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
function Navbar({search}) {
    
    function handlesearch(event) {
        search(event.target.value)
    }
    return(<>
    <div className="nav-style">
        <div className="displays">
            <a href='/'>
            <img src={logo} alt="" className="logo"/>
            </a>

            <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" className="serchInput" onChange={(event)=>{handlesearch(event)}} placeholder="search.."/>
            </div>
        </div>
    </div>
    </>)
};
export default Navbar;