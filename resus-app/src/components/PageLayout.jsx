
import logo from '../img/logo.jpg';
import { Col, Button, Row } from 'react-bootstrap';
import PageTypes from '../constants/PageTypes';

const PageLayout = ({children, pageType, setPageType}) => {
    const goBack = () => setPageType(pageType === PageTypes.CONTENT ? PageTypes.CATEGORY : PageTypes.HOME);
    const goHome = () => setPageType(PageTypes.HOME);

return(
    <div>
        <Row>
            <Col>
                <Col xs="6">
                    {pageType !== PageTypes.HOME && 
                    <div className="p-3">
                        <Button variant="primary" onClick={() => goHome()}><h2>Home</h2></Button>
                        <Button variant="primary" onClick={() => goBack()}><h2>Back</h2></Button>
                    </div>
                    }
                </Col>
            </Col>
            <Col>
                <div>
                    <img className="m-1 float-end" alt="logo" src={logo}/>
                </div>
            </Col>
        </Row>
        {children}
    </div>
);
};

export default PageLayout;

