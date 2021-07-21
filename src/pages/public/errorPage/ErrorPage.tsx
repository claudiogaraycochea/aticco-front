import { Link } from 'react-router-dom';
import { Row } from '../../../ui/ui';
import './ErrorPage.css';

function ErrorPage() {

  return (
    <div className="error-page center">
      <div>
        <Row>
          <h1>ErrorPage</h1>
        </Row>
        <Row>
          <Link to='/'>
            Go to Home
          </Link>          
        </Row>

      </div>
    </div>
  );
}

export default ErrorPage;