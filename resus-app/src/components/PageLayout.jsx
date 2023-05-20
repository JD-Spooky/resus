
import logo from '../img/logo.jpg';

const PageLayout = ({children}) => (
<div>
    <img className="float-end" alt="logo" src={logo}/>
    {children}
</div>
);

export default PageLayout;

