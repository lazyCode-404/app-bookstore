import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='heading nav-link'>
          <Link to="/">Bookstore CMS</Link>
        </li>
        <li className='nav-link link'>
          <Link to="/">Books</Link>
        </li>
        <li className='nav-link link'>
          <Link to="/categories">Categories</Link>
        </li>
        <li className='log'>
        <i class="fa-solid fa-circle-user"></i>
        </li>
      </ul>
    </nav>
  )
}

export default Header