import classes from './Header.module.css';

import Nav from '../Nav/Nav';
import Basket from '../Basket/Basket';


function Header(props) {
  return (
    <header className={classes.header}>

      <div className={classes.container}>
        <Nav nav={props.nav} />
        <Basket />
        <a href="tel:+7-999-435-74-36">+7-(999)-435-74-36</a>
      </div>
    </header >
  )
}

export default Header;