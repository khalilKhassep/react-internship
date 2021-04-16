import {  Link } from 'react-router-dom'

import './menu.css'

const MenuItems = () => {
  return (
    <ul className={'menu'}>
      <li><Link to={'/'}> Home </Link></li>
      <li><Link to={'/covid'}> Covid </Link></li>
      <li><Link to={'/login'}>LoginApp </Link></li>
      <li><Link to={'/product'}>Category </Link></li>
    </ul>

  )
}

export default MenuItems