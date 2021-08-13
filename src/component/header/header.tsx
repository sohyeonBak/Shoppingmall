
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <h1>
        <Link to={'/'}>HOME</Link>
      </h1>
      <ul>
        <li>
          <Link to={'/login'}>login</Link>
        </li>
        <li>
          <Link to={'/signup'}>signup</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;