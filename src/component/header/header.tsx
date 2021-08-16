import { Link } from 'react-router-dom';
import '../../style/scss/header.scss'

const Header = () => {
  return(
    <header>
      <div className="site-header">
        <ul className="detail">
          <li>카테고리</li>
          <li>검색</li>
        </ul>
        <div className="logo">
          <h1>
            <Link to={'/'}>HOME</Link>
          </h1>
        </div>
        <ul className="user">
          <li>
            <Link to={'/login'}>login</Link>
          </li>
          <li>
            <Link to = {'/myshop'}>장바구니</Link>
          </li>
          <li>
            <Link to = {'/mypage'}>My Page</Link>
          </li>
        </ul>
      </div>
      
    </header>
  )
}

export default Header;