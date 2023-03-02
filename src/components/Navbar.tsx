import Reạct from 'react'
import Logo from '../assets/logo.png'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <img 
        src={Logo} 
        alt="no-image"
        className='nav-bar-logo'
        >
      </img>
      <div
      className='nav-bar-search'
      >
        <input
        type="search"
        >
        </input>
        <i className="fas fa-search"></i>
      </div>
    </div>
  )
}
export default Navbar