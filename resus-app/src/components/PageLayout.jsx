
import logo from '../img/logo.jpg';
import { Button } from 'react-bootstrap';
import PageTypes from '../constants/PageTypes';

const PageLayout = ({children, pageType, setPageType, selectedContent, selectedCategory}) => {
    const goBack = () => setPageType(pageType === PageTypes.CONTENT ? PageTypes.CATEGORY : PageTypes.HOME);
    const goHome = () => setPageType(PageTypes.HOME);
    const goAllContent = () => setPageType(PageTypes.ALL_CONTENT);

return(
    <div className="m-1">
        <div className="m-2 d-none d-sm-block">
            <img className="logo m-1" alt="logo" src={logo}/>
        </div>
        <h3>
            {pageType === PageTypes.HOME && 'Paeds E-Resus'}
            {pageType === PageTypes.CATEGORY && selectedCategory}
            {pageType === PageTypes.CONTENT && selectedContent}
            {pageType === PageTypes.ALL_CONTENT && 'A - Z all Content'}
        </h3>
        { pageType === PageTypes.HOME &&
            <div className="ml-3">
                 <Button variant="primary" onClick={() => goAllContent()}><h2>A - Z</h2></Button>
            </div> 
        }
        { pageType !== PageTypes.HOME && 
                <div className="ml-3">
                    <Button variant="primary" onClick={() => goHome()}><h2>Home</h2></Button>
                    {' '}
                    <Button variant="primary" onClick={() => goBack()}><h2>Back</h2></Button>
                </div>
            }
        <hr />
        {children}
    </div>
);
};

export default PageLayout;

