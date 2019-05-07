import React from 'react';
import s from './Navbar.module.css';
import axios from 'axios';

let oMenu = [];

axios.get('http://msdo.maxus.ru/api/get_menu.html')
  .then(res => {
    oMenu = res.data;
  })

const Navbar = () => {
    return (
      <nav>
        {oMenu}
      </nav>
  )
}

export default Navbar;